const features = [
  {
    icon: "🎯",
    title: "Targeted Reach",
    description:
      "Access the verified student demographic across Nigerian universities with precision targeting.",
  },
  {
    icon: "✅",
    title: "Verified Users",
    description:
      "Real students, real engagement. Every Savvi user is verified with their school credentials.",
  },
  {
    icon: "🏛️",
    title: "Campus Activation",
    description:
      "Direct campus marketing opportunities, pop-ups, and on-ground brand activations at partner universities.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    description:
      "Get detailed insights on student spending patterns, demographics, and campaign performance.",
  },
  {
    icon: "🤝",
    title: "Partnership Tiers",
    description:
      "Flexible partnership models for brands of all sizes — from startups to enterprise companies.",
  },
  {
    icon: "📱",
    title: "Digital & Physical",
    description:
      "Reach students both online and at campus locations with our hybrid redemption system.",
  },
];

export default function ForBrands() {
  return (
    <section
      id="for-brands"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, #22c55e, transparent)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, #2563EB, transparent)",
            transform: "translate(-30%, 30%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-green-400 bg-green-400/10 border border-green-400/20 mb-4">
            For Brands & Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Partner With Nigeria's{" "}
            <span className="gradient-text-green-yellow">Student Economy</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with thousands of verified students across Nigerian
            universities. The student market is one of Nigeria's largest
            untapped consumer segments — and Savvi is your direct access point.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`reveal-on-scroll reveal-delay-${(index % 3) + 1} group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-green-400/30 transition-all duration-300 hover-lift`}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* University logos section */}
        <div className="text-center mb-12 reveal-on-scroll">
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-6">
            Currently Active At
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["🏛️ University of Lagos (UNILAG)", "🎓 Covenant University"].map(
              (uni) => (
                <div
                  key={uni}
                  className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-sm hover:border-green-400/50 hover:bg-green-400/10 transition-all duration-300"
                >
                  {uni}
                </div>
              )
            )}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            + 10 more campuses launching in 2025
          </p>
        </div>

        {/* CTA */}
        <div className="text-center reveal-on-scroll">
          <button
            onClick={() =>
              document
                .querySelector("#waitlist")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 group"
          >
            <span>Become a Partner Brand</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
          <p className="text-gray-500 text-sm mt-4">
            Partnership inquiries: partners@savvi.ng
          </p>
        </div>
      </div>
    </section>
  );
}
