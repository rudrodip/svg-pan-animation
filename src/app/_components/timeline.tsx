"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  PanInfo,
} from "framer-motion";
import ReactHowler from "react-howler";

const fxs = [
  "/fx/1-amp.wav",
  "/fx/2-amp.wav",
  "/fx/3-amp.wav",
  "/fx/4-amp.wav",
  "/fx/5-amp.wav",
];

const ROTATION_THRESHOLD = 5;

export default function TimelineSVG() {
  const [currentSound, setCurrentSound] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [rotateZ, setRotateZ] = useState(0);
  const rotateMotionValue = useMotionValue(0);
  const lastRotation = useRef(0);

  const transformedRotate = useTransform(rotateMotionValue, (latest) => {
    return `translateY(-90%) scale(2) rotateZ(${latest}deg)`;
  });

  const handlePan = useCallback(
    (_: PointerEvent, info: PanInfo) => {
      const newRotation = rotateZ - info.delta.x / 15;
      setRotateZ(newRotation);
      animate(rotateMotionValue, newRotation, { duration: 0, bounce: 0 });
    },
    [rotateMotionValue, rotateZ]
  );

  const selectNextSound = useCallback(() => {
    setCurrentSound((prevSound) => (prevSound + 1) % fxs.length);
    setPlaying(true);
  }, []);

  useEffect(() => {
    const normalizedRotation = Math.abs(
      Math.floor(rotateZ / ROTATION_THRESHOLD)
    );

    if (normalizedRotation !== lastRotation.current) {
      selectNextSound();
      lastRotation.current = normalizedRotation;
    }
  }, [rotateZ, selectNextSound]);

  return (
    <div className="w-full h-full">
      <ReactHowler
        src={fxs[currentSound]}
        playing={playing}
        onEnd={() => setPlaying(false)}
      />
      <motion.svg
        viewBox="0 0 4400 4400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: transformedRotate }}
        initial={{ transform: "translateY(-90%) scale(2) rotateZ(-60deg)" }}
        animate={{
          transform: "translateY(-90%) scale(2) rotateZ(0deg)",
          transition: { type: "spring", bounce: 0.4, duration: 2 },
        }}
        onPan={handlePan}
      >
        <path
          d="M3688.67 2200H3982"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3666.05 2458.5L3954.93 2509.44"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3598.89 2709.15L3874.53 2809.48"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3489.22 2944.33L3743.26 3091"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3340.38 3156.9L3565.09 3345.45"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3156.9 3340.38L3345.45 3565.09"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2944.33 3489.22L3091 3743.26"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2709.15 3598.89L2809.48 3874.53"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2458.5 3666.05L2509.44 3954.93"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2200 3688.67V3982"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1941.5 3666.05L1890.56 3954.93"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1690.85 3598.89L1590.52 3874.53"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1455.67 3489.22L1309 3743.26"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1243.1 3340.38L1054.55 3565.09"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1059.62 3156.9L834.909 3345.45"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M910.777 2944.33L656.743 3091"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M801.111 2709.15L525.468 2809.48"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M733.949 2458.5L445.072 2509.44"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M711.333 2200H418"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M733.949 1941.5L445.072 1890.56"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M801.111 1690.85L525.468 1590.52"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M910.777 1455.67L656.743 1309"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1059.62 1243.1L834.909 1054.55"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1243.1 1059.61L1054.55 834.909"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1455.67 910.777L1309 656.743"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1690.85 801.111L1590.52 525.468"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1941.5 733.95L1890.56 445.073"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2200 711.333V418"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2458.5 733.95L2509.44 445.073"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2709.15 801.111L2809.48 525.468"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2944.33 910.777L3091 656.743"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3156.9 1059.61L3345.45 834.909"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3340.38 1243.1L3565.09 1054.55"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3489.22 1455.67L3743.26 1309"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3598.89 1690.85L3874.53 1590.52"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3666.05 1941.5L3954.93 1890.56"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3608 2200H3615.33"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3607.79 2224.57L3615.12 2224.7"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3607.14 2249.14L3614.47 2249.39"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3606.07 2273.69L3613.39 2274.07"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3604.57 2298.22L3611.89 2298.73"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3602.64 2322.72L3609.95 2323.35"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3600.29 2347.18L3607.58 2347.94"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3597.5 2371.59L3604.78 2372.49"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3594.3 2395.96L3601.56 2396.98"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3590.67 2420.26L3597.91 2421.41"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3586.61 2444.5L3593.83 2445.77"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3582.13 2468.66L3589.33 2470.06"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3577.23 2492.74L3584.41 2494.26"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3571.91 2516.73L3579.06 2518.38"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3566.18 2540.63L3573.29 2542.4"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3560.02 2564.42L3567.11 2566.31"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3553.46 2588.1L3560.51 2590.12"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3546.48 2611.66L3553.49 2613.8"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3539.09 2635.1L3546.06 2637.36"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3531.29 2658.4L3538.22 2660.79"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3523.09 2681.56L3529.98 2684.07"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3514.48 2704.58L3521.33 2707.21"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3505.47 2727.45L3512.27 2730.19"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3496.07 2750.15L3502.82 2753.01"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3486.27 2772.69L3492.97 2775.67"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3476.08 2795.05L3482.73 2798.15"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3465.5 2817.23L3472.09 2820.44"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3454.54 2839.22L3461.07 2842.55"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3443.19 2861.02L3449.66 2864.46"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3431.46 2882.61L3437.88 2886.17"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3419.36 2904L3425.71 2907.67"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3406.89 2925.17L3413.18 2928.95"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3394.05 2946.13L3400.27 2950.01"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3380.85 2966.85L3387 2970.85"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3367.29 2987.34L3373.36 2991.44"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3353.37 3007.6L3359.37 3011.8"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3339.1 3027.6L3345.03 3031.91"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3324.48 3047.36L3330.34 3051.77"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3309.52 3066.85L3315.3 3071.37"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3294.22 3086.08L3299.92 3090.7"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3278.59 3105.04L3284.21 3109.76"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3262.63 3123.73L3268.17 3128.54"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3246.35 3142.14L3251.8 3147.04"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3229.75 3160.25L3235.11 3165.26"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3212.83 3178.08L3218.11 3183.17"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3195.61 3195.61L3200.79 3200.79"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3178.08 3212.83L3183.17 3218.11"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3160.25 3229.75L3165.26 3235.11"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3142.14 3246.35L3147.04 3251.8"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3123.73 3262.63L3128.54 3268.17"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3105.04 3278.59L3109.76 3284.21"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3086.08 3294.22L3090.7 3299.92"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3066.85 3309.52L3071.37 3315.3"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3047.36 3324.48L3051.77 3330.34"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3027.6 3339.1L3031.91 3345.03"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3007.6 3353.37L3011.8 3359.37"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2987.34 3367.29L2991.44 3373.36"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2966.85 3380.85L2970.85 3387"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2946.13 3394.05L2950.01 3400.27"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2925.17 3406.89L2928.95 3413.18"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2904 3419.36L2907.67 3425.71"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2882.61 3431.46L2886.17 3437.88"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2861.02 3443.19L2864.46 3449.67"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2839.22 3454.54L2842.55 3461.07"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2817.23 3465.5L2820.44 3472.09"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2795.05 3476.08L2798.15 3482.73"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2772.69 3486.27L2775.67 3492.97"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2750.15 3496.07L2753.01 3502.82"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2727.45 3505.47L2730.19 3512.27"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2704.58 3514.48L2707.21 3521.33"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2681.56 3523.09L2684.07 3529.98"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2658.4 3531.29L2660.79 3538.22"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2635.1 3539.09L2637.36 3546.06"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2611.66 3546.48L2613.8 3553.49"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2588.1 3553.46L2590.12 3560.51"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2564.42 3560.02L2566.32 3567.11"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2540.62 3566.18L2542.4 3573.29"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2516.73 3571.91L2518.38 3579.06"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2492.74 3577.23L2494.26 3584.4"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2468.66 3582.13L2470.06 3589.33"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2444.5 3586.61L2445.77 3593.83"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2420.26 3590.67L2421.41 3597.91"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2395.96 3594.3L2396.98 3601.56"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2371.59 3597.5L2372.49 3604.78"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2347.18 3600.29L2347.94 3607.58"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2322.71 3602.64L2323.35 3609.95"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2298.22 3604.57L2298.73 3611.89"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2273.69 3606.07L2274.07 3613.39"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2249.14 3607.14L2249.39 3614.47"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2224.57 3607.79L2224.7 3615.12"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2200 3608V3615.33"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2200 3615.33L2196.67 3605.33H2203.33L2200 3615.33Z"
          fill="rgb(var(--foreground))"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
        />
        <path
          d="M2175.43 3607.79L2175.3 3615.12"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2150.86 3607.14L2150.61 3614.47"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2126.31 3606.07L2125.93 3613.39"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2101.78 3604.57L2101.27 3611.89"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2077.28 3602.64L2076.64 3609.95"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2052.82 3600.29L2052.06 3607.58"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2028.41 3597.5L2027.51 3604.78"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2004.04 3594.3L2003.02 3601.56"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1979.74 3590.67L1978.59 3597.91"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1955.5 3586.61L1954.23 3593.83"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1931.34 3582.13L1929.94 3589.33"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1907.26 3577.23L1905.74 3584.4"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1883.27 3571.91L1881.62 3579.06"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1859.37 3566.18L1857.6 3573.29"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1835.58 3560.02L1833.69 3567.11"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1811.9 3553.46L1809.88 3560.51"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1788.34 3546.48L1786.2 3553.49"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1764.9 3539.09L1762.64 3546.06"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1741.6 3531.29L1739.21 3538.22"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1718.44 3523.09L1715.93 3529.98"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1695.42 3514.48L1692.79 3521.33"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1672.55 3505.47L1669.81 3512.27"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1649.85 3496.07L1646.98 3502.82"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1627.31 3486.27L1624.33 3492.97"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1604.95 3476.08L1601.85 3482.73"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1582.77 3465.5L1579.56 3472.09"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1560.78 3454.54L1557.45 3461.07"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1538.98 3443.19L1535.54 3449.67"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1517.39 3431.46L1513.83 3437.88"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1496 3419.36L1492.33 3425.71"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1474.83 3406.89L1471.05 3413.18"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1453.87 3394.05L1449.99 3400.27"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1433.15 3380.85L1429.15 3387"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1412.66 3367.29L1408.55 3373.36"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1392.4 3353.37L1388.2 3359.37"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1372.4 3339.1L1368.09 3345.03"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1352.64 3324.48L1348.23 3330.34"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1333.15 3309.52L1328.63 3315.3"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1313.92 3294.22L1309.3 3299.92"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1294.96 3278.59L1290.24 3284.21"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1276.27 3262.63L1271.46 3268.17"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1257.86 3246.35L1252.96 3251.8"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1239.75 3229.75L1234.74 3235.11"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1221.92 3212.83L1216.83 3218.11"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1204.39 3195.61L1199.21 3200.79"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1187.17 3178.08L1181.89 3183.17"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1170.25 3160.25L1164.89 3165.26"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1153.65 3142.14L1148.2 3147.04"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1137.37 3123.73L1131.83 3128.54"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1121.41 3105.04L1115.79 3109.76"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1105.78 3086.08L1100.08 3090.7"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1090.48 3066.85L1084.7 3071.37"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1075.52 3047.36L1069.66 3051.77"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1060.9 3027.6L1054.97 3031.91"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1046.63 3007.6L1040.63 3011.8"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1032.71 2987.34L1026.63 2991.44"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1019.15 2966.85L1013 2970.85"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1005.95 2946.13L999.729 2950.01"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M993.108 2925.17L986.822 2928.95"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M980.636 2904L974.285 2907.67"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M968.535 2882.61L962.121 2886.17"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M956.81 2861.02L950.335 2864.46"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M945.463 2839.22L938.929 2842.55"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M934.498 2817.23L927.907 2820.44"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M923.919 2795.05L917.272 2798.15"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M913.728 2772.69L907.028 2775.67"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M903.929 2750.15L897.179 2753.01"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M894.525 2727.45L887.726 2730.19"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M885.519 2704.58L878.673 2707.21"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M876.913 2681.56L870.021 2684.07"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M868.71 2658.4L861.776 2660.79"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M860.912 2635.1L853.938 2637.36"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M853.523 2611.66L846.51 2613.8"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M846.543 2588.1L839.494 2590.12"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M839.976 2564.42L832.893 2566.31"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M833.823 2540.63L826.708 2542.4"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M828.087 2516.73L820.941 2518.38"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M822.768 2492.74L815.595 2494.26"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M817.868 2468.66L810.67 2470.06"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M813.391 2444.5L806.169 2445.77"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M809.335 2420.26L802.092 2421.41"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M805.702 2395.96L798.44 2396.98"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M802.495 2371.59L795.217 2372.49"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M799.713 2347.18L792.42 2347.94"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M797.358 2322.72L790.053 2323.35"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M795.43 2298.22L788.114 2298.73"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M793.93 2273.69L786.606 2274.07"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M792.858 2249.14L785.529 2249.39"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M792.214 2224.57L784.882 2224.7"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M792 2200H784.667"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M792.214 2175.43L784.882 2175.3"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M792.858 2150.86L785.529 2150.61"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M793.93 2126.31L786.606 2125.93"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M795.43 2101.78L788.114 2101.27"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M797.358 2077.28L790.053 2076.65"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M799.713 2052.82L792.42 2052.06"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M802.495 2028.41L795.217 2027.51"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M805.702 2004.04L798.44 2003.02"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M809.335 1979.74L802.092 1978.59"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M813.391 1955.5L806.169 1954.23"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M817.868 1931.34L810.67 1929.94"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M822.768 1907.26L815.595 1905.74"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M828.087 1883.27L820.941 1881.62"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M833.823 1859.37L826.708 1857.6"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M839.976 1835.58L832.893 1833.68"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M846.543 1811.9L839.494 1809.88"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M853.523 1788.34L846.51 1786.2"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M860.912 1764.9L853.938 1762.64"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M868.71 1741.6L861.776 1739.21"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M876.913 1718.44L870.021 1715.93"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M885.519 1695.42L878.673 1692.79"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M894.525 1672.55L887.726 1669.81"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M903.929 1649.85L897.179 1646.99"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M913.728 1627.31L907.028 1624.33"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M923.919 1604.95L917.272 1601.85"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M934.498 1582.77L927.907 1579.56"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M945.463 1560.78L938.929 1557.45"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M956.81 1538.98L950.335 1535.54"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M968.535 1517.39L962.121 1513.83"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M980.636 1496L974.285 1492.33"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M993.108 1474.83L986.822 1471.05"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1005.95 1453.87L999.729 1449.99"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1019.15 1433.15L1013 1429.15"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1032.71 1412.66L1026.63 1408.56"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1046.63 1392.4L1040.63 1388.2"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1060.9 1372.4L1054.97 1368.09"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1075.52 1352.64L1069.66 1348.23"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1090.48 1333.15L1084.7 1328.63"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1105.78 1313.92L1100.08 1309.3"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1121.41 1294.96L1115.79 1290.24"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1137.37 1276.27L1131.83 1271.46"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1153.65 1257.86L1148.2 1252.96"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1170.25 1239.75L1164.89 1234.75"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1187.17 1221.92L1181.89 1216.83"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1204.39 1204.39L1199.21 1199.21"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1221.92 1187.17L1216.83 1181.89"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1239.75 1170.25L1234.74 1164.89"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1257.86 1153.65L1252.96 1148.2"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1276.27 1137.37L1271.46 1131.83"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1294.96 1121.41L1290.24 1115.79"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1313.92 1105.78L1309.3 1100.08"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1333.15 1090.48L1328.63 1084.7"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1352.64 1075.52L1348.23 1069.66"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1372.4 1060.9L1368.09 1054.97"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1392.4 1046.63L1388.2 1040.63"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1412.66 1032.72L1408.55 1026.64"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1433.15 1019.15L1429.15 1013"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1453.87 1005.95L1449.99 999.729"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1474.83 993.109L1471.05 986.823"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1496 980.636L1492.33 974.285"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1517.39 968.535L1513.83 962.122"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1538.98 956.81L1535.54 950.335"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1560.78 945.463L1557.45 938.929"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1582.77 934.498L1579.56 927.907"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1604.95 923.919L1601.85 917.272"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1627.31 913.728L1624.33 907.029"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1649.85 903.929L1646.98 897.179"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1672.55 894.525L1669.81 887.726"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1695.42 885.519L1692.79 878.672"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1718.44 876.913L1715.93 870.021"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1741.6 868.71L1739.21 861.776"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1764.9 860.912L1762.64 853.938"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1788.34 853.523L1786.2 846.51"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1811.9 846.543L1809.88 839.494"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1835.58 839.977L1833.69 832.893"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1859.37 833.823L1857.6 826.708"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1883.27 828.087L1881.62 820.941"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1907.26 822.768L1905.74 815.595"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1931.34 817.869L1929.94 810.67"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1955.5 813.391L1954.23 806.169"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1979.74 809.335L1978.59 802.092"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2004.04 805.702L2003.02 798.44"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2028.41 802.495L2027.51 795.216"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2052.82 799.713L2052.06 792.42"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2077.28 797.358L2076.64 790.052"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2101.78 795.43L2101.27 788.114"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2126.31 793.93L2125.93 786.606"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2150.86 792.858L2150.61 785.529"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2175.43 792.215L2175.3 784.882"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2200 792V784.667"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2224.57 792.215L2224.7 784.882"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2249.14 792.858L2249.39 785.529"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2273.69 793.93L2274.07 786.606"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2298.22 795.43L2298.73 788.114"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2322.71 797.358L2323.35 790.052"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2347.18 799.713L2347.94 792.42"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2371.59 802.495L2372.49 795.216"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2395.96 805.702L2396.98 798.44"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2420.26 809.335L2421.41 802.092"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2444.5 813.391L2445.77 806.169"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2468.66 817.869L2470.06 810.67"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2492.74 822.768L2494.26 815.595"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2516.73 828.087L2518.38 820.941"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2540.62 833.823L2542.4 826.708"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2564.42 839.977L2566.32 832.893"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2588.1 846.543L2590.12 839.494"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2611.66 853.523L2613.8 846.51"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2635.1 860.912L2637.36 853.938"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2658.4 868.71L2660.79 861.776"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2681.56 876.913L2684.07 870.021"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2704.58 885.519L2707.21 878.672"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2727.45 894.525L2730.19 887.726"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2750.15 903.929L2753.01 897.179"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2772.69 913.728L2775.67 907.029"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2795.05 923.919L2798.15 917.272"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2817.23 934.498L2820.44 927.907"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2839.22 945.463L2842.55 938.929"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2861.02 956.81L2864.46 950.335"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2882.61 968.535L2886.17 962.122"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2904 980.636L2907.67 974.285"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2925.17 993.109L2928.95 986.823"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2946.13 1005.95L2950.01 999.729"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2966.85 1019.15L2970.85 1013"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2987.34 1032.72L2991.44 1026.64"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3007.6 1046.63L3011.8 1040.63"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3027.6 1060.9L3031.91 1054.97"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3047.36 1075.52L3051.77 1069.66"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3066.85 1090.48L3071.37 1084.7"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3086.08 1105.78L3090.7 1100.08"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3105.04 1121.41L3109.76 1115.79"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3123.73 1137.37L3128.54 1131.83"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3142.14 1153.65L3147.04 1148.2"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3160.25 1170.25L3165.26 1164.89"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3178.08 1187.17L3183.17 1181.89"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3195.61 1204.39L3200.79 1199.21"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3212.83 1221.92L3218.11 1216.83"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3229.75 1239.75L3235.11 1234.75"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3246.35 1257.86L3251.8 1252.96"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3262.63 1276.27L3268.17 1271.46"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3278.59 1294.96L3284.21 1290.24"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3294.22 1313.92L3299.92 1309.3"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3309.52 1333.15L3315.3 1328.63"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3324.48 1352.64L3330.34 1348.23"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3339.1 1372.4L3345.03 1368.09"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3353.37 1392.4L3359.37 1388.2"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3367.29 1412.66L3373.36 1408.56"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3380.85 1433.15L3387 1429.15"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3394.05 1453.87L3400.27 1449.99"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3406.89 1474.83L3413.18 1471.05"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3419.36 1496L3425.71 1492.33"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3431.46 1517.39L3437.88 1513.83"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3443.19 1538.98L3449.66 1535.54"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3454.54 1560.78L3461.07 1557.45"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3465.5 1582.77L3472.09 1579.56"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3476.08 1604.95L3482.73 1601.85"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3486.27 1627.31L3492.97 1624.33"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3496.07 1649.85L3502.82 1646.99"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3505.47 1672.55L3512.27 1669.81"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3514.48 1695.42L3521.33 1692.79"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3523.09 1718.44L3529.98 1715.93"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3531.29 1741.6L3538.22 1739.21"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3539.09 1764.9L3546.06 1762.64"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3546.48 1788.34L3553.49 1786.2"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3553.46 1811.9L3560.51 1809.88"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3560.02 1835.58L3567.11 1833.68"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3566.18 1859.37L3573.29 1857.6"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3571.91 1883.27L3579.06 1881.62"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3577.23 1907.26L3584.41 1905.74"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3582.13 1931.34L3589.33 1929.94"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3586.61 1955.5L3593.83 1954.23"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3590.67 1979.74L3597.91 1978.59"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3594.3 2004.04L3601.56 2003.02"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3597.5 2028.41L3604.78 2027.51"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3600.29 2052.82L3607.58 2052.06"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3602.64 2077.28L3609.95 2076.65"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3604.57 2101.78L3611.89 2101.27"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3606.07 2126.31L3613.39 2125.93"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3607.14 2150.86L3614.47 2150.61"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3607.79 2175.43L3615.12 2175.3"
          stroke="rgb(var(--foreground))"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3652 2200C3652 2585.09 3499.02 2954.42 3226.72 3226.72C2954.42 3499.02 2585.09 3652 2200 3652C1814.91 3652 1445.58 3499.02 1173.28 3226.72C900.978 2954.42 748 2585.09 748 2200C748 1814.91 900.978 1445.58 1173.28 1173.28C1445.58 900.978 1814.91 748 2200 748C2585.09 748 2954.42 900.978 3226.72 1173.28C3499.02 1445.58 3652 1814.91 3652 2200Z"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.2"
          strokeWidth="3.66667"
        />
        <path
          d="M3769.33 2200H3798.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3769.24 2217.12L3798.57 2217.44"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3768.96 2234.23L3798.29 2234.87"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3768.49 2251.35L3797.81 2252.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3767.84 2268.45L3797.15 2269.73"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3767 2285.55L3796.29 2287.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3765.97 2302.64L3795.24 2304.56"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3764.76 2319.71L3794.01 2321.95"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3763.36 2336.78L3792.58 2339.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3761.78 2353.82L3790.97 2356.7"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3760.01 2370.85L3789.16 2374.04"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3758.05 2387.85L3787.17 2391.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3755.91 2404.84L3784.99 2408.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3753.58 2421.8L3782.62 2425.94"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3751.07 2438.73L3780.06 2443.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3748.37 2455.64L3777.31 2460.42"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3745.49 2472.51L3774.38 2477.61"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3742.43 2489.35L3771.26 2494.76"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3739.18 2506.16L3767.95 2511.88"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3735.75 2522.93L3764.45 2528.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3732.13 2539.67L3760.77 2546.01"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3728.34 2556.36L3756.91 2563.02"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3724.36 2573.01L3752.85 2579.98"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3720.2 2589.61L3748.61 2596.9"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3715.86 2606.17L3744.19 2613.77"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3711.34 2622.68L3739.59 2630.59"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3706.64 2639.15L3734.8 2647.35"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3701.76 2655.55L3729.83 2664.07"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3696.7 2671.91L3724.68 2680.73"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3691.46 2688.21L3719.34 2697.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3686.05 2704.45L3713.83 2713.87"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3680.46 2720.63L3708.13 2730.36"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3674.69 2736.74L3702.26 2746.78"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3668.75 2752.8L3696.2 2763.13"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3662.63 2768.79L3689.97 2779.42"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3656.34 2784.71L3683.56 2795.64"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3649.88 2800.56L3676.98 2811.78"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3643.24 2816.34L3670.21 2827.86"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3636.43 2832.04L3663.28 2843.86"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3629.45 2847.67L3656.17 2859.78"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3622.3 2863.23L3648.88 2875.63"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3614.98 2878.7L3641.43 2891.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3607.49 2894.1L3633.8 2907.07"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3599.84 2909.41L3626 2922.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3592.02 2924.64L3618.03 2938.18"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3584.03 2939.78L3609.9 2953.61"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3575.88 2954.83L3601.59 2968.94"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3567.56 2969.79L3593.12 2984.18"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3559.08 2984.67L3584.49 2999.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3550.44 2999.45L3575.68 3014.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3541.64 3014.13L3566.72 3029.35"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3532.68 3028.71L3557.59 3044.2"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3523.56 3043.2L3548.3 3058.96"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3514.29 3057.59L3538.85 3073.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3504.85 3071.88L3529.24 3088.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3495.27 3086.06L3519.48 3102.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3485.52 3100.13L3509.55 3116.96"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3475.63 3114.1L3499.47 3131.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3465.58 3127.96L3489.24 3145.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3455.38 3141.71L3478.85 3159.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3445.04 3155.35L3468.31 3173.21"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3434.54 3168.87L3457.62 3186.98"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3423.9 3182.28L3446.78 3200.64"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3413.11 3195.57L3435.79 3214.18"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3402.18 3208.75L3424.65 3227.6"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3391.1 3221.8L3413.37 3240.9"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3379.89 3234.73L3401.94 3254.07"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3368.53 3247.54L3390.37 3267.12"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3357.03 3260.23L3378.66 3280.04"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3345.4 3272.78L3366.81 3292.84"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3333.63 3285.21L3354.82 3305.5"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3321.72 3297.52L3342.69 3318.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3309.69 3309.69L3330.43 3330.43"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3297.52 3321.72L3318.03 3342.69"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3285.21 3333.63L3305.5 3354.82"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3272.79 3345.4L3292.84 3366.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3260.23 3357.03L3280.04 3378.66"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3247.54 3368.53L3267.12 3390.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3234.73 3379.89L3254.08 3401.94"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3221.8 3391.1L3240.9 3413.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3208.75 3402.18L3227.6 3424.65"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3195.57 3413.11L3214.18 3435.79"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3182.28 3423.9L3200.64 3446.78"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3168.87 3434.54L3186.98 3457.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3155.35 3445.04L3173.21 3468.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3141.71 3455.38L3159.31 3478.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3127.96 3465.58L3145.31 3489.24"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3114.1 3475.63L3131.19 3499.47"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3100.13 3485.52L3116.96 3509.55"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3086.06 3495.26L3102.62 3519.48"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3071.88 3504.85L3088.17 3529.24"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3057.59 3514.29L3073.62 3538.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3043.2 3523.56L3058.96 3548.3"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3028.71 3532.68L3044.2 3557.59"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3014.13 3541.64L3029.35 3566.72"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2999.45 3550.44L3014.39 3575.68"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2984.67 3559.08L2999.33 3584.49"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2969.79 3567.56L2984.18 3593.12"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2954.83 3575.88L2968.94 3601.59"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2939.78 3584.03L2953.61 3609.9"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2924.64 3592.02L2938.18 3618.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2909.41 3599.84L2922.67 3626"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2894.1 3607.49L2907.07 3633.8"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2878.7 3614.98L2891.39 3641.43"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2863.23 3622.3L2875.63 3648.88"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2847.68 3629.45L2859.78 3656.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2832.04 3636.43L2843.86 3663.28"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2816.34 3643.24L2827.86 3670.21"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2800.56 3649.88L2811.78 3676.98"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2784.71 3656.34L2795.64 3683.56"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2768.79 3662.63L2779.42 3689.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2752.8 3668.75L2763.13 3696.2"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2736.74 3674.69L2746.78 3702.26"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2720.62 3680.46L2730.36 3708.13"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2704.45 3686.05L2713.87 3713.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2688.21 3691.46L2697.33 3719.34"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2671.91 3696.7L2680.73 3724.68"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2655.55 3701.76L2664.07 3729.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2639.14 3706.64L2647.35 3734.8"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2622.68 3711.34L2630.58 3739.59"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2606.17 3715.86L2613.77 3744.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2589.61 3720.2L2596.9 3748.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2573.01 3724.36L2579.98 3752.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2556.36 3728.34L2563.02 3756.91"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2539.67 3732.13L2546.01 3760.77"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2522.93 3735.75L2528.97 3764.45"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2506.16 3739.18L2511.88 3767.95"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2489.35 3742.43L2494.76 3771.26"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2472.51 3745.49L2477.61 3774.38"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2455.64 3748.37L2460.42 3777.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2438.73 3751.07L2443.19 3780.06"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2421.8 3753.58L2425.94 3782.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2404.84 3755.91L2408.67 3784.99"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2387.86 3758.05L2391.37 3787.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2370.85 3760.01L2374.04 3789.16"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2353.82 3761.78L2356.7 3790.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2336.78 3763.36L2339.33 3792.58"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2319.71 3764.76L2321.95 3794.01"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2302.64 3765.97L2304.56 3795.24"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2285.55 3767L2287.15 3796.29"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2268.45 3767.84L2269.73 3797.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2251.35 3768.49L2252.31 3797.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2234.23 3768.96L2234.87 3798.29"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2217.12 3769.24L2217.44 3798.57"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2200 3769.33V3798.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2182.88 3769.24L2182.56 3798.57"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2165.76 3768.96L2165.12 3798.29"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2148.65 3768.49L2147.69 3797.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2131.55 3767.84L2130.27 3797.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2114.45 3767L2112.85 3796.29"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2097.36 3765.97L2095.44 3795.24"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2080.28 3764.76L2078.05 3794.01"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2063.22 3763.36L2060.67 3792.58"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2046.18 3761.78L2043.3 3790.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2029.15 3760.01L2025.96 3789.16"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2012.14 3758.05L2008.63 3787.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1995.16 3755.91L1991.33 3784.99"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1978.2 3753.58L1974.05 3782.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1961.27 3751.07L1956.8 3780.06"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1944.36 3748.37L1939.58 3777.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1927.49 3745.49L1922.39 3774.38"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1910.65 3742.43L1905.24 3771.26"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1893.84 3739.18L1888.12 3767.95"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1877.07 3735.75L1871.03 3764.45"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1860.33 3732.13L1853.98 3760.77"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1843.64 3728.34L1836.98 3756.91"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1826.99 3724.36L1820.02 3752.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1810.39 3720.2L1803.1 3748.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1793.83 3715.86L1786.23 3744.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1777.31 3711.34L1769.41 3739.59"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1760.85 3706.64L1752.65 3734.8"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1744.45 3701.76L1735.93 3729.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1728.09 3696.7L1719.27 3724.68"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1711.79 3691.46L1702.67 3719.34"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1695.55 3686.05L1686.12 3713.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1679.37 3680.46L1669.64 3708.13"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1663.26 3674.69L1653.22 3702.26"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1647.2 3668.75L1636.87 3696.2"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1631.21 3662.63L1620.58 3689.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1615.29 3656.34L1604.36 3683.56"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1599.44 3649.88L1588.22 3676.98"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1583.66 3643.24L1572.14 3670.21"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1567.96 3636.43L1556.14 3663.28"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1552.32 3629.45L1540.22 3656.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1536.77 3622.3L1524.38 3648.88"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1521.3 3614.98L1508.61 3641.43"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1505.9 3607.49L1492.93 3633.8"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1490.59 3599.84L1477.33 3626"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1475.36 3592.02L1461.82 3618.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1460.22 3584.03L1446.39 3609.9"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1445.17 3575.88L1431.06 3601.59"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1430.21 3567.56L1415.82 3593.12"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1415.33 3559.08L1400.67 3584.49"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1400.55 3550.44L1385.61 3575.68"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1385.87 3541.64L1370.65 3566.72"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1371.28 3532.68L1355.79 3557.59"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1356.8 3523.56L1341.04 3548.3"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1342.41 3514.29L1326.38 3538.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1328.12 3504.85L1311.83 3529.24"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1313.94 3495.26L1297.38 3519.48"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1299.87 3485.52L1283.04 3509.55"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1285.9 3475.63L1268.81 3499.47"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1272.04 3465.58L1254.69 3489.24"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1258.29 3455.38L1240.69 3478.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1244.65 3445.04L1226.79 3468.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1231.13 3434.54L1213.02 3457.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1217.72 3423.9L1199.36 3446.78"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1204.43 3413.11L1185.82 3435.79"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1191.25 3402.18L1172.4 3424.65"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1178.2 3391.1L1159.1 3413.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1165.27 3379.89L1145.93 3401.94"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1152.46 3368.53L1132.88 3390.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1139.77 3357.03L1119.96 3378.66"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1127.22 3345.4L1107.16 3366.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1114.79 3333.63L1094.5 3354.82"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1102.49 3321.72L1081.97 3342.69"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1090.31 3309.69L1069.57 3330.43"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1078.28 3297.52L1057.31 3318.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1066.37 3285.21L1045.18 3305.5"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1054.6 3272.78L1033.19 3292.84"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1042.97 3260.23L1021.34 3280.04"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1031.47 3247.54L1009.63 3267.12"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1020.11 3234.73L998.059 3254.07"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1008.9 3221.8L986.633 3240.9"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M997.82 3208.75L975.35 3227.6"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M986.89 3195.57L964.215 3214.18"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M976.101 3182.28L953.225 3200.64"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M965.459 3168.87L942.384 3186.98"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M954.964 3155.35L931.692 3173.21"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M944.617 3141.71L921.152 3159.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M934.419 3127.96L910.764 3145.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M924.373 3114.1L900.529 3131.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M914.478 3100.13L890.449 3116.96"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M904.735 3086.06L880.524 3102.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M895.147 3071.88L870.757 3088.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M885.715 3057.59L861.148 3073.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M876.438 3043.2L851.698 3058.96"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M867.319 3028.71L842.409 3044.2"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M858.359 3014.13L833.281 3029.35"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M849.557 2999.45L824.315 3014.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M840.917 2984.67L815.514 2999.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M832.439 2969.79L806.877 2984.18"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M824.124 2954.83L798.406 2968.94"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M815.971 2939.78L790.102 2953.61"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M807.984 2924.64L781.965 2938.18"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M800.163 2909.41L773.998 2922.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M792.507 2894.1L766.199 2907.07"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M785.02 2878.7L758.572 2891.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M777.701 2863.23L751.116 2875.63"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M770.551 2847.67L743.832 2859.78"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M763.571 2832.04L736.722 2843.86"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M756.763 2816.34L729.786 2827.86"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M750.125 2800.56L723.024 2811.78"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M743.661 2784.71L716.439 2795.64"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M737.369 2768.79L710.03 2779.42"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M731.252 2752.8L703.799 2763.13"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M725.309 2736.74L697.745 2746.78"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M719.542 2720.63L691.87 2730.36"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M713.951 2704.45L686.175 2713.87"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M708.537 2688.21L680.659 2697.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M703.3 2671.91L675.324 2680.73"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M698.242 2655.55L670.172 2664.07"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M693.362 2639.15L665.2 2647.35"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M688.661 2622.68L660.412 2630.59"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M684.14 2606.17L655.807 2613.77"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M679.8 2589.61L651.385 2596.9"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M675.64 2573.01L647.147 2579.98"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M671.663 2556.36L643.096 2563.02"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M667.867 2539.67L639.229 2546.01"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M664.252 2522.93L635.547 2528.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M660.82 2506.16L632.051 2511.88"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M657.573 2489.35L628.742 2494.76"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M654.509 2472.51L625.621 2477.61"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M651.628 2455.64L622.687 2460.42"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M648.931 2438.73L619.939 2443.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M646.42 2421.8L617.381 2425.94"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M644.092 2404.84L615.01 2408.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M641.951 2387.85L612.828 2391.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M639.994 2370.85L610.835 2374.04"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M638.223 2353.82L609.031 2356.7"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M636.639 2336.78L607.417 2339.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M635.239 2319.71L605.991 2321.95"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M634.026 2302.64L604.756 2304.56"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M633.001 2285.55L603.711 2287.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M632.16 2268.45L602.854 2269.73"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M631.507 2251.35L602.189 2252.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M631.04 2234.23L601.714 2234.87"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M630.76 2217.12L601.429 2217.44"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M630.666 2200H601.333"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M630.76 2182.88L601.429 2182.56"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M631.04 2165.76L601.714 2165.12"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M631.507 2148.65L602.189 2147.69"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M632.16 2131.55L602.854 2130.27"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M633.001 2114.45L603.711 2112.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M634.026 2097.36L604.756 2095.44"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M635.239 2080.28L605.991 2078.05"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M636.639 2063.22L607.417 2060.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M638.223 2046.18L609.031 2043.3"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M639.994 2029.15L610.835 2025.96"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M641.951 2012.15L612.828 2008.63"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M644.092 1995.16L615.01 1991.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M646.42 1978.2L617.381 1974.06"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M648.931 1961.27L619.939 1956.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M651.628 1944.36L622.687 1939.58"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M654.509 1927.49L625.621 1922.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M657.573 1910.65L628.742 1905.24"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M660.82 1893.84L632.051 1888.12"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M664.252 1877.07L635.547 1871.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M667.867 1860.33L639.229 1853.99"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M671.663 1843.64L643.096 1836.98"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M675.64 1826.99L647.147 1820.02"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M679.8 1810.39L651.385 1803.1"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M684.14 1793.83L655.807 1786.23"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M688.661 1777.32L660.412 1769.42"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M693.362 1760.85L665.2 1752.65"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M698.242 1744.45L670.172 1735.93"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M703.3 1728.09L675.324 1719.27"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M708.537 1711.79L680.659 1702.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M713.951 1695.55L686.175 1686.13"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M719.542 1679.37L691.87 1669.64"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M725.309 1663.26L697.745 1653.22"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M731.252 1647.2L703.799 1636.87"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M737.369 1631.21L710.03 1620.58"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M743.661 1615.29L716.439 1604.36"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M750.125 1599.44L723.024 1588.22"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M756.763 1583.66L729.786 1572.14"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M763.571 1567.96L736.722 1556.14"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M770.551 1552.32L743.832 1540.22"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M777.701 1536.77L751.116 1524.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M785.02 1521.3L758.572 1508.61"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M792.507 1505.9L766.199 1492.93"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M800.163 1490.59L773.998 1477.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M807.984 1475.36L781.965 1461.82"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M815.971 1460.22L790.102 1446.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M824.124 1445.17L798.406 1431.06"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M832.439 1430.21L806.877 1415.82"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M840.917 1415.33L815.514 1400.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M849.557 1400.56L824.315 1385.61"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M858.359 1385.87L833.281 1370.65"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M867.319 1371.29L842.409 1355.8"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M876.438 1356.8L851.698 1341.04"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M885.715 1342.41L861.148 1326.38"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M895.147 1328.12L870.757 1311.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M904.735 1313.94L880.524 1297.38"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M914.478 1299.87L890.449 1283.04"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M924.373 1285.9L900.529 1268.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M934.419 1272.04L910.764 1254.69"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M944.617 1258.29L921.152 1240.69"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M954.964 1244.65L931.692 1226.79"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M965.459 1231.13L942.384 1213.02"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M976.101 1217.72L953.225 1199.36"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M986.89 1204.43L964.215 1185.82"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M997.82 1191.25L975.35 1172.4"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1008.9 1178.2L986.633 1159.1"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1020.11 1165.27L998.059 1145.93"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1031.47 1152.46L1009.63 1132.88"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1042.97 1139.77L1021.34 1119.96"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1054.6 1127.22L1033.19 1107.16"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1066.37 1114.79L1045.18 1094.5"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1078.28 1102.48L1057.31 1081.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1090.31 1090.31L1069.57 1069.57"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1102.49 1078.28L1081.97 1057.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1114.79 1066.37L1094.5 1045.18"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1127.22 1054.6L1107.16 1033.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1139.77 1042.97L1119.96 1021.34"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1152.46 1031.47L1132.88 1009.63"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1165.27 1020.11L1145.93 998.059"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1178.2 1008.9L1159.1 986.632"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1191.25 997.821L1172.4 975.35"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1204.43 986.889L1185.82 964.214"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1217.72 976.101L1199.36 953.225"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1231.13 965.459L1213.02 942.384"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1244.65 954.964L1226.79 931.692"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1258.29 944.617L1240.69 921.152"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1272.04 934.419L1254.69 910.764"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1285.9 924.373L1268.81 900.529"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1299.87 914.477L1283.04 890.449"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1313.94 904.735L1297.38 880.524"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1328.12 895.147L1311.83 870.757"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1342.41 885.714L1326.38 861.148"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1356.8 876.438L1341.04 851.698"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1371.28 867.319L1355.79 842.409"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1385.87 858.358L1370.65 833.281"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1400.55 849.557L1385.61 824.315"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1415.33 840.918L1400.67 815.514"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1430.21 832.439L1415.82 806.877"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1445.17 824.124L1431.06 798.406"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1460.22 815.972L1446.39 790.102"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1475.36 807.984L1461.82 781.965"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1490.59 800.163L1477.33 773.998"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1505.9 792.507L1492.93 766.199"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1521.3 785.02L1508.61 758.572"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1536.77 777.701L1524.38 751.116"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1552.32 770.551L1540.22 743.833"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1567.96 763.571L1556.14 736.722"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1583.66 756.762L1572.14 729.786"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1599.44 750.125L1588.22 723.024"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1615.29 743.66L1604.36 716.439"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1631.21 737.369L1620.58 710.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1647.2 731.252L1636.87 703.798"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1663.26 725.309L1653.22 697.745"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1679.37 719.542L1669.64 691.87"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1695.55 713.951L1686.12 686.174"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1711.79 708.537L1702.67 680.659"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1728.09 703.3L1719.27 675.325"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1744.45 698.242L1735.93 670.171"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1760.85 693.362L1752.65 665.2"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1777.31 688.661L1769.41 660.412"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1793.83 684.14L1786.23 655.807"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1810.39 679.8L1803.1 651.385"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1826.99 675.641L1820.02 647.148"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1843.64 671.662L1836.98 643.095"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1860.33 667.866L1853.98 639.228"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1877.07 664.252L1871.03 635.547"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1893.84 660.821L1888.12 632.051"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1910.65 657.573L1905.24 628.743"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1927.49 654.508L1922.39 625.621"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1944.36 651.628L1939.58 622.686"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1961.27 648.931L1956.8 619.939"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1978.2 646.42L1974.05 617.381"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1995.16 644.093L1991.33 615.01"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2012.14 641.951L2008.63 612.828"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2029.15 639.994L2025.96 610.835"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2046.18 638.223L2043.3 609.031"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2063.22 636.639L2060.67 607.417"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2080.28 635.24L2078.05 605.992"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2097.36 634.027L2095.44 604.756"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2114.45 633L2112.85 603.71"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2131.55 632.16L2130.27 602.855"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2148.65 631.507L2147.69 602.189"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2165.76 631.04L2165.12 601.714"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2182.88 630.76L2182.56 601.429"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2200 630.667V601.333"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2217.12 630.76L2217.44 601.429"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2234.23 631.04L2234.87 601.714"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2251.35 631.507L2252.31 602.189"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2268.45 632.16L2269.73 602.855"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2285.55 633L2287.15 603.71"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2302.64 634.027L2304.56 604.756"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2319.71 635.24L2321.95 605.992"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2336.78 636.639L2339.33 607.417"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2353.82 638.223L2356.7 609.031"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2370.85 639.994L2374.04 610.835"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2387.86 641.951L2391.37 612.828"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2404.84 644.093L2408.67 615.01"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2421.8 646.42L2425.94 617.381"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2438.73 648.931L2443.19 619.939"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2455.64 651.628L2460.42 622.686"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2472.51 654.508L2477.61 625.621"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2489.35 657.573L2494.76 628.743"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2506.16 660.821L2511.88 632.051"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2522.93 664.252L2528.97 635.547"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2539.67 667.866L2546.01 639.228"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2556.36 671.662L2563.02 643.095"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2573.01 675.641L2579.98 647.148"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2589.61 679.8L2596.9 651.385"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2606.17 684.14L2613.77 655.807"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2622.68 688.661L2630.58 660.412"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2639.14 693.362L2647.35 665.2"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2655.55 698.242L2664.07 670.171"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2671.91 703.3L2680.73 675.325"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2688.21 708.537L2697.33 680.659"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2704.45 713.951L2713.87 686.174"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2720.62 719.542L2730.36 691.87"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2736.74 725.309L2746.78 697.745"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2752.8 731.252L2763.13 703.798"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2768.79 737.369L2779.42 710.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2784.71 743.66L2795.64 716.439"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2800.56 750.125L2811.78 723.024"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2816.34 756.762L2827.86 729.786"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2832.04 763.571L2843.86 736.722"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2847.68 770.551L2859.78 743.833"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2863.23 777.701L2875.63 751.116"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2878.7 785.02L2891.39 758.572"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2894.1 792.507L2907.07 766.199"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2909.41 800.163L2922.67 773.998"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2924.64 807.984L2938.18 781.965"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2939.78 815.972L2953.61 790.102"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2954.83 824.124L2968.94 798.406"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2969.79 832.439L2984.18 806.877"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2984.67 840.918L2999.33 815.514"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2999.45 849.557L3014.39 824.315"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3014.13 858.358L3029.35 833.281"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3028.71 867.319L3044.2 842.409"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3043.2 876.438L3058.96 851.698"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3057.59 885.714L3073.62 861.148"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3071.88 895.147L3088.17 870.757"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3086.06 904.735L3102.62 880.524"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3100.13 914.477L3116.96 890.449"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3114.1 924.373L3131.19 900.529"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3127.96 934.419L3145.31 910.764"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3141.71 944.617L3159.31 921.152"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3155.35 954.964L3173.21 931.692"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3168.87 965.459L3186.98 942.384"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3182.28 976.101L3200.64 953.225"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3195.57 986.889L3214.18 964.214"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3208.75 997.821L3227.6 975.35"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3221.8 1008.9L3240.9 986.632"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3234.73 1020.11L3254.08 998.059"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3247.54 1031.47L3267.12 1009.63"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3260.23 1042.97L3280.04 1021.34"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3272.79 1054.6L3292.84 1033.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3285.21 1066.37L3305.5 1045.18"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3297.52 1078.28L3318.03 1057.31"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3309.69 1090.31L3330.43 1069.57"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3321.72 1102.48L3342.69 1081.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3333.63 1114.79L3354.82 1094.5"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3345.4 1127.22L3366.81 1107.16"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3357.03 1139.77L3378.66 1119.96"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3368.53 1152.46L3390.37 1132.88"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3379.89 1165.27L3401.94 1145.93"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3391.1 1178.2L3413.37 1159.1"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3402.18 1191.25L3424.65 1172.4"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3413.11 1204.43L3435.79 1185.82"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3423.9 1217.72L3446.78 1199.36"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3434.54 1231.13L3457.62 1213.02"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3445.04 1244.65L3468.31 1226.79"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3455.38 1258.29L3478.85 1240.69"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3465.58 1272.04L3489.24 1254.69"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3475.63 1285.9L3499.47 1268.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3485.52 1299.87L3509.55 1283.04"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3495.27 1313.94L3519.48 1297.38"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3504.85 1328.12L3529.24 1311.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3514.29 1342.41L3538.85 1326.38"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3523.56 1356.8L3548.3 1341.04"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3532.68 1371.29L3557.59 1355.8"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3541.64 1385.87L3566.72 1370.65"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3550.44 1400.56L3575.68 1385.61"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3559.08 1415.33L3584.49 1400.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3567.56 1430.21L3593.12 1415.82"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3575.88 1445.17L3601.59 1431.06"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3584.03 1460.22L3609.9 1446.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3592.02 1475.36L3618.03 1461.82"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3599.84 1490.59L3626 1477.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3607.49 1505.9L3633.8 1492.93"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3614.98 1521.3L3641.43 1508.61"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3622.3 1536.77L3648.88 1524.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3629.45 1552.32L3656.17 1540.22"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3636.43 1567.96L3663.28 1556.14"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3643.24 1583.66L3670.21 1572.14"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3649.88 1599.44L3676.98 1588.22"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3656.34 1615.29L3683.56 1604.36"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3662.63 1631.21L3689.97 1620.58"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3668.75 1647.2L3696.2 1636.87"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3674.69 1663.26L3702.26 1653.22"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3680.46 1679.37L3708.13 1669.64"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3686.05 1695.55L3713.83 1686.13"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3691.46 1711.79L3719.34 1702.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3696.7 1728.09L3724.68 1719.27"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3701.76 1744.45L3729.83 1735.93"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3706.64 1760.85L3734.8 1752.65"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3711.34 1777.32L3739.59 1769.42"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3715.86 1793.83L3744.19 1786.23"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3720.2 1810.39L3748.61 1803.1"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3724.36 1826.99L3752.85 1820.02"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3728.34 1843.64L3756.91 1836.98"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3732.13 1860.33L3760.77 1853.99"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3735.75 1877.07L3764.45 1871.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3739.18 1893.84L3767.95 1888.12"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3742.43 1910.65L3771.26 1905.24"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3745.49 1927.49L3774.38 1922.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3748.37 1944.36L3777.31 1939.58"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3751.07 1961.27L3780.06 1956.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3753.58 1978.2L3782.62 1974.06"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3755.91 1995.16L3784.99 1991.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3758.05 2012.15L3787.17 2008.63"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3760.01 2029.15L3789.16 2025.96"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3761.78 2046.18L3790.97 2043.3"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3763.36 2063.22L3792.58 2060.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3764.76 2080.28L3794.01 2078.05"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3765.97 2097.36L3795.24 2095.44"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3767 2114.45L3796.29 2112.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3767.84 2131.55L3797.15 2130.27"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3768.49 2148.65L3797.81 2147.69"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3768.96 2165.76L3798.29 2165.12"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3769.24 2182.88L3798.57 2182.56"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.3"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3864.67 2200H3938"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3864.27 2236.31L3937.59 2237.91"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3863.08 2272.61L3936.35 2275.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3861.1 2308.87L3934.28 2313.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3858.33 2345.08L3931.39 2351.48"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3854.77 2381.23L3927.67 2389.21"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3850.43 2417.28L3923.13 2426.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3845.29 2453.23L3917.77 2464.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3839.38 2489.07L3911.6 2501.8"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3832.68 2524.76L3904.6 2539.07"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3825.21 2560.3L3896.8 2576.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3816.96 2595.67L3888.19 2613.1"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3807.95 2630.85L3878.78 2649.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3798.16 2665.82L3868.57 2686.34"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3787.62 2700.58L3857.56 2722.63"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3776.32 2735.09L3845.76 2758.66"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3764.28 2769.35L3833.19 2794.43"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3751.48 2803.34L3819.83 2829.92"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3737.95 2837.04L3805.7 2865.1"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3723.69 2870.44L3790.81 2899.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3708.7 2903.52L3775.16 2934.51"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3692.99 2936.26L3758.76 2968.7"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3676.58 2968.66L3741.63 3002.52"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3659.46 3000.69L3723.75 3035.96"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3641.64 3032.33L3705.15 3069"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3623.14 3063.58L3685.84 3101.63"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3603.96 3094.42L3665.81 3133.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3584.12 3124.84L3645.09 3165.58"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3563.62 3154.81L3623.69 3196.88"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3542.46 3184.33L3601.6 3227.7"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3520.67 3213.38L3578.85 3258.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3498.25 3241.95L3555.44 3287.86"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3475.21 3270.03L3531.39 3317.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3451.56 3297.59L3506.7 3345.94"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3427.32 3324.63L3481.39 3374.18"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3402.5 3351.14L3455.47 3401.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3377.1 3377.1L3428.95 3428.95"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3351.14 3402.5L3401.85 3455.47"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3324.63 3427.32L3374.18 3481.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3297.59 3451.56L3345.94 3506.7"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3270.03 3475.21L3317.17 3531.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3241.95 3498.25L3287.85 3555.44"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3213.38 3520.67L3258.03 3578.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3184.33 3542.46L3227.7 3601.6"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3154.81 3563.62L3196.87 3623.69"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3124.84 3584.12L3165.58 3645.09"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3094.43 3603.97L3133.83 3665.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3063.58 3623.14L3101.63 3685.84"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3032.33 3641.64L3069 3705.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3000.69 3659.46L3035.96 3723.75"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2968.66 3676.58L3002.52 3741.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2936.26 3692.99L2968.7 3758.76"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2903.52 3708.7L2934.51 3775.16"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2870.44 3723.69L2899.97 3790.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2837.04 3737.95L2865.1 3805.7"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2803.34 3751.48L2829.92 3819.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2769.35 3764.27L2794.43 3833.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2735.09 3776.32L2758.66 3845.76"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2700.57 3787.62L2722.63 3857.56"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2665.82 3798.16L2686.34 3868.57"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2630.85 3807.94L2649.83 3878.78"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2595.67 3816.96L2613.1 3888.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2560.3 3825.21L2576.17 3896.8"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2524.76 3832.68L2539.07 3904.6"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2489.07 3839.38L2501.8 3911.6"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2453.23 3845.29L2464.39 3917.77"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2417.28 3850.43L2426.85 3923.13"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2381.23 3854.77L2389.21 3927.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2345.09 3858.33L2351.48 3931.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2308.88 3861.1L2313.67 3934.28"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2272.61 3863.08L2275.81 3936.35"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2236.31 3864.27L2237.91 3937.59"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2200 3864.67V3938"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2163.69 3864.27L2162.09 3937.59"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2127.39 3863.08L2124.19 3936.35"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2091.13 3861.1L2086.33 3934.28"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2054.91 3858.33L2048.52 3931.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2018.77 3854.77L2010.79 3927.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1982.72 3850.43L1973.14 3923.13"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1946.77 3845.29L1935.61 3917.77"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1910.93 3839.38L1898.2 3911.6"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1875.24 3832.68L1860.93 3904.6"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1839.7 3825.21L1823.83 3896.8"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1804.33 3816.96L1786.9 3888.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1769.15 3807.94L1750.17 3878.78"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1734.18 3798.16L1713.66 3868.57"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1699.42 3787.62L1677.37 3857.56"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1664.91 3776.32L1641.34 3845.76"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1630.65 3764.27L1605.57 3833.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1596.66 3751.48L1570.08 3819.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1562.96 3737.95L1534.9 3805.7"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1529.56 3723.69L1500.03 3790.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1496.48 3708.7L1465.49 3775.16"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1463.74 3692.99L1431.3 3758.76"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1431.34 3676.58L1397.48 3741.62"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1399.31 3659.46L1364.04 3723.75"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1367.67 3641.64L1331 3705.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1336.41 3623.14L1298.37 3685.84"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1305.58 3603.97L1266.17 3665.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1275.16 3584.12L1234.42 3645.09"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1245.19 3563.62L1203.12 3623.69"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1215.67 3542.46L1172.3 3601.6"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1186.62 3520.67L1141.97 3578.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1158.05 3498.25L1112.14 3555.44"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1129.97 3475.21L1082.84 3531.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1102.41 3451.56L1054.06 3506.7"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1075.37 3427.32L1025.82 3481.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1048.86 3402.5L998.15 3455.47"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1022.9 3377.1L971.049 3428.95"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M997.505 3351.14L944.531 3401.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M972.679 3324.63L918.612 3374.18"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M948.438 3297.59L893.303 3345.94"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M924.792 3270.03L868.615 3317.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M901.752 3241.95L844.561 3287.86"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M879.332 3213.38L821.152 3258.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M857.539 3184.33L798.399 3227.7"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M836.385 3154.81L776.313 3196.88"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M815.881 3124.84L754.906 3165.58"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M796.034 3094.42L734.186 3133.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M776.857 3063.58L714.163 3101.63"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M758.356 3032.33L694.848 3069"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M740.542 3000.69L676.249 3035.96"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M723.422 2968.66L658.375 3002.52"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M707.006 2936.26L641.235 2968.7"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M691.299 2903.52L624.837 2934.51"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M676.311 2870.44L609.188 2899.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M662.048 2837.04L594.297 2865.1"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M648.517 2803.34L580.17 2829.92"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M635.725 2769.35L566.814 2794.43"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M623.677 2735.09L554.235 2758.66"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M612.379 2700.58L542.439 2722.63"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M601.837 2665.82L531.434 2686.34"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M592.055 2630.85L521.221 2649.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M583.039 2595.67L511.808 2613.1"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M574.792 2560.3L503.197 2576.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M567.32 2524.76L495.396 2539.07"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M560.624 2489.07L488.404 2501.8"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M554.707 2453.23L482.228 2464.39"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M549.575 2417.28L476.869 2426.85"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M545.228 2381.23L472.33 2389.21"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M541.668 2345.08L468.613 2351.48"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M538.897 2308.87L465.721 2313.67"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M536.918 2272.61L463.654 2275.81"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M535.73 2236.31L462.414 2237.91"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M535.333 2200H462"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M535.73 2163.69L462.414 2162.09"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M536.918 2127.39L463.654 2124.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M538.897 2091.13L465.721 2086.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M541.668 2054.91L468.613 2048.52"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M545.228 2018.77L472.33 2010.79"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M549.575 1982.72L476.869 1973.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M554.707 1946.77L482.228 1935.61"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M560.624 1910.93L488.404 1898.2"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M567.32 1875.24L495.396 1860.93"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M574.792 1839.7L503.197 1823.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M583.039 1804.33L511.808 1786.9"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M592.055 1769.15L521.221 1750.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M601.837 1734.18L531.434 1713.66"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M612.379 1699.42L542.439 1677.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M623.677 1664.91L554.235 1641.34"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M635.725 1630.65L566.814 1605.57"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M648.517 1596.66L580.17 1570.08"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M662.048 1562.96L594.297 1534.9"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M676.311 1529.56L609.188 1500.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M691.299 1496.48L624.837 1465.49"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M707.006 1463.74L641.235 1431.3"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M723.422 1431.34L658.375 1397.48"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M740.542 1399.31L676.249 1364.04"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M758.356 1367.67L694.848 1331"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M776.857 1336.42L714.163 1298.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M796.034 1305.58L734.186 1266.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M815.881 1275.16L754.906 1234.42"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M836.385 1245.19L776.313 1203.12"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M857.539 1215.67L798.399 1172.3"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M879.332 1186.62L821.152 1141.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M901.752 1158.05L844.561 1112.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M924.792 1129.97L868.615 1082.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M948.438 1102.41L893.303 1054.06"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M972.679 1075.37L918.612 1025.82"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M997.505 1048.86L944.531 998.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1022.9 1022.9L971.049 971.048"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1048.86 997.505L998.15 944.531"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1075.37 972.679L1025.82 918.612"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1102.41 948.437L1054.06 893.302"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1129.97 924.791L1082.84 868.615"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1158.05 901.752L1112.14 844.561"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1186.62 879.331L1141.97 821.152"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1215.67 857.539L1172.3 798.399"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1245.19 836.385L1203.12 776.313"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1275.16 815.88L1234.42 754.906"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1305.58 796.034L1266.17 734.186"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1336.41 776.857L1298.37 714.163"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1367.67 758.356L1331 694.848"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1399.31 740.542L1364.04 676.249"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1431.34 723.422L1397.48 658.375"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1463.74 707.006L1431.3 641.235"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1496.48 691.299L1465.49 624.837"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1529.56 676.311L1500.03 609.188"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1562.96 662.049L1534.9 594.297"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1596.66 648.518L1570.08 580.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1630.65 635.725L1605.57 566.814"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1664.91 623.677L1641.34 554.235"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1699.42 612.379L1677.37 542.44"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1734.18 601.837L1713.66 531.434"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1769.15 592.055L1750.17 521.221"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1804.33 583.039L1786.9 511.808"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1839.7 574.793L1823.83 503.198"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1875.24 567.319L1860.93 495.395"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1910.93 560.624L1898.2 488.404"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1946.77 554.707L1935.61 482.228"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M1982.72 549.575L1973.14 476.869"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2018.77 545.228L2010.79 472.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2054.91 541.668L2048.52 468.614"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2091.13 538.898L2086.33 465.721"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2127.39 536.918L2124.19 463.654"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2163.69 535.729L2162.09 462.414"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2200 535.333V462"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2236.31 535.729L2237.91 462.414"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2272.61 536.918L2275.81 463.654"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2308.88 538.898L2313.67 465.721"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2345.09 541.668L2351.48 468.614"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2381.23 545.228L2389.21 472.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2417.28 549.575L2426.85 476.869"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2453.23 554.707L2464.39 482.228"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2489.07 560.624L2501.8 488.404"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2524.76 567.319L2539.07 495.395"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2560.3 574.793L2576.17 503.198"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2595.67 583.039L2613.1 511.808"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2630.85 592.055L2649.83 521.221"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2665.82 601.837L2686.34 531.434"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2700.57 612.379L2722.63 542.44"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2735.09 623.677L2758.66 554.235"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2769.35 635.725L2794.43 566.814"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2803.34 648.518L2829.92 580.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2837.04 662.049L2865.1 594.297"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2870.44 676.311L2899.97 609.188"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2903.52 691.299L2934.51 624.837"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2936.26 707.006L2968.7 641.235"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M2968.66 723.422L3002.52 658.375"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3000.69 740.542L3035.96 676.249"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3032.33 758.356L3069 694.848"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3063.58 776.857L3101.63 714.163"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3094.43 796.034L3133.83 734.186"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3124.84 815.88L3165.58 754.906"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3154.81 836.385L3196.87 776.313"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3184.33 857.539L3227.7 798.399"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3213.38 879.331L3258.03 821.152"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3241.95 901.752L3287.85 844.561"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3270.03 924.791L3317.17 868.615"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3297.59 948.437L3345.94 893.302"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3324.63 972.679L3374.18 918.612"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3351.14 997.505L3401.85 944.531"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3377.1 1022.9L3428.95 971.048"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3402.5 1048.86L3455.47 998.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3427.32 1075.37L3481.39 1025.82"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3451.56 1102.41L3506.7 1054.06"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3475.21 1129.97L3531.39 1082.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3498.25 1158.05L3555.44 1112.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3520.67 1186.62L3578.85 1141.97"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3542.46 1215.67L3601.6 1172.3"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3563.62 1245.19L3623.69 1203.12"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3584.12 1275.16L3645.09 1234.42"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3603.96 1305.58L3665.81 1266.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3623.14 1336.42L3685.84 1298.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3641.64 1367.67L3705.15 1331"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3659.46 1399.31L3723.75 1364.04"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3676.58 1431.34L3741.63 1397.48"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3692.99 1463.74L3758.76 1431.3"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3708.7 1496.48L3775.16 1465.49"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3723.69 1529.56L3790.81 1500.03"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3737.95 1562.96L3805.7 1534.9"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3751.48 1596.66L3819.83 1570.08"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3764.28 1630.65L3833.19 1605.57"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3776.32 1664.91L3845.76 1641.34"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3787.62 1699.42L3857.56 1677.37"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3798.16 1734.18L3868.57 1713.66"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3807.95 1769.15L3878.78 1750.17"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3816.96 1804.33L3888.19 1786.9"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3825.21 1839.7L3896.8 1823.83"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3832.68 1875.24L3904.6 1860.93"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3839.38 1910.93L3911.6 1898.2"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3845.29 1946.77L3917.77 1935.61"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3850.43 1982.72L3923.13 1973.15"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3854.77 2018.77L3927.67 2010.79"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3858.33 2054.91L3931.39 2048.52"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3861.1 2091.13L3934.28 2086.33"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3863.08 2127.39L3936.35 2124.19"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
        <path
          d="M3864.27 2163.69L3937.59 2162.09"
          stroke="rgb(var(--foreground))"
          strokeOpacity="0.15"
          strokeWidth="1.83333"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}
