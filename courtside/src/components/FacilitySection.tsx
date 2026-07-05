import { Wifi, ShieldCheck, ShowerHead, Coffee, ParkingCircle, Car } from "lucide-react";

const FACILITIES = [
  {
    icon: <ShowerHead className="h-6 w-6 text-emerald-400" />,
    title: "Kamar Bilas & Ganti AC",
    description: "Fasilitas kamar mandi bersih dengan pilihan air panas/dingin serta ruang ganti yang sejuk.",
  },
  {
    icon: <ParkingCircle className="h-6 w-6 text-emerald-400" />,
    title: "Parkir Luas & Aman",
    description: "Area parkir kendaraan roda dua dan roda empat yang luas dengan penjagaan keamanan 24 jam.",
  },
  {
    icon: <Wifi className="h-6 w-6 text-emerald-400" />,
    title: "Koneksi Wi-Fi Gratis",
    description: "Tetap terhubung dengan internet berkecepatan tinggi di seluruh area tribun dan ruang tunggu.",
  },
  {
    icon: <Coffee className="h-6 w-6 text-emerald-400" />,
    title: "Kantin & Lounge",
    description: "Menyediakan berbagai pilihan minuman isotonik, makanan ringan, dan tempat bersantai setelah berolahraga.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Peralatan Medis & P3K",
    description: "Antisipasi cedera ringan dengan kesediaan kotak P3K, es batu, dan staf yang siap siaga membantu.",
  },
  {
    icon: <Car className="h-6 w-6 text-emerald-400" />,
    title: "Sewa Rompi & Bola",
    description: "Tidak perlu repot membawa perlengkapan, kami menyediakan sewa rompi tim dan bola gratis kualitas standar.",
  },
];

export default function FacilitySection() {
  return (
    <section id="fasilitas" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
      
      {/* Kepala Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Fasilitas Pendukung Premium
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Kenyamanan kamu sebelum dan sesudah bertanding adalah prioritas kami. Nikmati seluruh fasilitas eksklusif tanpa biaya tambahan.
        </p>
      </div>

      {/* Grid Fasilitas */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {FACILITIES.map((facility, index) => (
          <div 
            key={index} 
            className="relative flex flex-col p-6 rounded-2xl border border-slate-900 bg-slate-900/20 hover:border-emerald-500/10 hover:bg-slate-900/40 transition-all duration-300 group"
          >
            {/* Lingkaran Ikon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-emerald-500/30 transition-colors shadow-inner">
              {facility.icon}
            </div>
            
            {/* Teks */}
            <h3 className="mt-4 text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
              {facility.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              {facility.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}