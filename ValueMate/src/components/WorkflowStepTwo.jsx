export default function WorkflowStepTwo() {
  return (
    <section className="bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT CARD */}
        <div className="relative rounded-[32px] p-12 border border-white/10 bg-gradient-to-b from-neutral-900/70 to-black">

          <h3 className="text-4xl font-medium text-white/40 mb-6">
            ValueMate models<br />the home
          </h3>

          <p className="text-neutral-500 max-w-sm">
            After scanning, ValueMate produces a 3D model.
          </p>

          {/* BIG NUMBER */}
          <span className="absolute bottom-10 right-12 text-[200px] font-bold text-white/5 leading-none select-none">
            2
          </span>
        </div>

        {/* RIGHT VISUAL CARD */}
        <div className="relative rounded-[32px] border border-white/10 bg-black flex items-center justify-center overflow-hidden">

          {/* Soft glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

          {/* 3D MODEL IMAGE */}
          <img
            src="/model-home.png"   // <-- put your image here
            alt="3D Home Model"
            className="relative z-10 w-[75%] drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
          />

        </div>

      </div>
    </section>
  );
}
