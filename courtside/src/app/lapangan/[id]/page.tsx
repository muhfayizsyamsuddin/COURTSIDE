"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Calendar, Clock, ShieldCheck, MapPin, ArrowLeft, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Data tiruan detail lapangan berdasarkan ID URL
const FIELDS_DATA: Record<string, { name: string; price: string; type: string; description: string; image: string }> = {
  "futsal-pro": {
    name: "Arena Futsal Pro (Vinyl)",
    price: "Rp 150.000",
    type: "Futsal • Indoor",
    description: "Lapangan futsal standar internasional dengan lapisan vinyl premium empuk. Meminimalisir risiko cedera lutut dan memberikan traksi terbaik untuk pergerakan lincah tim Anda.",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=800&auto=format&fit=crop"
  },
  "basketball-supreme": {
    name: "Courtside Basketball Supreme",
    price: "Rp 200.000",
    type: "Basket • Indoor",
    description: "Rasakan sensasi bermain di lapangan basket kayu mapel asli layaknya liga profesional. Dilengkapi dengan ring hidrolik kokoh dan pencahayaan lampu sorot anti-silau.",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=800&auto=format&fit=crop"
  },
  "badminton-premium-1": {
    name: "Badminton Court Premium 1",
    price: "Rp 80.000",
    type: "Badminton • Indoor",
    description: "Karpet lapangan badminton pelapis karet tebal standar PBSI. Sangat nyaman untuk pergerakan cepat dan memberikan pantulan kok yang ideal di setiap smash Anda.",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop"
  }
};

// Daftar jam tersedia untuk dipilih
const AVAILABLE_HOURS = [
  "08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00",
  "13:00 - 14:00", "14:00 - 15:00", "16:00 - 17:00", "17:00 - 18:00",
  "19:00 - 20:00", "20:00 - 21:00", "21:00 - 22:00", "22:00 - 23:00"
];

export default function FieldDetailPage() {
  const params = useParams();
  const router = useRouter();
  const fieldId = params?.id as string;
  
  // Ambil data lapangan, jika ID tidak dikenal berikan fallback data futsal
  const field = FIELDS_DATA[fieldId] || FIELDS_DATA["futsal-pro"];
  
  const [selectedHours, setSelectedHours] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("2026-06-16"); // Default tanggal hari ini (Fase statis)

  const toggleHourSelection = (hour: string) => {
    if (selectedHours.includes(hour)) {
      setSelectedHours(selectedHours.filter((h) => h !== hour));
    } else {
      setSelectedHours([...selectedHours, hour]);
    }
  };

  const handleCheckout = () => {
    if (selectedHours.length === 0) {
      alert("Silakan pilih minimal satu jam main terlebih dahulu.");
      return;
    }
    console.log("Melanjutkan ke pembayaran untuk:", { fieldName: field.name, selectedHours, selectedDate });
    // Langkah selanjutnya: Navigasi ke halaman ringkasan order / checkout
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Navigasi Kembali */}
        <button 
          onClick={() => router.push("/")}
          className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Beranda</span>
        </button>

        {/* Tata Letak Dua Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Kolom Kiri: Detail Informasi Lapangan & Galeri */}
          <div className="lg:col-span-2 space-y-6">
            {/* Slot Gambar Placeholder Premium */}
            <div className="aspect-video w-full rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
                {field.image ? (
                    <Image 
                        src={field.image} 
                        alt={field.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                ) : (
                    <>
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                        <Trophy className="h-12 w-12 text-slate-800 mb-2 relative z-10" />
                        <span className="text-xs text-slate-600 font-medium relative z-10">Gambar Ilustrasi {field.name}</span>
                    </>
                )}
            </div>

            {/* Deskripsi & Informasi */}
            <div className="rounded-2xl border border-slate-900 bg-slate-900/10 backdrop-blur-sm p-6 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                  {field.type}
                </span>
                <span className="text-sm font-bold text-slate-400">Harga: <span className="text-xl text-white font-black">{field.price}</span>/jam</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{field.name}</h1>
              <p className="text-sm text-slate-400 leading-relaxed">{field.description}</p>
              
              <div className="pt-4 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-500" />
                  <span>Kuningan, Jakarta Selatan</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>Asuransi Medis Cedera Ringan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Panel Pemilihan Jadwal & Jam Main */}
          <div className="rounded-2xl border border-slate-900 bg-slate-900/30 backdrop-blur-md p-6 shadow-xl sticky top-24 space-y-6">
            <div>
              <h3 className="text-md font-bold flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-400" />
                <span>1. Pilih Tanggal Main</span>
              </h3>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-3 w-full h-10 bg-slate-950 border border-slate-800 rounded-xl px-3 text-sm focus:border-emerald-500/50 focus:outline-none text-white font-medium" 
              />
            </div>

            <div>
              <h3 className="text-md font-bold flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-emerald-400" />
                <span>2. Pilih Slot Jam (Bisa Multi-slot)</span>
              </h3>
              
              {/* Grid Tombol Jam */}
              <div className="grid grid-cols-2 gap-2">
                {AVAILABLE_HOURS.map((hour) => {
                  const isSelected = selectedHours.includes(hour);
                  return (
                    <button
                      key={hour}
                      onClick={() => toggleHourSelection(hour)}
                      className={`h-10 rounded-xl border text-xs font-semibold cursor-pointer transition-all duration-200 ${
                        isSelected 
                          ? "bg-emerald-500 border-emerald-500 text-slate-950 shadow-md shadow-emerald-500/10" 
                          : "bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                      }`}
                    >
                      {hour}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Ringkasan Total & Tombol Aksi */}
            <div className="pt-4 border-t border-slate-900 space-y-4">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Total Durasi Pilihan:</span>
                <span className="font-bold text-white text-sm">{selectedHours.length} Jam</span>
              </div>
              
              <Button 
                onClick={handleCheckout}
                className="w-full h-11 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                Booking Slot Sekarang
              </Button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}