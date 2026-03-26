import { useState, useEffect } from "react";
import { openWaitlistForm } from "@/lib/tally";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #ecfdf5 100%)",
      }}
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 animate-spin-slow"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(22,163,74,0.2), rgba(34,197,94,0.3), rgba(74,222,128,0.2), rgba(22,163,74,0.2))",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #15803d, transparent)",
            transform: "translate(-30%, 30%)",
          }}
        />
        {[
          { top: "20%", left: "8%", size: "w-3 h-3", color: "bg-yellow-400", delay: "0s" },
          { top: "60%", left: "5%", size: "w-4 h-4", color: "bg-green-400", delay: "1.2s" },
          { top: "80%", left: "15%", size: "w-2 h-2", color: "bg-emerald-500", delay: "0.6s" },
        ].map((dot, i) => (
          <div
            key={i}
            className={`absolute ${dot.size} rounded-full ${dot.color} opacity-60 animate-float`}
            style={{ top: dot.top, left: dot.left, animationDelay: dot.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12 lg:pt-24 lg:pb-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* ── LEFT COLUMN: Text Content ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Social proof badge */}
            <div
              className={`inline-flex items-center gap-2 self-start px-4 py-2 rounded-full mb-6 text-sm font-semibold text-green-800 border border-green-200 bg-white/80 backdrop-blur-sm shadow-md transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <span>🎓</span>
              <span>2,214 students already on the waitlist</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-gray-900">Your Student ID</span>
              <br />
              <span className="gradient-text-green">Just Got</span>
              <br />
              <span className="text-gray-900">Superpowers</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg font-medium transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Nigeria's first lifelong student savings platform - from primary
              school to NYSC.{" "}
              <span className="text-green-700 font-semibold">Save smart.</span>{" "}
              <span className="text-green-700 font-semibold">Live better.</span>
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-3 mb-10 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={openWaitlistForm}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-bold text-base shadow-xl animate-pulse-glow hover:scale-105 hover:shadow-blue-400/30 hover:shadow-2xl transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
              >
                <span>🆔</span>
                <span>Reserve Your Free Savvi ID</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={scrollDown}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-green-600 text-green-700 font-bold text-base hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-8 mb-8 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { value: "2,214+", label: "Students Waiting" },
                { value: "2", label: "Campus Pilots" },
                { value: "100%", label: "Free to Join" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black gradient-text-green">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Campus tags */}
            <div
              className={`flex flex-wrap items-center gap-3 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                Piloting at:
              </span>
              {["🏛️ UNILAG", "🎓 Covenant University"].map((uni) => (
                <span
                  key={uni}
                  className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 border border-gray-200 shadow-sm"
                >
                  {uni}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Image with floating overlays ── */}
          <div
            className={`relative order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Glow ring behind image */}
              <div
                className="absolute inset-0 rounded-3xl opacity-40 blur-2xl scale-95"
                style={{
                  background: "linear-gradient(135deg, #16a34a, #22c55e, #4ade80)",
                }}
              />

              {/* Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 animate-float" style={{ animationDuration: "5s" }}>
                <img
                  src="/savvi-students.png"
                  alt="Nigerian students holding phones with Savvi app"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(20,83,45,0.5), transparent)",
                  }}
                />
              </div>

              {/* Floating card: Live badge */}
              <div
                className="absolute -top-4 -left-4 sm:-left-8 glass rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2 animate-float"
                style={{ animationDelay: "0.5s", animationDuration: "4s" }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-gray-800">🎯 Pilot Live</span>
              </div>

              {/* Floating card: Savings counter */}
              <div
                className="absolute -bottom-4 -left-4 sm:-left-8 glass rounded-2xl px-4 py-3 shadow-xl animate-float"
                style={{ animationDelay: "1s", animationDuration: "4.5s" }}
              >
                <div className="text-xs text-gray-500 font-medium mb-0.5">Students Saving</div>
                <div className="text-xl font-black gradient-text-green leading-tight">2,214+</div>
                <div className="flex mt-1 -space-x-1.5">
                  {["👩🏾", "👨🏿", "👩🏽", "👨🏾"].map((e, i) => (
                    <span key={i} className="text-base leading-none">{e}</span>
                  ))}
                </div>
              </div>

              {/* Floating card: ID card sample */}
              <div
                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 glass rounded-xl px-2.5 py-2 shadow-xl w-28 animate-float"
                style={{ animationDelay: "1.8s", animationDuration: "5.5s" }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-[10px] flex-shrink-0">👤</div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-gray-800 leading-tight truncate">John A.</div>
                    <div className="text-[9px] text-gray-500 leading-tight">UNILAG · 200L</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-1.5 h-1.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-semibold text-green-600">Verified Student</span>
                </div>
                <div className="mt-2 text-[9px] font-mono text-gray-400">SVV-2024-UL-001</div>
              </div>

              {/* Floating card: Discount badge */}
              <div
                className="absolute -bottom-3 right-8 sm:right-4 glass rounded-2xl px-3 py-2 shadow-xl animate-float"
                style={{ animationDelay: "2.5s", animationDuration: "4s" }}
              >
                <div className="text-[10px] text-gray-500 font-medium">Today's Deal</div>
                <div className="font-black text-sm text-gray-900">30% OFF</div>
                <div className="text-[10px] text-green-600 font-semibold">Campus Eats 🍔</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 hover:text-green-600 transition-colors group"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 group-hover:border-green-500 flex items-start justify-center pt-1.5 transition-colors">
          <div className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-green-500 animate-bounce transition-colors" />
        </div>
      </button>
    </section>
  );
}
