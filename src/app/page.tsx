'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Shield, FileText, Menu, X, ChevronRight, Microscope, Pill, Heart, Facebook, Instagram, Twitter, Linkedin, CheckCircle, ArrowRight, Users, Target, Award } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    PT MEDIA INTI FARMA
                  </h1>
                  <p className="text-xs text-gray-600">Medical & Laboratory Solutions</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Produk</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Produk</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Terpercaya Sejak 2020
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Solusi Terdepan untuk
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block">
                  Laboratorium & Farmasi
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <span className="font-semibold text-blue-600">PT MEDIA INTI FARMA</span> adalah distributor terpercaya alat laboratorium, farmasi, dan kesehatan dengan kualitas terbaik dan harga kompetitif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center">
                  Lihat Katalog Produk
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Produk Tersedia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600">Pelanggan Setia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Microscope className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Alat Laboratorium</h3>
                    <p className="text-sm text-gray-600 mt-2">Peralatan lab modern dan akurat</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Pill className="w-12 h-12 text-cyan-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">Alat Farmasi</h3>
                    <p className="text-sm text-gray-600 mt-2">Peralatan farmasi terstandar</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Heart className="w-12 h-12 text-red-500 mb-4" />
                    <h3 className="font-semibold text-gray-900">Alat Kesehatan</h3>
                    <p className="text-sm text-gray-600 mt-2">Medical equipment berkualitas</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 shadow-lg text-white">
                    <Target className="w-12 h-12 mb-4" />
                    <h3 className="font-semibold">Meta Ads Integration</h3>
                    <p className="text-sm mt-2 opacity-90">Marketing solution terpadu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">PT MEDIA INTI FARMA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mitra terpercaya dalam penyediaan peralatan medis, laboratorium, dan farmasi terkemuka di Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visi & Misi Kami</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Visi</h4>
                    <p className="text-gray-600">Menjadi distributor terdepan dan terpercaya untuk alat laboratorium, farmasi, dan kesehatan di Indonesia dengan inovasi berkelanjutan.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Misi</h4>
                    <p className="text-gray-600">Menyediakan produk berkualitas tinggi dengan harga kompetitif, layanan pelanggan prima, dan solusi inovatif untuk mendukung kemajuan industri kesehatan Indonesia.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                  <Users className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="text-2xl font-bold text-gray-900">Tim Profesional</div>
                  <p className="text-sm text-gray-600 mt-1">Ahli berpengalaman di bidangnya</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                  <CheckCircle className="w-8 h-8 text-cyan-600 mb-3" />
                  <div className="text-2xl font-bold text-gray-900">Sertifikasi</div>
                  <p className="text-sm text-gray-600 mt-1">Produk tersertifikasi dan aman</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Mengapa Memilih Kami?</h4>
              <div className="space-y-4">
                {[
                  'Produk original dengan garansi resmi',
                  'Harga kompetitif dan transparan',
                  'Pengiriman cepat ke seluruh Indonesia',
                  'Layanan purna jual terjamin',
                  'Konsultasi produk gratis',
                  'Meta Ads integration untuk marketing'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kategori Produk</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai macam peralatan berkualitas untuk mendukung kegiatan profesional Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Microscope className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Alat Laboratorium</h3>
                <p className="text-gray-600 mb-6">Peralatan laboratorium modern dengan akurasi tinggi untuk penelitian dan pengujian.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                    Mikroskop digital
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                    Sentrifuge
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                    Spektrofotometer
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                    Autoklaf
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Lihat Detail Produk
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                <Pill className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Alat Farmasi</h3>
                <p className="text-gray-600 mb-6">Peralatan farmasi standar untuk produksi dan quality control obat-obatan.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-cyan-600 mr-2" />
                    Tablet press
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-cyan-600 mr-2" />
                    Capsule filler
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-cyan-600 mr-2" />
                    Coating pan
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-cyan-600 mr-2" />
                    Dissolution tester
                  </li>
                </ul>
                <button className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                  Lihat Detail Produk
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <Heart className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Alat Kesehatan</h3>
                <p className="text-gray-600 mb-6">Peralatan medis modern untuk diagnosis, monitoring, dan treatment pasien.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                    Patient monitor
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                    ECG machine
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                    Ultrasound
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                    Blood pressure monitor
                  </li>
                </ul>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Lihat Detail Produk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan medis dan laboratorium Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Meta Ads Integration',
                description: 'Solusi marketing terpadu dengan Meta Ads untuk meningkatkan visibilitas produk medis Anda',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Users,
                title: 'Konsultasi Produk',
                description: 'Tim ahli siap membantu memilih produk yang tepat sesuai kebutuhan Anda',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Shield,
                title: 'Garansi Resmi',
                description: 'Semua produk dilengkapi garansi resmi dan layanan purna jual',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Award,
                title: 'Training & Support',
                description: 'Pelatihan penggunaan peralatan dan dukungan teknikal berkelanjutan',
                color: 'from-orange-500 to-red-500'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan medis dan laboratorium
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                      <p className="text-gray-600">
                        Gedung Metro Pasar Baru Lt Dasar Timur<br />
                        Jl K.H.Samanhudi, Desa/Kelurahan Pasar Baru<br />
                        Kec. Sawah Besar, Kota Adm. Jakarta Pusat<br />
                        Provinsi DKI Jakarta
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                      <p className="text-gray-600">085285703582</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@mediaintifarma.co.id</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors cursor-pointer">
                      <Twitter className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">PT MEDIA INTI FARMA</h3>
                  <p className="text-xs text-gray-400">Medical & Laboratory Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Distributor terpercaya alat laboratorium, farmasi, dan kesehatan di Indonesia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Alat Laboratorium</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alat Farmasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alat Kesehatan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Meta Ads Solutions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Produk</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training & Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Garansi & Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing Solutions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PT MEDIA INTI FARMA. All rights reserved. | Powered by Meta Ads Integration</p>
          </div>
        </div>
      </footer>
    </div>
  );
}