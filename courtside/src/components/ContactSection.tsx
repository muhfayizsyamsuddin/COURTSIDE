// Menggunakan ikon dasar yang pasti didukung oleh semua versi lucide-react
import { MapPin, Phone, Mail, Clock, MessageSquare, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="kontak" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
        
        {/* Kolom Kiri: Informasi Kontak & Jam Operasional */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hubungi & Kunjungi Kami
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              Punya pertanyaan seputar reservasi lapangan, pembatalan jadwal, atau sewa korporat berskala besar? Tim resepsionis kami siap melayani kamu dengan senang hati.
            </p>
          </div>

          {/* List Detail Kontak */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-900 bg-slate-900/10">
              <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Alamat Utama Arena</p>
                <p className="text-sm text-slate-400 mt-1">Jl. Stadion Olahraga No. 45, Kuningan, Jakarta Selatan</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-900 bg-slate-900/10">
              <Clock className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white">Jam Operasional</p>
                <p className="text-sm text-slate-400 mt-1">Setiap Hari: 06.00 WIB - Midnight 24.00 WIB</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-900 bg-slate-900/10">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                <span className="text-sm text-slate-300 font-medium">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-900 bg-slate-900/10">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                <span className="text-sm text-slate-300 font-medium">halo@courtside.com</span>
              </div>
            </div>
          </div>

          {/* Sosial Media Mini - Menggunakan ikon yang aman dari error */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tautan Resmi</span>
            <hr className="w-12 border-slate-800" />
            <a href="#" className="p-2 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-colors" title="Chat WhatsApp">
              <MessageSquare className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-colors" title="Website Utama">
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Peta */}
        <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/30 group">
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center animate-pulse mb-4">
              <MapPin className="h-6 w-6 text-emerald-400" />
            </div>
            <h4 className="text-lg font-bold text-white">Google Maps Interactive</h4>
            <p className="text-xs text-slate-400 max-w-xs mt-2 leading-relaxed">
              Klik di bawah untuk membuka navigasi rute langsung via Google Maps ke lokasi Courtside Arena.
            </p>
            <Button variant="outline" className="mt-5 border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-200 hover:text-white text-xs h-9 px-4 cursor-pointer transition-colors">
                Buka Peta Navigasi
            </Button>
          </div>

          <div className="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/10 transition-colors duration-300 pointer-events-none rounded-2xl" />
        </div>

      </div>
    </section>
  );
}