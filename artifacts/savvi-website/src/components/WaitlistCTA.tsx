import { useState } from "react";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email.trim()) {
      setErrorMsg("Please enter your email address.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
  };

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

          {/* Form */}
          {status === "success" ? (
            <div className="animate-bounce-in">
              <div className="inline-flex flex-col items-center gap-4 bg-white rounded-3xl p-8 shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
                  🎉
                </div>
                <h3 className="text-2xl font-black text-gray-900">
                  You're on the list!
                </h3>
                <p className="text-gray-600 max-w-xs text-center">
                  Welcome to the Savvi community. We'll email you as soon as
                  your Savvi ID is ready.
                </p>
                <div className="flex gap-2 flex-wrap justify-center">
                  {["🎓 UNILAG", "🏛️ Covenant Uni"].map((uni) => (
                    <span
                      key={uni}
                      className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                    >
                      {uni}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorMsg("");
                    }}
                    placeholder="Enter your email address"
                    className="w-full px-5 py-4 rounded-full text-gray-900 bg-white border-2 border-transparent focus:outline-none focus:border-yellow-300 placeholder-gray-400 text-sm font-medium shadow-lg transition-all"
                    disabled={status === "loading"}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-4 rounded-full font-bold text-sm text-green-900 bg-yellow-400 hover:bg-yellow-300 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-xl whitespace-nowrap shadow-lg flex items-center gap-2 justify-center"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <svg
                        className="w-4 h-4"
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
                    </>
                  )}
                </button>
              </div>

              {/* Error message */}
              {errorMsg && (
                <p className="text-yellow-200 text-sm text-center mb-2 font-medium">
                  ⚠️ {errorMsg}
                </p>
              )}

              {/* Privacy note */}
              <p className="text-green-200 text-sm font-medium">
                🔒 No spam. Unsubscribe anytime. Your data is safe with us.
              </p>
            </form>
          )}

          {/* Social proof avatars */}
          <div className="mt-10 flex items-center justify-center gap-3">
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
