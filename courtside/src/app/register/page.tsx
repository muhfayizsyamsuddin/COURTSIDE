"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Mail, Lock, Phone, ArrowLeft, Trophy } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mencoba mendaftar dengan:", { name, email, phone, password });
    // Logika integrasi pendaftaran akun baru
  };

  return (
    // Menggunakan trik andalan kamu: fixed menutupi layar penuh dari atas Navbar global
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

      {/* Kartu Formulir Register */}
      <div className="w-full max-w-md rounded-2xl border border-slate-900 bg-slate-900/20 backdrop-blur-xl p-8 shadow-2xl my-auto">
        
        {/* Logo & Judul */}
        <div className="text-center mb-6">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 mb-4 shadow-inner">
            <Trophy className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Buat Akun Baru</h2>
          <p className="mt-2 text-xs text-slate-400">
            Gabung bersama Courtside untuk kemudahan booking instan 24 jam.
          </p>
        </div>

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nama Lengkap */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-400">Nama Lengkap</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                <User className="h-4 w-4" />
              </span>
              <input
                type="text"
                required
                placeholder="Nama depan & belakang"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-11 bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-emerald-500/50 focus:outline-none transition-colors"
              />
            </div>
          </div>

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

          {/* Nomor WhatsApp */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-400">Nomor WhatsApp</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                <Phone className="h-4 w-4" />
              </span>
              <input
                type="tel"
                required
                placeholder="081234567xxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-11 bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-emerald-500/50 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-400">Kata Sandi</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                <Lock className="h-4 w-4" />
              </span>
              <input
                type="password"
                required
                placeholder="Minimal 8 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-emerald-500/50 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Tombol Submit Register */}
          <Button 
            type="submit" 
            className="w-full h-11 mt-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/10 cursor-pointer transition-colors"
          >
            Mulai Daftar
          </Button>
        </form>

        {/* Footer Kartu */}
        <div className="mt-6 text-center text-xs text-slate-500">
          Sudah punya akun Courtside?{" "}
          <Link href="/login" className="font-medium text-emerald-400 hover:underline">
            Masuk Di Sini
          </Link>
        </div>

      </div>
    </div>
  );
}