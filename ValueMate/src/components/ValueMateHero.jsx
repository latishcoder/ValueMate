export default function ValueMateHero() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-black/60 backdrop-blur border border-white/10">
          <div className="flex items-center gap-2 font-semibold">
            ValueMate <span className="opacity-70">🏠</span>
          </div>

          <div className="hidden md:flex gap-6 text-sm text-neutral-300">
            <span>Blog</span>
            <span>Chat</span>
            <span>Pricing</span>
          </div>

          <button className="ml-4 px-4 py-2 rounded-full bg-white text-black text-sm font-medium">
            Book a Demo
          </button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <section className="pt-40 flex flex-col items-center text-center px-6">

        {/* YC Badge */}
        <div className="mb-6 px-4 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-xs flex items-center gap-2">
          Backed by
          <span className="bg-orange-600 px-2 py-0.5 rounded text-white font-bold">
            Y
          </span>
          Combinator
        </div>

        <p className="text-neutral-400 text-lg">
          Cut appraisal turnarounds by
        </p>

        {/* Gradient headline */}
        <h1 className="mt-2 text-6xl md:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            over 80%
          </span>
        </h1>

        <p className="mt-4 text-sm text-neutral-400 max-w-md">
          ValueMate allows appraisers to complete 5× as many appraisals
        </p>

        {/* CTA */}
        <button className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-medium shadow-lg">
          See the workflow
        </button>
      </section>

      {/* PRODUCT CARD */}
      <section className="mt-24 flex justify-center px-6 pb-32">
        <div className="relative w-full max-w-5xl rounded-2xl bg-gradient-to-b from-neutral-900 to-black border border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.4)]">

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div>
              <h2 className="text-xl font-semibold text-purple-400">
                ValueMate
              </h2>
              <p className="text-xs text-neutral-400">
                AI-Powered Property Appraisals
              </p>
            </div>
            <button className="px-3 py-1.5 text-xs rounded-md bg-purple-600">
              + New Appraisal
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
            <PropertyCard
              address="123 Main Street, San Francisco, CA 94105"
              status="Completed"
              value="$1,250,000"
              sqft="2,400"
              date="Mar 15, 2024"
            />
            <PropertyCard
              address="456 Market Ave, San Francisco, CA 94102"
              status="In Progress"
              value="$850,000"
              sqft="1,200"
              date="Mar 14, 2024"
            />
            <PropertyCard
              address="789 Oak Road, San Francisco, CA 94110"
              status="Completed"
              value="$1,750,000"
              sqft="3,600"
              date="Mar 13, 2024"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* CARD */
function PropertyCard({ address, status, value, sqft, date }) {
  const statusColor =
    status === "Completed"
      ? "bg-green-600/20 text-green-400"
      : "bg-purple-600/20 text-purple-400";

  return (
    <div className="rounded-xl bg-neutral-900 border border-white/10 p-4 text-sm">
      <div className="flex justify-between mb-2">
        <p className="font-medium">{address}</p>
        <span className={`px-2 py-0.5 rounded text-xs ${statusColor}`}>
          {status}
        </span>
      </div>

      <div className="space-y-1 text-neutral-400">
        <p>Appraised Value: <span className="text-white">{value}</span></p>
        <p>Square Feet: <span className="text-white">{sqft}</span></p>
        <p>Appraisal Date: <span className="text-white">{date}</span></p>
      </div>

      <button className="mt-4 w-full text-center py-2 rounded-md border border-purple-500/40 text-purple-400 hover:bg-purple-500/10">
        View Full Report
      </button>
    </div>
  );
}
