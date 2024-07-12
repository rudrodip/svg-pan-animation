import TimelineSVG from "./_components/timeline";

export default function Home() {
  return (
    <main className="relative w-full h-[100dvh] flex flex-col gap-16 md:gap-32">
      <Hero />
      <div className="w-full h-full flex justify-center items-center">
        <TimelineScroll />
      </div>
    </main>
  );
}

const TimelineScroll = () => {
  return (
    <div className="flex justify-center items-center w-full max-h-[400px] overflow-hidden">
      <div
        className="flex justify-center items-center w-full"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          transformStyle: "preserve-3d",
          transform: "rotateX(65deg)",
        }}
      >
        <TimelineSVG />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col mt-[15dvh]">
      <h1 className="relative text-3xl md:text-5xl text-center tracking-tight font-semibold">
        Interactive SVG Pan Animation
      </h1>
      <span className="text-sm text-center mt-2">
        inspired from{" "}
        <a href="https://linear.app/plan" target="_blank" className="underline">
          linear
        </a>
      </span>
      <div className="flex justify-center items-center gap-5 mt-3 text-sm">
        <a
          href="https://github.com/rudrodip/svg-pan-animation"
          target="_blank"
          className="px-3 py-1 rounded border border-zinc-500 bg-background"
        >
          Github
        </a>
        <a
          href="https://x.com/rds_agi"
          target="_blank"
          className="px-3 py-1 rounded border border-zinc-500 bg-background"
        >
          X / Twitter
        </a>
      </div>
    </div>
  );
};
