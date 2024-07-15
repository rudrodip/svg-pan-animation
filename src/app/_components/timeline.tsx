"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  PanInfo,
} from "framer-motion";

const fxs = [
  "/fx/1-amp.wav",
  "/fx/2-amp.wav",
  "/fx/3-amp.wav",
  "/fx/4-amp.wav",
  "/fx/5-amp.wav",
];

const ROTATION_THRESHOLD = 10;
const CENTER_X = 2200; // half of the viewBox width
const CENTER_Y = 2200; // half of the viewBox height

const generateCircle = (
  radius: number,
  strokeWidth: number,
  color: string = "rgb(var(--foreground))"
) => {
  return (
    <>
      <circle
        cx={CENTER_X}
        cy={CENTER_Y}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </>
  );
};

const generateLines = (
  numLines: number,
  length: number,
  radius: number,
  color: string = "rgb(var(--foreground))"
) => {
  const lines = [];
  for (let i = 0; i < numLines; i++) {
    const angle = (i / numLines) * 2 * Math.PI;
    const startX = CENTER_X + radius * Math.cos(angle);
    const startY = CENTER_Y + radius * Math.sin(angle);
    const endX = CENTER_X + (radius + length) * Math.cos(angle);
    const endY = CENTER_Y + (radius + length) * Math.sin(angle);

    lines.push(
      <line
        key={`line-${i}`}
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke={color}
        strokeWidth="1.83333"
        strokeLinecap="round"
      />
    );
  }
  return lines;
};

export default function TimelineSVG() {
  const [currentSound, setCurrentSound] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [rotateZ, setRotateZ] = useState(0);
  const rotateMotionValue = useMotionValue(0);
  const lastRotation = useRef(0);
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  const transformedRotate = useTransform(rotateMotionValue, (latest) => {
    return `translateY(-70%) scale(2) rotateZ(${latest}deg)`;
  });

  const handlePan = useCallback(
    (_: PointerEvent, info: PanInfo) => {
      const newRotation = rotateZ - info.delta.x / 15;
      setRotateZ(newRotation);
      animate(rotateMotionValue, newRotation, { duration: 0, bounce: 0 });
    },
    [rotateMotionValue, rotateZ]
  );

  const playSound = useCallback(
    (index: number) => {
      if (playing) {
        audioRefs.current[currentSound].pause();
        audioRefs.current[currentSound].currentTime = 0;
      }

      const audio = audioRefs.current[index];
      if (audio) {
        audio.currentTime = 0;
        audio
          .play()
          .then(() => setPlaying(true))
          .catch((error) => console.error("Failed to play audio:", error));
      }
    },
    [playing, currentSound]
  );

  const selectNextSound = useCallback(() => {
    const nextSound = (currentSound + 1) % fxs.length;
    setCurrentSound(nextSound);
    playSound(nextSound);
  }, [currentSound, playSound]);

  useEffect(() => {
    const normalizedRotation = Math.abs(
      Math.floor(rotateZ / ROTATION_THRESHOLD)
    );

    if (normalizedRotation !== lastRotation.current) {
      selectNextSound();
      lastRotation.current = normalizedRotation;
    }
  }, [rotateZ, selectNextSound]);

  useEffect(() => {
    const handleEnded = () => setPlaying(false);
    const currentAudioRefs = audioRefs.current;

    currentAudioRefs.forEach((audio) => {
      audio.addEventListener("ended", handleEnded);
    });

    return () => {
      currentAudioRefs.forEach((audio) => {
        audio.removeEventListener("ended", handleEnded);
      });
    };
  }, []);

  return (
    <>
      {fxs.map((src, index) => (
        <audio
          key={src}
          ref={(el) => {
            if (el) audioRefs.current[index] = el;
          }}
          src={src}
          preload="auto"
        />
      ))}
      <motion.svg
        viewBox="0 0 4400 4400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: transformedRotate, touchAction: "none" }}
        initial={{ transform: "translateY(-70%) scale(2) rotateZ(-60deg)" }}
        animate={{
          transform: "translateY(-70%) scale(2) rotateZ(0deg)",
          transition: {
            type: "spring",
            stiffness: 50,
            bounce: 0.4,
            duration: 2,
          },
        }}
        onPan={handlePan}
      >
        {/* Ordered from top to bottom  */}
        {generateLines(256, 8, 1400)}
        {generateCircle(1450, 3, "#3f3f46")}
        {generateLines(256, 64, 1675, "#27272a")}
        {generateLines(512, 32, 1575, "#3f3f46")}
        {generateLines(32, 300, 1500)}
      </motion.svg>
    </>
  );
}
