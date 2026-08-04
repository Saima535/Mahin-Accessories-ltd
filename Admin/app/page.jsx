"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, ArrowRight, Loader2, Mail } from "lucide-react";

// NOTE ON FONTS
// This design pairs "Space Grotesk" (display) with "Inter" (body/UI).
// Add these once in your ROOT app/layout.jsx using next/font, then apply
// the two className strings below to <body>. Example:
//
//   import { Space_Grotesk, Inter } from "next/font/google";
//   const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
//   const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
//   <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans`}>
//
// Until you wire that up, this file falls back gracefully to system fonts
// via the inline `style` fontFamily fallbacks below, so it will still render.

const DISPLAY_FONT =
  "var(--font-display), 'Space Grotesk', system-ui, sans-serif";
const BODY_FONT = "var(--font-body), 'Inter', system-ui, sans-serif";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [digits, setDigits] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const pinComplete = digits.every((d) => d !== "");
  const canSubmit = emailValid && pinComplete && !loading;

  const handleDigitChange = (index, value) => {
    const clean = value.replace(/[^0-9]/g, "").slice(-1);
    const next = [...digits];
    next[index] = clean;
    setDigits(next);
    if (clean && index < 5) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "");
    if (!pasted) return;
    e.preventDefault();
    const next = Array(6).fill("");
    pasted
      .slice(0, 6)
      .split("")
      .forEach((d, i) => (next[i] = d));
    setDigits(next);
    const lastIndex = Math.min(pasted.length, 6) - 1;
    inputsRef.current[lastIndex >= 0 ? lastIndex : 0]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!emailValid) {
      setError("Enter a valid email address.");
      return;
    }
    if (!pinComplete) {
      setError("Enter all 6 digits of your access code.");
      return;
    }
    setLoading(true);
    // Simulate an auth request. Replace with your real API call.
    await new Promise((resolve) => setTimeout(resolve, 700));
    localStorage.setItem("adminAuth", "true");
    localStorage.setItem("adminEmail", email);
    router.push("/admin/");
  };

  return (
    <div
      className="min-h-screen w-full flex bg-[#F7F5F2]"
      style={{ fontFamily: BODY_FONT }}
    >
      {/* LEFT — identity panel */}
      <div className="hidden lg:flex lg:w-[46%] relative overflow-hidden bg-[#0E1116]">
        {/* dotted grid backdrop */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #2A2E38 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* radar pulse signature */}
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px]">
          <span className="absolute inset-0 rounded-full border border-[#E8A33D]/20" />
          <span className="absolute inset-8 rounded-full border border-[#E8A33D]/25" />
          <span className="absolute inset-16 rounded-full border border-[#E8A33D]/30" />
          <span className="pulse-ring absolute inset-8 rounded-full border border-[#E8A33D]/40" />
          <span className="absolute inset-[172px] w-3 h-3 rounded-full bg-[#E8A33D]" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8A33D] flex items-center justify-center">
              <ShieldCheck
                className="w-5 h-5 text-[#0E1116]"
                strokeWidth={2.5}
              />
            </div>
            <span
              className="text-[#F7F5F2] text-lg tracking-tight"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              Admin Panel
            </span>
          </div>

          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#9CA3AF]">
                Systems online
              </span>
            </div>
            <h1
              className="text-[#F7F5F2] text-[2.6rem] leading-[1.08] tracking-tight mb-4"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              Command your
              <br />
              operations from
              <br />
              one console.
            </h1>
            <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
              Sign in with your email and 6-digit access code to reach the
              control panel — orders, content, and team, all in one place.
            </p>
          </div>

          <p className="text-[#5B616E] text-xs">
            © {new Date().getFullYear()} Admin Panel. Authorized personnel only.
          </p>
        </div>
      </div>

      {/* RIGHT — form panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-9 h-9 rounded-xl bg-[#0E1116] flex items-center justify-center">
              <ShieldCheck
                className="w-4 h-4 text-[#E8A33D]"
                strokeWidth={2.5}
              />
            </div>
            <span
              className="text-[#0E1116] text-base tracking-tight"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              Admin Panel
            </span>
          </div>

          <h2
            className="text-[#0E1116] text-2xl mb-1.5 tracking-tight"
            style={{ fontFamily: DISPLAY_FONT }}
          >
            Welcome back
          </h2>
          <p className="text-[#6B7280] text-sm mb-8">
            Enter your credentials to access the dashboard.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-[#374151] mb-2"
              >
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E5E3DE] bg-white text-[#0E1116] text-sm placeholder:text-[#9CA3AF] outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* 6-digit access code */}
            <div>
              <label className="block text-xs font-medium text-[#374151] mb-2">
                6-digit access code
              </label>
              <div className="flex gap-2.5" onPaste={handlePaste}>
                {digits.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => (inputsRef.current[i] = el)}
                    type="password"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleDigitChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    className="w-full aspect-square text-center rounded-xl border border-[#E5E3DE] bg-white text-[#0E1116] text-lg font-semibold outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all"
                  />
                ))}
              </div>
            </div>

            {error && (
              <p className="text-[13px] text-[#DC2626] bg-[#FEF2F2] border border-[#FECACA] rounded-lg px-3.5 py-2.5">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0E1116] text-[#F7F5F2] text-sm font-medium tracking-wide transition-all hover:bg-[#1A1D24] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  Sign in to dashboard
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-[#9CA3AF] mt-8">
            For demo purposes, any valid email + 6 digits will sign you in.
          </p>
        </div>
      </div>

      <style jsx>{`
        .pulse-ring {
          animation: pulse-ring 2.8s cubic-bezier(0.2, 0.6, 0.4, 1) infinite;
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          80% {
            transform: scale(1.4);
            opacity: 0;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
