export default function WorkflowStepThreeFour() {
  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* STEP 3 – LEFT */}
        <div className="relative rounded-[32px] p-12 border border-white/10 bg-gradient-to-b from-neutral-900/70 to-black">
          <h3 className="text-4xl font-medium text-white/40 mb-4">
            Asset Creation
          </h3>

          <p className="text-neutral-500 max-w-sm">
            Using the scan and model, ValueMate generates plans such as floorplans.
          </p>

          <span className="absolute bottom-10 right-12 text-[200px] font-bold text-white/5 select-none">
            3
          </span>
        </div>

        {/* STEP 3 – RIGHT IMAGE */}
        <div className="rounded-[32px] border border-white/10 bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/floorplan.png"
            alt="Floorplan"
            className="w-[85%] opacity-90"
          />
        </div>

        {/* STEP 4 – LEFT */}
        <div className="relative rounded-[32px] p-12 border border-white/10 bg-gradient-to-b from-neutral-900/70 to-black">
          <h3 className="text-4xl font-medium text-white/40 mb-4">
            Report Generation
          </h3>

          <p className="text-neutral-500 max-w-sm">
            ValueMate completes most of the appraisal report.
          </p>

          <span className="absolute bottom-10 right-12 text-[200px] font-bold text-white/5 select-none">
            4
          </span>
        </div>

        {/* STEP 4 – RIGHT IMAGE */}
        <div className="rounded-[32px] border border-white/10 bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/report-folder.png"
            alt="Report Folder"
            className="w-[55%] drop-shadow-[0_0_60px_rgba(168,85,247,0.35)]"
          />
        </div>

      </div>
    </section>
  );
}
