import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWaitlist = () => {
    document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large circle top-right */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 animate-spin-slow"
          style={{
            background:
              "conic-gradient(from 0deg, #16a34a, #22c55e, #4ade80, #16a34a)",
          }}
        />
        {/* Medium circle bottom-left */}
        <div
          className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #15803d, transparent)",
          }}
        />
        {/* Floating shapes */}
        <div
          className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-yellow-400 opacity-60 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-green-400 opacity-40 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-5 h-5 rounded-full bg-emerald-400 opacity-50 animate-float"
          style={{ animationDelay: "0.8s" }}
        />
        <div
          className="absolute top-1/2 left-1/5 w-3 h-3 rounded-full bg-yellow-300 opacity-60 animate-float"
          style={{ animationDelay: "2s" }}
        />
        {/* Money bag icons */}
        <div
          className="absolute top-1/4 left-8 text-4xl opacity-10 animate-float"
          style={{ animationDelay: "1s" }}
        >
          💰
        </div>
        <div
          className="absolute bottom-1/4 right-8 text-4xl opacity-10 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          🎓
        </div>
        <div
          className="absolute top-2/3 left-1/6 text-3xl opacity-10 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          🚀
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Social proof badge */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 text-sm font-semibold text-green-800 border border-green-200 bg-white/80 backdrop-blur-sm shadow-md transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="text-base">🎓</span>
          <span>2,214 students already on the waitlist</span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>

        {/* Headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gray-900">Your Student ID</span>
          <br />
          <span className="gradient-text-green">Just Got Superpowers</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Nigeria's first lifelong student savings platform – from primary school
          to NYSC.{" "}
          <span className="text-green-700 font-semibold">Save smart.</span>{" "}
          <span className="text-green-700 font-semibold">Live better.</span>
        </p>

        {/* CTA Button */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={scrollToWaitlist}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl animate-pulse-glow transition-all duration-300 hover:scale-105 hover:shadow-blue-400/30 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #2563EB, #7C3AED)",
            }}
          >
            <span>🆔</span>
            <span>Reserve Your Free Savvi ID</span>
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

          <button
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-green-600 text-green-700 font-bold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <span>Learn More</span>
          </button>
        </div>

        {/* Stats row */}
        <div
          className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "2,214+", label: "Students on Waitlist" },
            { value: "2", label: "Campus Pilots Active" },
            { value: "100%", label: "Free to Join" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black gradient-text-green">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* University logos row */}
        <div
          className={`flex flex-wrap justify-center items-center gap-4 mb-8 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm text-gray-400 font-medium">
            Piloting at:
          </span>
          {["🏛️ UNILAG", "🎓 Covenant University"].map((uni) => (
            <span
              key={uni}
              className="px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 border border-gray-200 shadow-sm"
            >
              {uni}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-green-600 transition-colors group"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 group-hover:border-green-500 flex items-start justify-center pt-2 transition-colors">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-green-500 animate-bounce transition-colors" />
        </div>
      </button>
    </section>
  );
}
