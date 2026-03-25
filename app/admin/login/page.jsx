"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(true);
    } else {
      router.refresh();
      router.push("/admin/dashboard");
    }
  };

  return (
    <main className="w-full h-screen bg-[#050505] flex items-center justify-center px-4">
      <div className="relative bg-[#0e0e0e] border border-[rgba(201,168,76,0.2)] p-[56px_48px] w-full max-w-[420px] flex flex-col items-center">
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-[15px] h-[15px] border-t border-l border-gold m-[10px]" />
        <div className="absolute top-0 right-0 w-[15px] h-[15px] border-t border-r border-gold m-[10px]" />
        <div className="absolute bottom-0 left-0 w-[15px] h-[15px] border-b border-l border-gold m-[10px]" />
        <div className="absolute bottom-0 right-0 w-[15px] h-[15px] border-b border-r border-gold m-[10px]" />

        {/* Logo */}
        <div className="flex flex-col items-center">
          <span className="font-display text-[24px] text-off-white tracking-wider leading-none">VISTAAR</span>
          <span className="font-body text-[8px] text-gold tracking-[4px] leading-none mt-1">STUDIOS</span>
        </div>

        {/* Separator */}
        <div className="w-[6px] h-[6px] rotate-45 bg-gold my-6 opacity-80" />

        <h1 className="font-display text-[28px] text-off-white mb-2 text-center">Admin Access</h1>
        <p className="font-body text-[10px] text-off-white-dim text-center mb-6">Vistaar Studios internal dashboard</p>

        <div className="w-full h-[1px] bg-gold opacity-30 mb-[24px]" />

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#111] border border-[rgba(201,168,76,0.15)] text-off-white p-[14px_18px] rounded-none font-body text-[12px] focus:outline-none focus:border-[rgba(201,168,76,0.6)] transition-all duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#111] border border-[rgba(201,168,76,0.15)] text-off-white p-[14px_18px] rounded-none font-body text-[12px] focus:outline-none focus:border-[rgba(201,168,76,0.6)] transition-all duration-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-gold text-black-deep mt-[8px] p-[16px] font-body text-[9px] tracking-[3px] uppercase rounded-none hover:bg-off-white transition-colors duration-300"
          >
            Access Dashboard
          </button>
        </form>

        {error && (
          <p className="font-body text-[10px] text-[rgba(255,100,100,0.8)] mt-4">
            Invalid credentials. Please try again.
          </p>
        )}
      </div>
    </main>
  );
}