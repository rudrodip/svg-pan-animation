import TimelineSVG from "./_components/timeline";

export default function Home() {
  return (
    <main className="relative w-full h-[100dvh] flex flex-col">
      <h1 className="relative text-3xl md:text-5xl text-center tracking-tighter mt-16 md:mt-24">
        Interactive SVG Pan Animation
      </h1>
      <span className="text-sm text-center mt-2">inspired from <a href="https://linear.app/plan" className="underline">linear</a></span>
      <div className="flex justify-center items-center gap-5 mt-3">
        <a href="https://github.com/rudrodip/svg-pan-animation" target="_blank" className="px-4 py-1 rounded-lg border border-zinc-500 bg-background">Github</a>
        <a href="https://x.com/rds_agi" target="_blank" className="px-4 py-1 rounded-lg border border-zinc-500 bg-background">X / Twitter</a>
      </div>
      <div
        id="container"
        className="flex justify-center items-center overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(65deg)`
        }}
      >
        <TimelineSVG />
      </div>
    </main>
  );
}
