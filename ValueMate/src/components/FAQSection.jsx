import { useState } from "react";

const faqs = [
  "What is ValueMate?",
  "Can I upgrade or downgrade at any time?",
  "Is support available with every plan?",
  "How does the form filling process work?",
  "Does ValueMate support compliance with UAD 3.6 and ANSI standards?",
  "What equipment is required to use ValueMate?",
  "Is ValueMate currently available for use?",
  "Where can I find more information or assistance?",
  "How can I contact the ValueMate team?",
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-black py-32 px-6 text-white">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-2xl font-medium">
          <span className="text-fuchsia-500 mr-2">•</span>
          Frequently Asked Questions
        </h2>
        <p className="text-neutral-400 mt-2">
          Got questions? We’ve got you covered.
        </p>
      </div>

      {/* FAQ List */}
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((question, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="rounded-full border border-white/10
                         bg-neutral-900/80 px-6 py-4
                         transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center gap-4 text-left"
              >
                {/* Plus Icon */}
                <span className="text-xl font-light text-white">
                  {isOpen ? "–" : "+"}
                </span>

                <span className="flex-1 text-sm md:text-base">
                  {question}
                </span>
              </button>

              {/* Answer (hidden for now – UI ready) */}
              {isOpen && (
                <div className="mt-4 pl-8 text-sm text-neutral-400">
                  This answer content can be added here later.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
