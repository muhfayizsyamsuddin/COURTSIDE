"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Lock, ArrowLeft, Trophy } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mencoba login dengan:", { email, password });
    // Logika integrasi autentikasi (Fase selanjutnya)
  };

  return (
    <div className="fixed inset-0 z-[100] w-full flex items-center justify-center bg-slate-950 px-4 py-12 text-white overflow-y-auto">
      
      {/* Efek Lampu Sorot Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

      {/* Tombol Kembali ke Beranda */}
      <Link 
        href="/" 
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-emerald-400 transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        <span>Kembali ke Beranda</span>
      </Link>

      {/* Kartu Formulir Login */}
      <div className="w-full max-w-md rounded-2xl border border-slate-900 bg-slate-900/20 backdrop-blur-xl p-8 shadow-2xl">
        
        {/* Logo & Judul */}
        <div className="text-center mb-8">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 mb-4 shadow-inner">
            <Trophy className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Selamat Datang Kembali</h2>
          <p className="mt-2 text-xs text-slate-400">
            Masuk untuk mengelola jadwal dan kunci slot lapanganmu.
          </p>
        </div>

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-400">Alamat Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                <Mail className="h-4 w-4" />
              </span>
              <input
                type="email"
                required
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-emerald-500/50 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-400">Kata Sandi</label>
              <a href="#" className="text-[11px] text-slate-500 hover:text-emerald-400 transition-colors">Lupa sandi?</a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                <Lock className="h-4 w-4" />
              </span>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-emerald-500/50 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Tombol Submit */}
          <Button 
            type="submit" 
            className="w-full h-11 mt-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/10 cursor-pointer transition-colors"
          >
            Masuk ke Akun
          </Button>
        </form>

        {/* Footer Kartu */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Belum punya akun Courtside?{" "}
          <Link href="/register" className="font-medium text-emerald-400 hover:underline">
            Daftar Sekarang
          </Link>
        </div>

      </div>
    </div>
  );
}