const cards = [
  {
    icon: "💰",
    title: "Exclusive Deals",
    description:
      "Access student-only discounts from top Nigerian brands across food, fashion, tech, education, and lifestyle.",
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-100",
    iconBg: "bg-green-100",
    delay: "reveal-delay-1",
  },
  {
    icon: "🎓",
    title: "Lifelong Platform",
    description:
      "From primary school through university, NYSC, and beyond. One ID. One platform. Your entire academic journey.",
    gradient: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    delay: "reveal-delay-2",
  },
  {
    icon: "🚀",
    title: "Smart Savings",
    description:
      "Save money on what you already buy every day. Track your savings and see how much Savvi puts back in your pocket.",
    gradient: "from-purple-50 to-violet-50",
    border: "border-purple-100",
    iconBg: "bg-purple-100",
    delay: "reveal-delay-3",
  },
];

export default function ValueProps() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-green-700 bg-green-100 mb-4">
            Why Choose Savvi?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why <span className="gradient-text-green">Savvi?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We built the platform Nigerian students have always needed — smart,
            simple, and built to last.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`reveal-on-scroll ${card.delay} group hover-lift cursor-default rounded-3xl p-8 bg-gradient-to-br ${card.gradient} border ${card.border} shadow-sm`}
            >
              <div
                className={`w-16 h-16 rounded-2xl ${card.iconBg} flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 reveal-on-scroll">
          {[
            { icon: "🔒", text: "100% Secure & Verified" },
            { icon: "✨", text: "No Hidden Fees" },
            { icon: "📱", text: "Works Online & Offline" },
            { icon: "🇳🇬", text: "Made for Nigeria" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-sm font-medium text-gray-600"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
