import Link from "next/link"; // Pembungkus navigasi Next.js
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; 
// Mengubah Link menjadi LinkIcon agar tidak bentrok nama komponennya
import { CheckCircle2, Users, MapPin, Link as LinkIcon } from "lucide-react";

// Data dummy lokal untuk panggung Frontend kita
const FIELDS = [
  {
    id: "futsal-pro", // Diubah menjadi string ramah URL (slug) agar cocok dengan halaman detail kita
    name: "Arena Futsal Pro (Vinyl)",
    type: "Futsal",
    price: 150000,
    capacity: "10-12 Orang",
    location: "Hall A",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=600&auto=format&fit=crop",
    features: ["Interlock Lantai Standard FIFA", "Tribun Penonton", "Kamar Ganti AC"],
  },
  {
    id: "basketball-supreme", // Diubah menjadi string ramah URL (slug)
    name: "Courtside Basketball Supreme",
    type: "Basket",
    price: 200000,
    capacity: "10-15 Orang",
    location: "Main Arena",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=600&auto=format&fit=crop",
    features: ["Lantai Kayu Jati AS", "Ring Hidrolik", "Papan Skor Digital"],
  },
  {
    id: "badminton-premium-1", // Diubah menjadi string ramah URL (slug)
    name: "Badminton Court Premium 1",
    type: "Badminton",
    price: 80000,
    capacity: "2-4 Orang",
    location: "Hall B",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop",
    features: ["Karpet Li-Ning Original", "Lampu Anti-Silau", "Sewa Raket Gratis"],
  },
];

export default function FieldSection() {
  return (
    <section id="lapangan" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
      
      {/* Kepala Section */}
      <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pilih Arena Terbaikmu
          </h2>
          <p className="mt-3 text-lg text-slate-400 max-w-xl">
            Semua lapangan dirawat secara berkala dengan standar fasilitas olahraga internasional.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2 justify-center">
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 cursor-pointer hover:bg-emerald-500/20">Semua</Badge>
          <Badge variant="outline" className="border-slate-800 text-slate-400 px-3 py-1 cursor-pointer hover:bg-slate-900">Futsal</Badge>
          <Badge variant="outline" className="border-slate-800 text-slate-400 px-3 py-1 cursor-pointer hover:bg-slate-900">Basket</Badge>
          <Badge variant="outline" className="border-slate-800 text-slate-400 px-3 py-1 cursor-pointer hover:bg-slate-900">Badminton</Badge>
        </div>
      </div>

      {/* Grid Kartu Lapangan */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {FIELDS.map((field) => (
          <Card key={field.id} className="overflow-hidden bg-slate-900/40 border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 group flex flex-col justify-between">
            <div>
              {/* Wadah Foto dengan Efek Zoom */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img 
                  src={field.image} 
                  alt={field.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-800">
                  {field.type}
                </span>
              </div>

              {/* Konten Detail Lapangan */}
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {field.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-4 mt-2 text-slate-400 text-xs">
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-slate-500" /> {field.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-slate-500" /> {field.location}
                  </span>
                </CardDescription>
              </CardHeader>

              <CardContent className="p-5 pt-2 pb-4">
                <div className="space-y-2">
                  {field.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>

            {/* Bagian Bawah: Harga & Tombol */}
            <CardFooter className="p-5 pt-4 bg-slate-950/40 border-t border-slate-800/60 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-emerald-400/80 font-bold uppercase tracking-wider">Harga Sewa</p>
                  <p className="text-lg font-extrabold text-white mt-0.5">
                    Rp {field.price.toLocaleString("id-ID")}<span className="text-xs text-slate-300 font-normal">/jam</span>
                  </p>
                </div>
                
                {/* Menggunakan rute navigasi yang sudah dibersihkan */}
                <Link href={`/lapangan/${field.id}`}>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs h-9 px-4 transition-all duration-200 shadow-md cursor-pointer">
                    Pilih Slot
                  </Button>
                </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}