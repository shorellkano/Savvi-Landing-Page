import { openWaitlistForm } from "@/lib/tally";

export default function WaitlistCTA() {
  return (
    <section
      id="waitlist"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #14532d 0%, #15803d 40%, #16a34a 70%, #22c55e 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 w-96 h-96 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #fbbf24, transparent)", transform: "translate(30%, 30%)" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal-on-scroll">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
            Join 2,214+ students saving smart
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Be{" "}
            <span className="text-yellow-300">Savvi?</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-green-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join 2,214+ students saving smart. Reserve your free Savvi ID today
            and unlock exclusive deals before anyone else.
          </p>

          {/* CTA Button — opens Tally form popup */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={openWaitlistForm}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-lg text-green-900 bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span>🆔</span>
              <span>Reserve Your Free Savvi ID</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Tally link fallback */}
          <p className="text-green-200 text-sm font-medium mb-10">
            🔒 No spam. Unsubscribe anytime.{" "}
            <a
              href="https://tally.so/r/wM9OoA"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              Open form in new tab ↗
            </a>
          </p>

          {/* Social proof avatars */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-3">
              {["👩🏾", "👨🏿", "👩🏽", "👨🏾", "👩🏿"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-lg backdrop-blur-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div className="text-white text-sm font-medium">
              <span className="font-bold">2,214+</span> students joined
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
