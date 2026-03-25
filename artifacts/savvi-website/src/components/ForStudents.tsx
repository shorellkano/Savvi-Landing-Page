import { openWaitlistForm } from "@/lib/tally";

const benefits = [
  "Works from primary school to NYSC and beyond",
  "Free to join – no hidden fees, ever",
  "Exclusive campus partnerships across Nigeria",
  "Verified student community with real benefits",
  "Instant access to student-only discounts",
  "Save on food, transport, fashion, and more",
];

const stats = [
  { value: "₦50k+", label: "Average Annual Savings" },
  { value: "50+", label: "Partner Brands" },
  { value: "2", label: "University Campuses" },
  { value: "12+", label: "Years of Student Life Covered" },
];

export default function ForStudents() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="reveal-on-scroll">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-green-700 bg-green-100 mb-6">
              For Students
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Built for{" "}
              <span className="gradient-text-green">Nigerian Students</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every feature of Savvi was designed with the Nigerian student
              experience in mind — from secondary school to your first job.
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 group-hover:bg-green-600 transition-colors">
                    <svg
                      className="w-3.5 h-3.5 text-green-600 group-hover:text-white transition-colors"
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
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={openWaitlistForm}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #16a34a, #15803d)",
              }}
            >
              Join as a Student
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

          {/* Right side - Stats card */}
          <div className="reveal-on-scroll reveal-delay-2">
            <div
              className="relative rounded-3xl p-8 overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #14532d 0%, #15803d 50%, #16a34a 100%)",
              }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #ffffff, transparent)", transform: "translate(30%, -30%)" }}
              />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #4ade80, transparent)", transform: "translate(-30%, 30%)" }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <img
                    src="/savvi-logo.png"
                    alt="Savvi"
                    className="w-12 h-12 rounded-xl object-cover border-2 border-white/30"
                  />
                  <div>
                    <div className="text-white font-black text-xl">SAVVI</div>
                    <div className="text-green-200 text-xs font-medium">
                      Student Savings Platform
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <div className="text-3xl font-black text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-green-200 text-xs font-medium leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sample ID card */}
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-green-200 text-xs font-bold uppercase tracking-widest mb-3">
                    Sample Savvi ID
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">
                        Adaeze Okonkwo
                      </div>
                      <div className="text-green-200 text-xs">
                        University of Lagos · 200L
                      </div>
                      <div className="text-green-300 text-xs font-mono mt-0.5">
                        SVV-2024-UL-001
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-8 h-8 rounded-full bg-green-400/30 flex items-center justify-center">
                        ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
