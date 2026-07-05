// 1. Bersihkan impor yang salah. Kita tidak perlu mengimpor Table karena kita memakai tag <table> HTML bawaan.
import { Info } from "lucide-react";

// Data tiruan jadwal hari ini
const TIME_SLOTS = ["08:00 - 10:00", "10:00 - 12:00", "13:00 - 15:00", "16:00 - 18:00", "19:00 - 21:00", "21:00 - 23:00"];

const SCHEDULE_DATA = [
  {
    fieldName: "Arena Futsal Pro (Vinyl)",
    slots: {
      "08:00 - 10:00": { status: "Tersedia", user: "" },
      "10:00 - 12:00": { status: "Terisi", user: "FC Bro" },
      "13:00 - 15:00": { status: "Tersedia", user: "" },
      "16:00 - 18:00": { status: "Terisi", user: "Kantor AA" },
      "19:00 - 21:00": { status: "Terisi", user: "Suka Futsal" },
      "21:00 - 23:00": { status: "Tersedia", user: "" },
    },
  },
  {
    fieldName: "Courtside Basketball Supreme",
    slots: {
      "08:00 - 10:00": { status: "Tersedia", user: "" },
      "10:00 - 12:00": { status: "Tersedia", user: "" },
      "13:00 - 15:00": { status: "Terisi", user: "Ballers Club" },
      "16:00 - 18:00": { status: "Tersedia", user: "" },
      "19:00 - 21:00": { status: "Terisi", user: "Komunitas Jaksel" },
      "21:00 - 23:00": { status: "Terisi", user: "Night Owl" },
    },
  },
  {
    fieldName: "Badminton Court Premium 1",
    slots: {
      "08:00 - 10:00": { status: "Terisi", user: "Bpk. Budi" },
      "10:00 - 12:00": { status: "Terisi", user: "Ibu Susi" },
      "13:00 - 15:00": { status: "Tersedia", user: "" },
      "16:00 - 18:00": { status: "Terisi", user: "PB Santai" },
      "19:00 - 21:00": { status: "Tersedia", user: "" },
      "21:00 - 23:00": { status: "Tersedia", user: "" },
    },
  },
];

export default function SchedulePreviewSection() {
  return (
    <section id="jadwal" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-900">
      
      {/* Kepala Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Status Jadwal Hari Ini
        </h2>
        <p className="mt-4 text-base text-slate-400">
          Intip slot waktu yang masih kosong sebelum melakukan booking resmi. Jadwal di bawah ini diperbarui secara *real-time*.
        </p>
      </div>

      {/* Info Box */}
      <div className="mb-6 flex items-center gap-2 text-xs text-slate-400 bg-slate-900/40 border border-slate-800 p-3 rounded-xl max-w-fit mx-auto lg:mx-0">
        <Info className="h-4 w-4 text-emerald-400" />
        <span>Klik tombol &quot;Pilih Slot&quot; di atas untuk mengunci jadwal pada tanggal yang berbeda.</span>
      </div>

      {/* Kontainer Tabel Responsif */}
      <div className="w-full overflow-x-auto rounded-xl border border-slate-800/80 bg-slate-900/10 backdrop-blur-sm">
        {/* Menggunakan style minWidth manual untuk memastikan kompabilitas ekstensi Tailwind kamu */}
        <table className="w-full border-collapse text-sm text-left" style={{ minWidth: "800px" }}>
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 font-semibold">
              <th className="p-4 w-64">Nama Arena / Lapangan</th>
              {TIME_SLOTS.map((slot) => (
                <th key={slot} className="p-4 text-center text-xs tracking-wider">{slot}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900">
            {SCHEDULE_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                <td className="p-4 font-bold text-white border-r border-slate-900">{row.fieldName}</td>
                {TIME_SLOTS.map((slot) => {
                  const currentSlot = row.slots[slot as keyof typeof row.slots];
                  const isAvailable = currentSlot.status === "Tersedia";

                  return (
                    <td key={slot} className="p-4 text-center">
                      {isAvailable ? (
                        <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                          Kosong
                        </span>
                      ) : (
                        <div className="space-y-0.5">
                          <span className="inline-flex items-center rounded-md bg-rose-500/10 px-2 py-1 text-xs font-medium text-rose-400 border border-rose-500/20">
                            Booked
                          </span>
                          {/* Menggunakan style maxWidth untuk menghindari warning linting */}
                          <p className="text-[10px] text-slate-500 truncate mx-auto" style={{ maxWidth: "100px" }}>
                            {currentSlot.user}
                          </p>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  );
}