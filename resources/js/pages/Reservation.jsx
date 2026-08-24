import React, { useState } from 'react';
import { Calendar, Users, FileText, Check, Award, Shield } from 'lucide-react';

export default function Reservation() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        groupName: '',
        packageType: 'paket3',
        participants: '15',
        visitDate: '',
        notes: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 500);
    };

    return (
        <div className="bg-[#FAF6F0] min-h-screen">
            
            {/* HERO BANNER */}
            <section className="relative py-32 md:py-40 flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/reservation_banner.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1C150C]/95 via-[#261E14]/85 to-[#FAF6F0]" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12 space-y-6">
                    <span className="text-xs font-bold tracking-widest text-[#C99B53] uppercase block">
                        — KUNJUNGAN & RESERVASI —
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight">
                        Formulir Kunjungan
                    </h1>
                    <div className="h-[2px] w-20 bg-[#C99B53] mx-auto" />
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Silakan lengkapi detail rencana kunjungan Anda di bawah ini. Tim kami akan mengirimkan konfirmasi ketersediaan jadwal beserta invoice resmi via email.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                    
                    {/* Left details */}
                    <div className="lg:col-span-4 bg-[#261E14] text-[#FAF6F0] rounded-2xl p-8 border border-[#C99B53]/15 shadow-xl flex flex-col justify-between space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-serif font-bold text-[#C99B53] border-b border-gray-800 pb-4">
                                Penting Sebelum Memesan
                            </h3>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#C99B53]/15 text-[#C99B53] flex items-center justify-center shrink-0 text-xs font-bold">✓</div>
                                    <p className="text-xs text-gray-300 leading-relaxed">Minimal peserta untuk paket reguler adalah 10 orang.</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#C99B53]/15 text-[#C99B53] flex items-center justify-center shrink-0 text-xs font-bold">✓</div>
                                    <p className="text-xs text-gray-300 leading-relaxed">Reservasi disarankan dilakukan paling lambat H-7 tanggal kunjungan.</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#C99B53]/15 text-[#C99B53] flex items-center justify-center shrink-0 text-xs font-bold">✓</div>
                                    <p className="text-xs text-gray-300 leading-relaxed">Kebijakan pembatalan atau perubahan jadwal gratis hingga H-3 kunjungan.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#FAF6F0]/5 border border-gray-800 rounded-xl p-5 space-y-3">
                            <h4 className="font-serif text-sm font-bold text-[#C99B53]">Butuh Penyesuaian?</h4>
                            <p className="text-[11px] text-gray-400 leading-relaxed">
                                Jika Anda membawa rombongan besar (&gt; 50 orang) atau membutuhkan akomodasi makan/transportasi tambahan, tuliskan pada kolom catatan formulir.
                            </p>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:col-span-8 bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm flex flex-col justify-center">
                        {submitted ? (
                            <div className="text-center py-12 space-y-6">
                                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                                    <Check size={32} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-serif font-bold text-[#261E14]">
                                        Reservasi Diterima!
                                    </h3>
                                    <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                                        Terima kasih, <span className="font-semibold text-[#261E14]">{formData.name}</span>. Permintaan reservasi kunjungan kelompok Anda pada tanggal <span className="font-semibold text-[#261E14]">{formData.visitDate}</span> telah terdaftar di sistem kami.
                                    </p>
                                </div>
                                <div className="bg-[#FAF6F0] rounded-xl p-6 border border-[#C99B53]/15 max-w-md mx-auto text-left text-xs space-y-2">
                                    <div className="flex justify-between"><span className="text-gray-500">Paket Dipilih:</span> <span className="font-semibold text-[#261E14]">{formData.packageType === 'paket1' ? 'Paket 1: Gamelan' : formData.packageType === 'paket2' ? 'Paket 2: Tari' : formData.packageType === 'paket3' ? 'Paket 3: Gamelan & Tari' : 'Program Khusus'}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-500">Jumlah Peserta:</span> <span className="font-semibold text-[#261E14]">{formData.participants} Orang</span></div>
                                    <div className="flex justify-between"><span className="text-gray-500">Nomor Telepon:</span> <span className="font-semibold text-[#261E14]">{formData.phone}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-500">Email:</span> <span className="font-semibold text-[#261E14]">{formData.email}</span></div>
                                </div>
                                <p className="text-xs text-gray-400 max-w-sm mx-auto">
                                    Invoice penawaran beserta detail jadwal latihan lengkap sedang kami kirimkan ke email Anda. Silakan cek folder inbox atau spam Anda.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="px-6 py-2.5 bg-[#C99B53] text-[#261E14] font-bold text-xs rounded-md shadow-sm hover:bg-[#B7863F] cursor-pointer"
                                >
                                    Buat Pemesanan Baru
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Nama Pemesan / Kontak Utama
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Masukkan nama lengkap Anda"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C99B53] focus:ring-1 focus:ring-[#C99B53] outline-none text-sm transition-all duration-200"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="groupName" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Nama Rombongan / Sekolah / Perusahaan
                                        </label>
                                        <input
                                            type="text"
                                            id="groupName"
                                            name="groupName"
                                            value={formData.groupName}
                                            onChange={handleInputChange}
                                            placeholder="Contoh: SMA 1 Tabanan / PT Maju"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C99B53] focus:ring-1 focus:ring-[#C99B53] outline-none text-sm transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Alamat Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="info@contoh.com"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C99B53] focus:ring-1 focus:ring-[#C99B53] outline-none text-sm transition-all duration-200"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Nomor Telepon / WhatsApp
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Contoh: 08123456789"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C99B53] focus:ring-1 focus:ring-[#C99B53] outline-none text-sm transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div className="h-[1px] bg-gray-100 w-full" />

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="packageType" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Pilihan Paket
                                        </label>
                                        <select
                                            id="packageType"
                                            name="packageType"
                                            value={formData.packageType}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C99B53] focus:ring-1 focus:ring-[#C99B53] bg-white outline-none text-sm transition-all duration-200"
                                        >
                                            <option value="paket1">Paket 1: Gamelan Bali (Rp150k)</option>
                                            <option value="paket2">Paket 2: Tari Bali (Rp150k)</option>
                                            <option value="paket3">Paket 3: Gamelan & Tari (Rp220k)</option>
                                            <option value="custom">Kustom / Program Khusus</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="participants" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Jumlah Peserta
                                        </label>
                                        <input
                                            type="number"
                                            id="participants"
                                            name="participants"
                                            min="1"
                                            required
                                            value={formData.participants}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C99B53] focus:ring-1 focus:ring-[#C99B53] outline-none text-sm transition-all duration-200"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="visitDate" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                            Tanggal Kunjungan
                                        </label>
                                        <input
                                            type="date"
                                            id="visitDate"
                                            name="visitDate"
                                            required
                                            value={formData.visitDate}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C99B53] focus:ring-1 focus:ring-[#C99B53] outline-none text-sm transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="notes" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                        Catatan / Permintaan Khusus
                                    </label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        rows="3"
                                        value={formData.notes}
                                        onChange={handleInputChange}
                                        placeholder="Tuliskan permintaan khusus Anda di sini (opsional), seperti akomodasi makan, transportasi, dll..."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C99B53] focus:ring-1 focus:ring-[#C99B53] outline-none text-sm resize-none transition-all duration-200"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-[#C99B53] hover:bg-[#B7863F] text-[#261E14] font-bold text-xs rounded-lg shadow-sm transition-colors duration-200 cursor-pointer"
                                >
                                    KIRIM RESERVASI KUNJUNGAN
                                </button>
                            </form>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
}
