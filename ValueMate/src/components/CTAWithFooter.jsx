export default function CTAWithFooter() {
  return (
    <section className="relative bg-black text-white">

      {/* CTA */}
      <div className="relative flex justify-center pt-32 pb-24">
        <div className="relative w-full max-w-4xl rounded-3xl bg-neutral-900 px-10 py-14 text-center shadow-xl">
          
          {/* Purple Glow */}
          <div className="absolute inset-0 -z-10 rounded-3xl blur-2xl bg-purple-600/30" />

          <h2 className="text-2xl md:text-3xl font-medium leading-snug">
            See how ValueMate helps appraisers
            <br />
            complete 5X more appraisals
          </h2>

          <button className="mt-8 rounded-full bg-neutral-200 px-6 py-2 text-sm font-medium text-black hover:bg-white transition">
            Talk to a Founder
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black px-10 py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">

          {/* Left */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-medium">
              ValueMate
              <span className="text-lg">🏠</span>
            </div>

            <div className="flex items-center gap-3 opacity-60">
              <span className="text-xs border rounded-full px-2 py-1">AICPA</span>
              <span className="text-xs border rounded-full px-2 py-1">SOC</span>
            </div>

            <p className="text-neutral-500 text-xs">
              Valuemate © 2025
            </p>
          </div>

          {/* Overview */}
          <div>
            <h4 className="mb-4 font-medium">Overview</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Workflow</li>
              <li>Chat</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="mb-4 font-medium">Legal</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <p className="mt-10 text-xs text-neutral-500">
              Designed by Zyner ⚡
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
