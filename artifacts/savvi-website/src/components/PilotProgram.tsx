export default function PilotProgram() {
  return (
    <section id="pilot" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll">
          <div
            className="relative rounded-3xl overflow-hidden p-8 md:p-12 border border-green-200"
            style={{
              background:
                "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #ecfdf5 100%)",
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #16a34a, transparent)", transform: "translate(30%, -30%)" }}
            />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15 pointer-events-none"
              style={{ background: "radial-gradient(circle, #22c55e, transparent)", transform: "translate(-30%, 30%)" }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🎯</span>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-600 text-white text-sm font-bold">
                    <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                    PILOT PROGRAM LIVE
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  We're Live on Campus
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Savvi is currently in closed beta with verified students at{" "}
                  <strong className="text-green-700">
                    University of Lagos (UNILAG)
                  </strong>{" "}
                  and{" "}
                  <strong className="text-green-700">Covenant University</strong>
                  . Real students. Real savings. Real results.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-green-200 text-sm font-medium text-gray-700">
                    🏛️ UNILAG — Active
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-green-200 text-sm font-medium text-gray-700">
                    🎓 Covenant University — Active
                  </div>
                </div>

                <div
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white"
                  style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
                >
                  🚀 Coming to your campus soon
                </div>
              </div>

              {/* Right side - Launch timeline */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Launch Timeline
                </h3>

                {[
                  {
                    date: "Jan 2026",
                    event: "Savvi Founded",
                    done: true,
                    icon: "🌱",
                  },
                  {
                    date: "Feb 2026",
                    event: "UNILAG Pilot Begins",
                    done: true,
                    icon: "🏛️",
                  },
                  {
                    date: "Mar 2026",
                    event: "Covenant University Joins",
                    done: true,
                    icon: "🎓",
                  },
                  {
                    date: "Official Campus Launch: March 2026",
                    event: "Full Public Launch",
                    done: true,
                    icon: "🚀",
                  },
                  {
                    date: "Q2 2026",
                    event: "10+ Campuses Nationwide",
                    done: false,
                    icon: "🇳🇬",
                  },
                  {
                    date: "Q3 2026",
                    event: "100+ Brand Partners",
                    done: false,
                    icon: "🤝",
                  },
                ].map((item) => (
                  <div key={item.event} className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                        item.done
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {item.done ? (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm">{item.icon}</span>
                        <span
                          className={`text-sm font-semibold ${
                            item.done ? "text-gray-900" : "text-gray-400"
                          }`}
                        >
                          {item.event}
                        </span>
                      </div>
                      <div
                        className={`text-xs mt-0.5 ${
                          item.done ? "text-green-600" : "text-gray-400"
                        } font-medium`}
                      >
                        {item.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
