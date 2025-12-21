export default function ChatAssistantSection() {
  return (
    <section className="relative bg-black py-36 px-6 text-white overflow-hidden">

      {/* Top CTA */}
      <div className="absolute top-10 w-full flex justify-center items-center gap-6 text-sm text-neutral-400">
        <span>ValueMate helps appraisers work 5X faster</span>
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-medium shadow-lg">
          Get Started
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-5xl font-medium leading-tight">
            Meet our chat assistant, <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Your personal form-filler
            </span>
          </h2>

          <button className="mt-10 px-8 py-3 rounded-full bg-white text-black font-medium shadow-md">
            Book a Demo
          </button>
        </div>

        {/* RIGHT IMAGE (YOUR IMAGE) */}
        <div className="relative flex justify-center">
          <div className="relative rounded-[28px] overflow-hidden border border-white/10 
                          shadow-[0_0_100px_rgba(168,85,247,0.55)]">

            <img
              src="../appraisal-chat.webp"
              alt="Chat Assistant Appraisal"
              className="w-[720px] max-w-full rounded-[28px]"
            />

            {/* Inner glow */}
            <div className="absolute inset-0 rounded-[28px] pointer-events-none
                            shadow-[inset_0_0_140px_rgba(168,85,247,0.35)]" />
          </div>
        </div>
      </div>

      {/* Bottom caption */}
      <div className="mt-28 text-center">
        <p className="text-lg">
          <span className="text-fuchsia-500">•</span>{" "}
          <span className="font-medium">Chat with the Regulations</span>
        </p>
        <p className="text-sm text-neutral-400 mt-2">
          Compliance with UAD 3.6 and UPD will never be easier.
        </p>
      </div>
    </section>
  );
}
