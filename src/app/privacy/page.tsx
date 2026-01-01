'use client';

import { ArrowLeft, Shield, Eye, Lock, Cookie, User, FileText, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600">
              PT MEDIA INTI FARMA berkomitmen melindungi privasi dan data pribadi Anda
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di PT MEDIA INTI FARMA. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda percayakan kepada kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat Anda menggunakan 
                website dan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <User className="w-6 h-6 text-blue-600 mr-3" />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi perusahaan (jika applicable)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Informasi perangkat</li>
                    <li>Cookies dan data tracking</li>
                    <li>Riwayat browsing di website kami</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Transaksional</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Riwayat pembelian</li>
                    <li>Informasi produk yang dilihat</li>
                    <li>Keranjang belanja</li>
                    <li>Preferensi produk</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                Penggunaan Informasi
              </h2>
              <p className="text-gray-600 mb-4">
                Kami menggunakan informasi yang Anda berikan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memproses dan menyelesaikan transaksi pembelian</li>
                <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                <li>Mengirimkan informasi produk dan penawaran khusus</li>
                <li>Mempersonalisasi pengalaman berbelanja Anda</li>
                <li>Meningkatkan kualitas produk dan layanan kami</li>
                <li>Melakukan analisis pasar dan riset pengembangan</li>
                <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                <li>Mencegah aktivitas penipuan dan keamanan sistem</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Cookie className="w-6 h-6 text-blue-600 mr-3" />
                Kebijakan Cookie
              </h2>
              <p className="text-gray-600 mb-4">
                Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Jenis Cookie yang Kami Gunakan:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookie Performa:</strong> Membantu kami memahami cara penggunaan website</li>
                  <li><strong>Cookie Fungsional:</strong> Mengingat preferensi Anda</li>
                  <li><strong>Cookie Targeting:</strong> Digunakan untuk Meta Ads integration dan marketing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                Keamanan Data
              </h2>
              <p className="text-gray-600 mb-4">
                PT MEDIA INTI FARMA mengimplementasikan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>Firewall dan sistem keamanan berlapis</li>
                <li>Audit keamanan berkala</li>
                <li>Komplain dengan standar industri keamanan data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Berbagi Informasi</h2>
              <p className="text-gray-600 mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Untuk memproses transaksi (mitra pembayaran, pengiriman)</li>
                <li>Untuk keperluan hukum atau perintah resmi</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau pengguna lain</li>
                <li>Dengan afiliasi perusahaan yang terikat oleh kebijakan privasi serupa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda Sebagai Pengguna</h2>
              <p className="text-gray-600 mb-4">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses dan melihat informasi pribadi yang kami simpan</li>
                <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Menarik persetujuan penggunaan data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Meta Ads Integration</h2>
              <p className="text-gray-600 mb-4">
                Website kami mengintegrasikan Meta Ads untuk tujuan pemasaran:
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Data yang dikumpulkan melalui Meta Ads digunakan untuk personalisasi iklan</li>
                  <li>Anda dapat mengelola preferensi iklan melalui pengaturan Meta</li>
                  <li>Kami mematuhi kebijakan privasi Meta dan peraturan yang berlaku</li>
                  <li>Informasi lebih lanjut tersedia di Kebijakan Privasi Meta</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-600">
                PT MEDIA INTI FARMA berhak mengubah Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website 
                atau email Anda. Penggunaan terus-menerus website kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontak Kami</h2>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan atau keluhan mengenai Kebijakan Privasi ini, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700">
                  <strong>PT MEDIA INTI FARMA</strong><br />
                  Gedung Metro Pasar Baru Lt Dasar Timur<br />
                  Jl K.H.Samanhudi, Pasar Baru, Sawah Besar<br />
                  Jakarta Pusat, DKI Jakarta
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@mediaintifarma.co.id<br />
                  <strong>Telepon:</strong> 085285703582
                </p>
              </div>
            </section>
          </div>

          {/* Footer Info */}
          <div className="mt-8 text-center text-gray-600">
            <p className="text-sm">
              Kebijakan Privasi ini berlaku efektif sejak {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}