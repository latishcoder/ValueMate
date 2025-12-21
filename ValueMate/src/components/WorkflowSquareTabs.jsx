import { useState } from "react";

export default function WorkflowSquareTabs() {
  const [active, setActive] = useState(1);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-32">

      {/* Header */}
      <div className="text-center mb-24">
        <p className="text-sm mb-2 flex justify-center items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          The Workflow
        </p>
        <p className="text-neutral-400">
          The smarter way to complete your appraisal reports.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT – TEXT TAB */}
        <div
          onClick={() => setActive(1)}
          className={`relative cursor-pointer rounded-[32px] p-12 border transition
            ${
              active === 1
                ? "border-white/15 bg-gradient-to-b from-neutral-900/80 to-black"
                : "border-white/5 bg-black"
            }`}
        >
          <h3 className="text-3xl font-medium text-white/60 mb-6">
            Appraiser scans the home
          </h3>

          <p className="text-neutral-500 max-w-sm">
            Open the ValueMate app and follow the instructions to scan the home.
          </p>

          {/* Big number */}
          <span className="absolute bottom-10 right-12 text-[180px] font-bold text-white/5 leading-none select-none">
            1
          </span>
        </div>

        {/* RIGHT – VISUAL TAB */}
        <div
          className={`relative rounded-[32px] border border-white/10 overflow-hidden
            bg-gradient-to-br from-purple-900/40 to-black flex items-center justify-center`}
        >
          {/* House wireframe */}
          <svg
            className="absolute opacity-50"
            width="320"
            height="220"
            viewBox="0 0 320 220"
            fill="none"
            stroke="white"
            strokeOpacity="0.6"
          >
            <rect x="80" y="100" width="160" height="90" />
            <polygon points="80,100 160,40 240,100" />
            <rect x="120" y="130" width="40" height="60" />
            <rect x="180" y="130" width="30" height="30" />
          </svg>

          {/* Scan line */}
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

          {/* Phone */}
          <div className="relative w-24 h-44 bg-black rounded-2xl border border-white/20 shadow-2xl" />
        </div>

      </div>
    </section>
  );
}
