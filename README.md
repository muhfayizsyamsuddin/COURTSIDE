# COURTSIDE

Courtside adalah aplikasi manajemen dan booking lapangan olahraga berbasis web premium yang bersifat **eksklusif (SaaS - Single Tenant)** untuk satu instansi atau kompleks olahraga besar. Aplikasi ini dirancang untuk memodernisasi seluruh ekosistem tempat olahraga, mulai dari kemudahan pelanggan dalam memesan lapangan secara mandiri hingga pengelolaan operasional dan keuangan lewat dashboard admin yang terintegrasi.

Aplikasi ini dibangun menggunakan arsitektur **Fullstack Next.js** dengan fokus pada performa tinggi, keamanan data transaksi, dan visual yang estetik (*premium UI/UX*).

---

## 🎯 Masalah & Solusi (The "Why")

- **Bagi Pelanggan:** Menghilangkan drama "slow-response WhatsApp", ketidakpastian jadwal harian, dan keharusan transfer manual yang rawan tidak tercatat. Pelanggan dapat melihat slot jam yang kosong secara *real-time* dan langsung mengunci jadwal mereka.
- **Bagi Pengelola Lapangan:** Menggantikan pencatatan manual di buku kas yang tidak akurat, mencegah terjadinya *double-booking*, otomatisasi verifikasi pembayaran, serta memberikan laporan pendapatan harian/bulanan yang akurat secara instan.

---

## 🚀 Fitur Utama

### 📱 Portal Pengguna (User/Pelanggan)
- **Landing Page Premium:** Profil tempat olahraga, fasilitas, galeri foto lapangan, lokasi peta interaktif, dan Call-to-Action (CTA) utama.
- **Sistem Booking Interaktif:** Kalender pemilihan tanggal dinamis dilengkapi dengan **Time-Slot Grid** interaktif (Kotak hijau = tersedia, merah = sudah dipesan).
- **Pop-up Pembayaran Otomatis:** Integrasi dengan **Midtrans Snap**, memungkinkan pembayaran instan via QRIS (Dana, Gopay, OVO) atau Virtual Account (BCA, Mandiri, BNI) langsung di dalam aplikasi tanpa pindah halaman.
- **Dashboard Riwayat & Tiket Digital:** Riwayat transaksi pengguna yang dilengkapi dengan **QR Code** unik sebagai tiket masuk digital saat datang ke lokasi.

### 📊 Portal Pengelola (Admin Dashboard)
- **Ringkasan Pendapatan (Statistik):** Visualisasi data finansial interaktif berbentuk grafik batang/garis menggunakan **Recharts** untuk memantau omset mingguan/bulanan.
- **Master Calendar (FullCalendar):** Kalender operasional penuh satu bulan untuk memantau seluruh jadwal penggunaan lapangan secara visual.
- **Verifikasi Sistem Hybrid:**
  - *Otomatis:* Status booking otomatis berubah menjadi `Lunas` saat user berhasil memindai QRIS berkat sistem *Webhook* Midtrans.
  - *Manual (Cash/Offline):* Tombol khusus bagi admin untuk memasukkan data pesanan pelanggan *offline* langsung di tempat agar slot jam terkunci.
- **QR Scanner System:** Fitur pemindaian QR Code bawaan via kamera untuk memvalidasi tiket masuk pelanggan di lokasi secara instan.

---

## 🛠️ Spesifikasi Teknologi (Tech Stack)

- **Core Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling & UI Components:** Tailwind CSS + Shadcn UI + Radix UI
- **Animation:** Framer Motion
- **Database:** PostgreSQL (Hosted via Supabase / Neon)
- **Database Client / ORM:** Prisma ORM
- **Authentication:** NextAuth.js / Clerk (Role-based Authorization: Admin & User)
- **Payment Gateway:** Midtrans API (Sandbox Mode)
- **Visual Charts:** Recharts

---

## 🗄️ Struktur Database (Data Modeling)

Model data yang dirancang sangat efisien karena berfokus pada satu kategori olahraga spesifik di satu lokasi tempat (*Single-Tenant Architecture*):

```prisma
// Contoh Skema Prisma ORM (Prisma Schema Preview)

model User {
  id           String    @id @default(uuid())
  nama         String
  no_whatsapp  String
  email        String    @unique
  role         Role      @default(USER)
  bookings     Booking[]
}

model Court {
  id            String    @id @default(uuid())
  nama_lapangan String // Contoh: "Lapangan 1 (Vinyl)", "Lapangan 2 (Sintetis)"
  jenis_lantai  String
  harga_per_jam Int
  foto          String
  bookings      Booking[]
}

model Booking {
  id                String        @id @default(uuid())
  user_id           String
  court_id          String
  tanggal           DateTime
  jam_mulai         Int // Format jam, misal: 19 (untuk 19.00)
  jam_selesasi      Int // Format jam, misal: 20 (untuk 20.00)
  total_harga       Int
  status            BookingStatus @default(PENDING)
  metode_pembayaran Method        @default(MIDTRANS)
  user              User          @relation(fields: [user_id], references: [id])
  court             Court         @relation(fields: [court_id], references: [id])
}

enum Role {
  USER
  ADMIN
}

enum BookingStatus {
  PENDING
  LUNAS
  BATAL
}

enum Method {
  MIDTRANS
  CASH
}

4. Struktur Database yang Disederhanakan (Hasil Koreksi)
Karena aplikasi ini fokus pada satu jenis olahraga di satu tempat, struktur tabelnya menjadi sangat efisien:

User: id, nama, no_whatsapp, email, role (User/Admin).

Court (Lapangan): id, nama_lapangan (ex: Lapangan 1, Lapangan 2), jenis_lantai, harga_per_jam, foto.

Booking: id, user_id, court_id, tanggal, jam_mulai, jam_selesai, total_harga, status (Pending/Lunas), metode_pembayaran (Midtrans/Cash).