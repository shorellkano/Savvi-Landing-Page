import { openWaitlistForm } from "@/lib/tally";

const steps = [
  {
    number: "01",
    title: "Sign Up Free",
    description:
      "Reserve your Savvi ID with your school email in less than 2 minutes. No credit card needed.",
    icon: "✍️",
    color: "text-green-600",
    bgColor: "bg-green-600",
    lightBg: "bg-green-50",
    border: "border-green-200",
  },
  {
    number: "02",
    title: "Verify Status",
    description:
      "Quick verification with your matriculation number or student card. We confirm you're a real Nigerian student.",
    icon: "✅",
    color: "text-blue-600",
    bgColor: "bg-blue-600",
    lightBg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    number: "03",
    title: "Unlock Deals",
    description:
      "Access exclusive student discounts instantly from top brands. Food, fashion, tech, transport, and more.",
    icon: "🔓",
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    lightBg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    number: "04",
    title: "Save & Enjoy",
    description:
      "Use deals at partner brands online and offline. Show your Savvi ID to redeem savings everywhere on campus.",
    icon: "🎉",
    color: "text-emerald-600",
    bgColor: "bg-emerald-600",
    lightBg: "bg-emerald-50",
    border: "border-emerald-200",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-100 mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            How <span className="gradient-text-blue-purple">Savvi Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started takes under 2 minutes. Here's how to join thousands
            of students saving smart.
          </p>
        </div>

        {/* Desktop: Horizontal steps */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 z-0" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`reveal-on-scroll reveal-delay-${index + 1} relative z-10 flex flex-col items-center text-center group`}
            >
              {/* Step number circle */}
              <div
                className={`w-24 h-24 rounded-full ${step.lightBg} border-4 ${step.border} flex flex-col items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
              >
                <span className="text-2xl mb-0.5">{step.icon}</span>
                <span className={`text-xs font-bold ${step.color}`}>
                  Step {step.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-blue-200 to-purple-200" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`reveal-on-scroll reveal-delay-${index + 1} relative flex gap-6 pl-4`}
              >
                {/* Circle on line */}
                <div
                  className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full ${step.bgColor} flex items-center justify-center shadow-md`}
                >
                  <span className="text-lg">{step.icon}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 pb-2`}>
                  <div className={`text-xs font-bold ${step.color} uppercase tracking-widest mb-1`}>
                    Step {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal-on-scroll">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to get started? It's completely free.
          </p>
          <button
            onClick={openWaitlistForm}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
          >
            <span>Get My Free Savvi ID</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
