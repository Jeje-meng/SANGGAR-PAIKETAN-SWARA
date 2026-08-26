import React from 'react';
import { Landmark, Award, ShieldAlert, Heart, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Partnership() {
    const tiers = [
        {
            title: "Sahabat Sanggar",
            desc: "Dukungan dasar untuk operasional sanggar dan penyediaan konsumsi peserta didik anak-anak lokal.",
            benefits: ["Nama tertera di plakat apresiasi tahunan", "Akses VIP ke pementasan rutin bulanan", "Newsletter perkembangan sanggar"]
        },
        {
            title: "Pelindung Budaya",
            desc: "Membantu pengadaan instrumen gamelan baru dan perbaikan berkala kostum pementasan tari.",
            benefits: ["Semua keuntungan Sahabat Sanggar", "Voucher kunjungan edu-wisata untuk 5 orang", "Sesi foto eksklusif berbusana tari Bali"],
            populer: true
        },
        {
            title: "Pilar Pelestari",
            desc: "Dukungan utama untuk beasiswa penuh anak-anak bertalenta dan riset konservasi gending kuno.",
            benefits: ["Semua keuntungan Pelindung Budaya", "Pementasan privat khusus di acara perusahaan/keluarga", "Logo perusahaan/komunitas tertera di media promosi utama"]
        }
    ];

    return (
        <div className="bg-[#FAF6F0] min-h-screen">
            
            {/* HERO BANNER */}
            <section className="relative py-32 md:py-44 flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/partnership_banner.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[#FAF6F0]" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12 space-y-6">
                    <span className="text-xs font-bold tracking-widest text-[#C99B53] uppercase block">
                        — KEMITRAAN & SPONSORSHIP
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight">
                        Dukung Pelestarian Seni
                    </h1>
                    <div className="h-[2px] w-20 bg-[#C99B53] mx-auto" />
                    <p className="text-base sm:text-lg text-gray-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                        Kami mengundang organisasi, perusahaan, yayasan, dan individu untuk berkolaborasi mendukung keberlanjutan regenerasi seni tari dan gamelan Bali.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Grid tiers */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {tiers.map((tier, idx) => (
                        <ScrollReveal
                            key={idx}
                            delay={idx * 150}
                            distance="40px"
                            className="flex"
                        >
                            <div
                                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 w-full ${
                                    tier.populer
                                        ? 'bg-[#261E14] text-[#FAF6F0] ring-4 ring-[#C99B53]/30 scale-[1.02] lg:-translate-y-2'
                                        : 'bg-white text-[#261E14] border border-gray-100 shadow-sm'
                                }`}
                            >
                                <div>
                                    <h3 className={`text-xl sm:text-2xl font-serif font-bold mb-3 ${
                                        tier.populer ? 'text-[#C99B53]' : 'text-[#261E14]'
                                    }`}>
                                        {tier.title}
                                    </h3>
                                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                                        tier.populer ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        {tier.desc}
                                    </p>
                                    <div className="h-[1px] bg-gray-200 w-full my-6 opacity-30" />
                                    <ul className="space-y-3 mb-8">
                                        {tier.benefits.map((ben, bIdx) => (
                                            <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                                                <span className="text-[#C99B53] mt-1 shrink-0">•</span>
                                                <span>{ben}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className={`w-full py-3 text-center font-bold text-xs rounded-md shadow-sm transition-all duration-200 cursor-pointer ${
                                    tier.populer
                                        ? 'bg-[#C99B53] text-[#261E14] hover:bg-[#B7863F]'
                                        : 'bg-[#261E14] text-white hover:bg-black'
                                }`}>
                                    Hubungi Kemitraan
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom Callout */}
                <ScrollReveal distance="40px">
                    <div className="bg-[#1A2F1C] text-[#FAF6F0] rounded-2xl p-8 sm:p-12 border border-[#C99B53]/20 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4">
                            <span className="text-[#C99B53] font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                                <Heart size={16} /> Kolaborasi CSR & Penelitian
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                                Bekerja Sama Membuat Dampak Sosial Nyata
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl font-sans">
                                Apakah institusi Anda memiliki fokus riset etnologi musik, program CSR pemberdayaan perempuan pelaku seni, atau kunjungan tahunan siswa? Kami dapat merancang proyek kerja sama jangka panjang yang relevan dan transparan.
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex justify-end">
                            <button className="w-full lg:w-auto px-6 py-3.5 bg-[#C99B53] hover:bg-[#B7863F] text-[#261E14] font-bold text-xs rounded-md shadow-md flex items-center justify-center gap-2 transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer">
                                Ajukan Proposal <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </div>
    );
}
