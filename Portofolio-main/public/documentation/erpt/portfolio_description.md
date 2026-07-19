# Portofolio Aplikasi: eRPT-gangguan
**Sistem Monitoring Gangguan & Pemeliharaan Aset Terintegrasi**

---

## 📝 Tentang Aplikasi
**eRPT-gangguan** adalah sebuah platform web berbasis **Laravel 8** yang dirancang untuk melakukan manajemen, monitoring, dan audit terhadap data gangguan serta pemeliharaan aset jaringan (HAR/Harian) secara real-time. Aplikasi ini membantu tim operasional dan manajemen untuk mencocokkan laporan gangguan dari lapangan (data Raw FSM) dengan data penyelesaian/pemeliharaan aset (Aset-HAR) guna memastikan setiap insiden tertangani dengan benar dan terintegrasi ke dalam sistem gambar jaringan (Amarta).

### 🛠️ Teknologi & Stack Utama:
- **Backend Framework**: Laravel 8 (PHP 8.2)
- **Database**: MySQL (MariaDB)
- **Frontend Template**: Bootstrap 5, Admin Template
- **Chart & Analytics**: ApexCharts
- **Data Exchange**: PhpSpreadsheet / Laravel-Excel (Import & Export data Excel)

---

## 🌟 Penjelasan Fitur Utama

### 1. Halaman Login
Sistem autentikasi yang aman untuk mengidentifikasi pengguna operasional. Sistem login dikonfigurasi secara fleksibel agar pengguna dapat masuk menggunakan **Username** maupun **Email** yang terdaftar.
- **Tangkapan Layar**: [01_login.png](01_login.png)

### 2. Dashboard Utama (Admin Dashboard)
Pusat kendali dan informasi eksekutif yang menyajikan:
- **Metrik Utama**: Jumlah Basecamp aktif dan kapasitas total Tim Serpo di lapangan.
- **Grafik Batang Dinamis (ApexCharts)**: Visualisasi persentase penggambaran gambar jaringan (Amarta) per bulan pada tahun berjalan.
- **Status Amarta**: Persentase komparasi data bulanan (Sudah Tergambar vs Belum Tergambar).
- **Selisih Laporan per Bulan**: Tabel matriks performa bulanan untuk melacak keaktifan pelaporan setiap vendor (basecamp) sepanjang tahun.
- **Aktivitas Terbaru**: Log real-time dari tindakan terakhir yang dilakukan oleh PIC Aset.
- **Tangkapan Layar**: [02_dashboard.png](02_dashboard.png)

### 3. Manajemen Aset-HAR (Pemeliharaan Aset)
Modul untuk mencatat seluruh log pemeliharaan aset harian.
- Mendukung fitur pencarian instan berdasarkan Nomor Insiden dan filter tanggal.
- Aksi CRUD lengkap (Tambah, Edit, Hapus data).
- Integrasi impor berkas Excel langsung ke database serta ekspor laporan ke format `.xlsx`.
- **Tangkapan Layar**: [03_asethar.png](03_asethar.png)

### 4. Manajemen Data RAW (Insiden FSM)
Log insiden mentah yang diambil dari sistem *Field Service Management* (FSM).
- Berguna sebagai referensi silang (cross-reference) data insiden orisinal dari lapangan sebelum diaudit.
- Dilengkapi dengan fitur impor massal (bulk import) data incident report dari spreadsheet Excel.
- **Tangkapan Layar**: [04_rawfsm.png](04_rawfsm.png)

### 5. Monitoring Harian (MonHar)
Modul monitoring yang membagi data laporan ke dalam 4 sub-fitur spesifik:

#### A. Data FSM
Menampilkan jumlah insiden gangguan FSM yang ditutup per basecamp secara harian sesuai tanggal yang dipilih.
- **Tangkapan Layar**: [05_monhar_fsm.png](05_monhar_fsm.png)

#### B. Data Lapor Aset
Menampilkan jumlah laporan pemeliharaan aset (Aset-HAR) yang berhasil dilaporkan oleh masing-masing basecamp pada tanggal yang dipilih.
- **Tangkapan Layar**: [06_monhar_laporaset.png](06_monhar_laporaset.png)

#### C. Data Selisih Laporan
Matriks penting yang membandingkan jumlah data gangguan FSM dengan laporan Aset-HAR harian per basecamp. Fitur ini mempermudah audit untuk melihat seberapa besar gap data gangguan yang belum dilaporkan pemeliharaannya.
- **Tangkapan Layar**: [07_monhar_selisih.png](07_monhar_selisih.png)

#### D. Data Penggambaran Amarta
Melacak jumlah gambar teknis jaringan (Amarta) yang sudah diselesaikan per basecamp secara harian. Modul ini dilengkapi dengan tombol ekspor khusus untuk mengunduh rekapitulasi data penggambaran bulanan ke format berkas Excel.
- **Tangkapan Layar**: [08_monhar_penggambaran.png](08_monhar_penggambaran.png)

### 6. Manajemen Zona Serpo
Pengaturan wilayah kerja yang dikelola oleh masing-masing vendor/basecamp di lapangan.
- Menyimpan kode vendor, lokasi, regional (wilayah tugas), dan jumlah tim lapangan.
- Data ini menjadi dasar relasi database yang digunakan di seluruh modul laporan insiden dan monitoring.
- **Tangkapan Layar**: [09_zona.png](09_zona.png)

---

## 📁 Daftar Berkas Tangkapan Layar (Screenshots)
Semua aset gambar portofolio disimpan di dalam folder: `document/`
1. **Halaman Login**: `document/01_login.png`
2. **Dashboard**: `document/02_dashboard.png`
3. **Log Aset-HAR**: `document/03_asethar.png`
4. **Data RAW FSM**: `document/04_rawfsm.png`
5. **Monhar - Data FSM**: `document/05_monhar_fsm.png`
6. **Monhar - Lapor Aset**: `document/06_monhar_laporaset.png`
7. **Monhar - Selisih**: `document/07_monhar_selisih.png`
8. **Monhar - Penggambaran**: `document/08_monhar_penggambaran.png`
9. **Daftar Zona**: `document/09_zona.png`
