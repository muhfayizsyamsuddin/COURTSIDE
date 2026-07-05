"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Memanggil button bawaan preset Nova
import { Trophy } from "lucide-react"; // Ikon piala bawaan preset Nova

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Kiri: Bagian Logo Aplikasi */}
        <Link href="/" className="flex items-center gap-2 font-bold text-white text-xl tracking-tight">
          <Trophy className="h-5 w-5 text-emerald-400" />
          <span>Courtside<span className="text-emerald-400">.</span></span>
        </Link>

        {/* Tengah: Menu Navigasi Teks */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="#lapangan" className="hover:text-emerald-400 transition-colors">Lapangan</Link>
          <Link href="#fasilitas" className="hover:text-emerald-400 transition-colors">Fasilitas</Link>
          <Link href="#jadwal" className="hover:text-emerald-400 transition-colors">Jadwal</Link>
          <Link href="#kontak" className="hover:text-emerald-400 transition-colors">Kontak</Link>
        </div>

        {/* Kanan: Tombol Masuk & Tombol Utama */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">
            Masuk
          </Link>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20 transition-all">
            Booking Sekarang
          </Button>
        </div>

      </div>
    </nav>
  );
}