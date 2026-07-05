import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Star } from "lucide-react";
import FieldSection from "@/components/FieldSection"; // Impor komponen baru kita
import FacilitySection from "@/components/FacilitySection";
import ContactSection from "@/components/ContactSection";
import SchedulePreviewSection from "@/components/SchedulePreviewSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      {/* Efek Lampu Sorot */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_50%)]" />

      {/* --- HERO SECTION --- */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center md:pt-40">
        <div className="mx-auto mb-6 flex max-w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md">
          <Star className="h-3.5 w-3.5 fill-emerald-400" />
          <span>Sistem Booking Lapangan Tercepat v2.0</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-white">Sewa Lapangan Olahraga</span>
          <span className="mt-2 block bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-500 bg-clip-text text-transparent">
            Tanpa Ribet & Instan
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg md:text-xl leading-relaxed">
          Sistem booking lapangan olahraga eksklusif dengan konfirmasi instan, jadwal *real-time*, dan pembayaran otomatis. Pilih jadwalmu, kunci slotmu sekarang.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 h-12 shadow-xl shadow-emerald-500/20 transition-all gap-2 group cursor-pointer">
            <span>Mulai Booking</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-200 hover:text-white px-8 h-12 gap-2 cursor-pointer transition-colors">
            <Calendar className="h-4 w-4 text-slate-400" />
            <span>Lihat Jadwal</span>
          </Button>
        </div>

        {/* Statistik */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-slate-900 pt-10 sm:grid-cols-3 md:gap-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-white md:text-4xl">15+</p>
            <p className="mt-1 text-sm text-slate-500 font-medium">Pilihan Lapangan</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white md:text-4xl">10k+</p>
            <p className="mt-1 text-sm text-slate-500 font-medium">Total Booking</p>
          </div>
          <div className="text-center col-span-2 sm:col-span-1">
            <p className="text-3xl font-bold text-white md:text-4xl">4.9/5</p>
            <p className="mt-1 text-sm text-slate-500 font-medium">Rating Kepuasan</p>
          </div>
        </div>
      </main>

      {/* --- SEKSI DAFTAR LAPANGAN --- */}
      <FieldSection />

      {/* --- SEKSI FASILITAS --- */}
      {/* 2. Sisipkan di sini */}
      <FacilitySection />

      <SchedulePreviewSection />
      
      {/* --- SEKSI KONTAK & LOKASI --- */}
      {/* 2. Disisipkan paling bawah */}
      <ContactSection />
    </div>
  );
}