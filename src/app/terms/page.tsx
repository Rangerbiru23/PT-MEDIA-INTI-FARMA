'use client';

import { ArrowLeft, FileText, Shield, AlertCircle, CheckCircle, Gavel, Users, Package } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    PT MEDIA INTI FARMA
                  </h1>
                  <p className="text-xs text-gray-600">Medical & Laboratory Solutions</p>
                </div>
              </Link>
            </div>

            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Gavel className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-xl text-gray-600">
              Ketentuan penggunaan layanan PT MEDIA INTI FARMA
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di website PT MEDIA INTI FARMA. Syarat dan Ketentuan ini mengatur penggunaan website, produk, dan layanan yang kami sediakan. 
                Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                Definisi
              </h2>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>"Perusahaan"</strong> merujuk pada PT MEDIA INTI FARMA, perusahaan perdagangan eceran alat laboratorium, alat farmasi, dan alat kesehatan.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>"Website"</strong> merujuk pada platform online yang disediakan oleh Perusahaan untuk informasi produk dan layanan.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>"Pelanggan"</strong> merujuk pada individu atau entitas yang menggunakan produk dan layanan kami.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>"Produk"</strong> merujuk pada alat laboratorium, alat farmasi, dan alat kesehatan yang kami jual.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                Penggunaan Website
              </h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Yang Diperbolehkan:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Melihat dan mempelajari informasi produk</li>
                  <li>Menghubungi kami untuk konsultasi produk</li>
                  <li>Membuat permintaan penawaran harga</li>
                  <li>Menggunakan informasi untuk keperluan bisnis yang sah</li>
                </ul>
                
                <h3 className="font-semibold text-gray-900 mt-4">Yang Dilarang:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Menyalin atau mendistribusikan konten tanpa izin</li>
                  <li>Menggunakan website untuk aktivitas ilegal</li>
                  <li>Mencoba merusak atau mengganggu sistem kami</li>
                  <li>Memasukkan informasi palsu atau menyesatkan</li>
                  <li>Menggunakan bot atau automated tools tanpa izin</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Package className="w-6 h-6 text-blue-600 mr-3" />
                Produk dan Layanan
              </h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Ketersediaan Produk</h3>
                <p className="text-gray-600">
                  Kami berusaha untuk menyediakan informasi produk yang akurat, namun ketersediaan stok dapat berubah sewaktu-waktu. 
                  Harga dan spesifikasi produk dapat berubah tanpa pemberitahuan terlebih dahulu.
                </p>
                
                <h3 className="font-semibold text-gray-900">Kualitas Produk</h3>
                <p className="text-gray-600">
                  Semua produk yang kami jual adalah produk original dengan garansi resmi dari produsen. 
                  Kami tidak bertanggung jawab atas produk yang tidak digunakan sesuai petunjuk.
                </p>
                
                <h3 className="font-semibold text-gray-900">Pengiriman</h3>
                <p className="text-gray-600">
                  Pengiriman dilakukan sesuai dengan kesepakatan dan waktu yang telah ditentukan. 
                  Biaya pengiriman ditanggung oleh pembeli kecuali ada kesepakatan lain.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                Pembayaran dan Transaksi
              </h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Metode Pembayaran</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Transfer bank ke rekening resmi PT MEDIA INTI FARMA</li>
                  <li>Pembayaran tunai di kantor (untuk transaksi tertentu)</li>
                  <li>Pembayaran cicilan (syarat dan ketentuan berlaku)</li>
                </ul>
                
                <h3 className="font-semibold text-gray-900">Konfirmasi Pembayaran</h3>
                <p className="text-gray-600">
                  Pembayaran dianggap sah setelah kami menerima konfirmasi dan dana tercatat dalam rekening kami. 
                  Proses pengiriman akan dimulai setelah pembayaran dikonfirmasi.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Perhatian:</h4>
                  <p className="text-yellow-700 text-sm">
                    Pastikan melakukan pembayaran hanya ke rekening resmi atas nama PT MEDIA INTI FARMA. 
                    Kami tidak bertanggung jawab atas pembayaran ke rekening pribadi atau tidak resmi.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Garansi dan Pengembalian</h2>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Kebijakan Garansi</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Garansi berlaku sesuai dengan ketentuan produsen</li>
                  <li>Garansi tidak berlaku untuk kerusakan akibat kesalahan penggunaan</li>
                  <li>Klaim garansi harus disertai dengan bukti pembelian</li>
                </ul>
                
                <h3 className="font-semibold text-gray-900">Pengembalian Produk</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Pengembalian dapat dilakukan dalam 7 hari setelah pembelian</li>
                  <li>Produk harus dalam kondisi baik dan tidak digunakan</li>
                  <li>Biaya pengembalian ditanggung oleh pembeli</li>
                  <li>Pengembalian akan diproses dalam 3-5 hari kerja</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Meta Ads Integration</h2>
              <p className="text-gray-600 mb-4">
                Website kami mengintegrasikan layanan Meta Ads untuk tujuan pemasaran:
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Data penggunaan dapat dikumpulkan untuk personalisasi iklan</li>
                  <li>Iklan ditampilkan berdasarkan minat dan perilaku pengguna</li>
                  <li>Pengguna dapat mengelola preferensi iklan melalui pengaturan Meta</li>
                  <li>Kami tidak bertanggung jawab atas konten iklan pihak ketiga</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
              <p className="text-gray-600 mb-4">
                Semua konten di website ini, termasuk namun tidak terbatas pada teks, gambar, logo, dan desain, 
                dilindungi oleh hukum hak kekayaan intelektual. PT MEDIA INTI FARMA memiliki hak penuh atas konten tersebut.
              </p>
              <p className="text-gray-600">
                Tidak ada bagian dari website ini yang boleh direproduksi, didistribusikan, atau digunakan 
                untuk tujuan komersial tanpa izin tertulis dari PT MEDIA INTI FARMA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
              <p className="text-gray-600 mb-4">
                PT MEDIA INTI FARMA tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Kerugian langsung atau tidak langsung akibat penggunaan produk</li>
                <li>Keterlambatan pengiriman di luar kendali kami</li>
                <li>Kesalahan informasi dari pihak ketiga</li>
                <li>Gangguan teknis atau maintenance website</li>
                <li>Penyalahgunaan produk oleh pengguna</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privasi dan Keamanan</h2>
              <p className="text-gray-600">
                Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                Informasi lebih lanjut mengenai kebijakan privasi kami dapat ditemukan di halaman 
                <Link href="/privacy" className="text-blue-600 hover:underline"> Kebijakan Privasi</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-600">
                PT MEDIA INTI FARMA berhak mengubah Syarat dan Ketentuan ini kapan saja. 
                Perubahan akan berlaku efektif segera setelah dipublikasikan di website. 
                Penggunaan terus-menerus website setelah perubahan berarti Anda menerima syarat yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hukum yang Berlaku</h2>
              <p className="text-gray-600">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa akan diselesaikan melalui musyawarah terlebih dahulu, dan jika tidak mencapai kesepakatan, 
                akan diselesaikan melalui pengadilan yang berwenang di Jakarta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700">
                  <strong>PT MEDIA INTI FARMA</strong><br />
                  Gedung Metro Pasar Baru Lt Dasar Timur<br />
                  Jl K.H.Samanhudi, Pasar Baru, Sawah Besar<br />
                  Jakarta Pusat, DKI Jakarta
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@mediaintifarma.co.id<br />
                  <strong>Telepon:</strong> 085285703582
                </p>
              </div>
            </section>
          </div>

          {/* Footer Info */}
          <div className="mt-8 text-center text-gray-600">
            <p className="text-sm">
              Dengan menggunakan website ini, Anda menyatakan telah membaca, memahami, dan menyetujui Syarat dan Ketentuan yang berlaku.
            </p>
            <p className="text-sm mt-2">
              Syarat dan Ketentuan ini berlaku efektif sejak {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}