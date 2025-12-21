export default function ChatWithRegulations() {
  return (
    <section className="relative bg-black py-32 px-6 text-white">

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-lg font-medium">
          <span className="text-fuchsia-500 mr-2">•</span>
          Chat with the Regulations
        </p>
        <p className="text-neutral-400 mt-2">
          Compliance with UAD 3.6 and UPD will never be easier.
        </p>
      </div>

      {/* Chat Box */}
      <div className="flex justify-center">
        <div className="w-full max-w-3xl rounded-2xl bg-neutral-900/90 
                        border border-white/10 shadow-2xl">

          {/* Chat content */}
          <div className="h-[340px] p-6">
            <div className="inline-block max-w-[75%] rounded-lg 
                            bg-neutral-800 px-4 py-3 text-sm">
              Hey, I’m ValueMate — ask me anything about UAD 3.6.
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-4 border-t border-white/10 p-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 rounded-lg bg-neutral-800 px-4 py-3
                         text-sm text-white placeholder:text-neutral-500
                         outline-none"
            />

            <button className="flex h-11 w-11 items-center justify-center 
                               rounded-lg bg-gradient-to-br 
                               from-fuchsia-500 to-purple-600
                               shadow-lg hover:scale-105 transition">
              ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
