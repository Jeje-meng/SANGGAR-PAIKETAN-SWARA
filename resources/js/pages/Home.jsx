import React from 'react';
import { Music, Accessibility, Sparkles, GraduationCap, MessageCircle, Globe, Star, Heart, Users, Compass, ChevronRight, Calendar } from 'lucide-react';

export default function Home({ changePage }) {
    const programs = [
        {
            image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop",
            icon: <Music className="w-5 h-5 text-[#261E14]" />,
            title: "Belajar Gamelan Bali",
            desc: "Kenali berbagai instrumen gamelan, cara memainkannya, serta peran setiap instrumen dalam menciptakan sebuah komposisi yang harmonis."
        },
        {
            image: "https://images.unsplash.com/photo-1518548419070-2c61b169c79d?q=80&w=600&auto=format&fit=crop",
            icon: <Accessibility className="w-5 h-5 text-[#261E14]" />,
            title: "Belajar Tari Bali",
            desc: "Pelajari gerak-gerak dasar, ekspresi, postur dan kelenturan yang menjadi ciri khas tari Bali dari para penari terlatih dan berpengalaman."
        },
        {
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop",
            icon: <Sparkles className="w-5 h-5 text-[#261E14]" />,
            title: "Pertunjukan Seni",
            desc: "Saksikan kolaborasi pertunjukan gamelan dan tari yang dibawakan oleh para seniman berbakat dari Sanggar Paiketan Swara."
        },
        {
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
            icon: <GraduationCap className="w-5 h-5 text-[#261E14]" />,
            title: "Kunjungan Edukasi",
            desc: "Program khusus untuk sekolah, universitas, komunitas, atau kelompok wisatawan yang ingin mendalami budaya Bali secara komprehensif."
        }
    ];

    const packages = [
        {
            num: "1",
            image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
            title: "Pengalaman Gamelan Bali",
            desc: "Sesi 2 jam interaktif mengenal dan memainkan alat musik gamelan dasar. Cocok untuk semua rentang usia.",
            price: "Rp150.000",
            features: ["Pengenalan Instrumen", "Latihan tabuh dasar", "Snack tradisional"]
        },
        {
            num: "2",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
            title: "Pengalaman Tari Bali",
            desc: "Sesi 2 jam mempelajari keanggunan dan dinamika gerak tari Bali, lengkap dengan pengenalan busana.",
            price: "Rp150.000",
            features: ["Pemanasan & Agem dasar", "Latihan koreografi pendek", "Sesi foto berbusana"]
        },
        {
            num: "3",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
            title: "Gamelan dan Tari Bali",
            desc: "Pengalaman komprehensif setengah hari yang seru, diakhiri dengan pertunjukan mini bersama.",
            price: "Rp220.000",
            features: ["Seni Gamelan Interaktif", "Seni Tari Interaktif", "Makan siang megibung"],
            populer: true
        }
    ];

    const features = [
        {
            icon: <MessageCircle className="w-6 h-6 text-[#C99B53]" />,
            title: "Berinteraksi",
            desc: "Dapatkan wawasan langsung dari para pelatih dan ahli gending menceritakan nilai seni luhur."
        },
        {
            icon: <Globe className="w-6 h-6 text-[#C99B53]" />,
            title: "Mendapatkan pengalaman budaya asli",
            desc: "Dapatkan wawasan langsung pada materialisme arsitektur radikal, tarian, dan upacara keagamaan."
        },
        {
            icon: <GraduationCap className="w-6 h-6 text-[#C99B53]" />,
            title: "Mempelajari dasar tari Bali",
            desc: "Kenalilah dasar, pementasan, mengerti akselerasi musikal. Belajar dari seniman tari dan dalang."
        },
        {
            icon: <Heart className="w-6 h-6 text-[#C99B53]" />,
            title: "Mendukung",
            desc: "Mendukung pelestarian langsung pementasan tradisional dan generasi di Desa Bantas."
        },
        {
            icon: <Users className="w-6 h-6 text-[#C99B53]" />,
            title: "Berkontribusi",
            desc: "Berkontribusi menjaga kesejahteraan pertahanan seni tingkat bawah seniman masyarakat."
        },
        {
            icon: <Compass className="w-6 h-6 text-[#C99B53]" />,
            title: "Menikmati",
            desc: "Jauh dari keramaian kotor dan kedamaian alam pedesaan yang sejuk."
        }
    ];

    return (
        <div className="bg-[#FAF6F0]">
            
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center pt-24 pb-28 md:pb-36 lg:pb-44 overflow-hidden">
                {/* Background image overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/image.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1C150C]/90 via-[#261E14]/80 to-[#261E14]/40" />
 
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-8">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FAF6F0] font-bold leading-[1.1] mb-6">
                        Mengenal <span className="font-serif italic font-normal text-[#C99B53]">Budaya Bali</span> <br />
                        melalui <span className="font-serif italic font-normal text-[#C99B53]">Gamelan</span> dan <span className="font-serif italic font-normal text-[#C99B53]">Tari</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed mb-4">
                        Selamat datang di <span className="text-[#C99B53] font-semibold">Sanggar Paiketan Swara</span>, ruang pelestarian seni, pembelajaran budaya, dan kebersamaan masyarakat di <span className="text-white underline decoration-[#C99B53]">Desa Bantas, Tabanan, Bali</span>.
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed mb-10">
                        Kami mengajak pelajar, wisatawan, komunitas, dan pencinta budaya untuk mengenal gamelan dan tari Bali secara langsung bersama para pelaku seni lokal.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => changePage('programs')}
                            className="w-full sm:w-auto px-8 py-4 bg-[#C99B53] hover:bg-[#B7863F] text-[#261E14] font-bold rounded-md shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                        >
                            <Compass size={18} />
                            JELAJAHI PROGRAM
                        </button>
                        <button
                            onClick={() => changePage('reservation')}
                            className="w-full sm:w-auto px-8 py-4 border border-[#C99B53] text-[#C99B53] hover:bg-[#C99B53]/15 font-bold rounded-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                        >
                            <Calendar size={18} />
                            RESERVASI KUNJUNGAN
                        </button>
                    </div>
                </div>

                {/* SVG Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
                    <svg 
                        viewBox="0 0 1200 120" 
                        preserveAspectRatio="none" 
                        className="relative block w-full h-[60px] md:h-[100px] text-[#FAF6F0]"
                        fill="currentColor"
                    >
                        <path d="M0,10 C150,110 350,110 600,40 C850,110 1050,110 1200,10 L1200,120 L0,120 Z"></path>
                    </svg>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-24 bg-[#FAF6F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <span className="text-xs font-bold tracking-widest text-[#C99B53] uppercase block">
                                — TENTANG KAMI
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#261E14] font-bold leading-tight">
                                Belajar, Berinteraksi, dan Berkarya Bersama
                            </h2>
                            <div className="h-[2px] w-20 bg-[#C99B53]" />
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                                Sanggar Paiketan Swara bukan sekadar tempat berlatih, melainkan wadah komunitas di mana nilai-nilai luhur Bali dihidupkan kembali. Melalui program edu-wisata kami, pengunjung diajak untuk tidak hanya menonton, tetapi juga terlibat langsung, menyentuh instrumen, dan merasakan ritme pernapasan tarian Bali.
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                                Kami merancang pengalaman partisipatif yang otentik, menghubungkan kearifan lokal dengan rasa ingin tahu wisatawan global maupun pelajar lokal.
                            </p>
                            <div>
                                <button
                                    onClick={() => changePage('about')}
                                    className="inline-flex items-center gap-1.5 text-[#C99B53] hover:underline hover:text-[#B7863F] font-bold text-sm transition-colors duration-200 mt-4 group cursor-pointer"
                                >
                                    Ketahui Lebih Lanjut
                                    <span>➔</span>
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#C99B53]/10 transform hover:scale-[1.01] transition-transform duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop"
                                    alt="Belajar Gamelan"
                                    className="w-full h-auto object-cover aspect-[4/3]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROGRAMS SECTION */}
            <section className="py-24 bg-white border-t border-b border-[#C99B53]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-bold tracking-widest text-[#C99B53] uppercase block mb-3">
                        — PROGRAM KAMI —
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-[#261E14] font-bold mb-4">
                        Pengalaman yang Kami Tawarkan
                    </h2>
                    <div className="h-[2px] w-20 bg-[#C99B53] mx-auto mb-16" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {programs.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#C99B53]/30 flex flex-col group"
                            >
                                <div className="relative h-44 w-full overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/10" />
                                    {/* Overlapping circular icon badge */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#C99B53] flex items-center justify-center border-2 border-white shadow-md z-10 transition-transform duration-300 group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="pt-8 pb-6 px-6 flex-grow flex flex-col justify-between">
                                    <div className="text-center">
                                        <h3 className="text-base font-serif font-bold text-[#261E14] mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed font-sans">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PACKAGES SECTION */}
            <section className="py-24 bg-[#1C150C] text-[#FAF6F0] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-black/20 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold tracking-widest text-[#C99B53] uppercase block mb-3">
                            — PILIHAN PAKET —
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-serif text-white font-bold">
                            Paket Edu-Wisata Seni Budaya
                        </h2>
                        <div className="h-[2px] w-24 bg-[#C99B53] mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        {packages.map((item, idx) => (
                            <div
                                key={idx}
                                className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                                    item.populer
                                        ? 'bg-[#F5D5AE] text-[#261E14] shadow-xl scale-[1.02] lg:-translate-y-2'
                                        : 'bg-white text-[#261E14] border border-gray-100 shadow-sm'
                                }`}
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/15" />
                                    
                                    {/* Number Badge */}
                                    <span className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#C99B53] text-[#261E14] font-bold text-sm flex items-center justify-center shadow-md">
                                        {item.num}
                                    </span>

                                    {/* Populer Tag */}
                                    {item.populer && (
                                        <span className="absolute top-4 right-4 bg-[#261E14] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                                            POPULER
                                        </span>
                                    )}
                                </div>

                                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                                    <div>
                                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#C99B53] block mb-1">
                                            PAKET {item.num}
                                        </span>
                                        <h3 className="text-xl font-serif font-bold text-[#261E14] mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 leading-relaxed font-sans mb-6">
                                            {item.desc}
                                        </p>

                                        <div className="h-[1px] w-full bg-gray-100 my-4" />

                                        {/* Features with checkmarks */}
                                        <ul className="space-y-3.5 mb-8">
                                            {item.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-3 text-xs text-gray-700">
                                                    <svg className="w-4 h-4 text-[#C99B53] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Price and Button */}
                                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                                                Per Peserta
                                            </span>
                                            <span className="text-xl sm:text-2xl font-serif font-bold text-[#261E14]">
                                                {item.price}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => changePage('reservation')}
                                            className="px-5 py-2.5 bg-[#261E14] hover:bg-black text-white text-[10px] uppercase font-bold tracking-wider rounded-full shadow-md transition-colors duration-200 cursor-pointer"
                                        >
                                            Pilih Paket
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="py-24 bg-[#FAF6F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-serif text-[#261E14] font-bold">
                            Mengapa Berkunjung ke Sanggar Paiketan Swara?
                        </h2>
                        <div className="h-[2px] w-20 bg-[#C99B53] mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feat, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200"
                            >
                                <div className="w-12 h-12 bg-[#FAF6F0] rounded-xl flex items-center justify-center mb-5 border border-[#C99B53]/15">
                                    {feat.icon}
                                </div>
                                <h3 className="text-lg font-serif font-bold text-[#261E14] mb-3">
                                    {feat.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA BANNER */}
            <section className="relative py-28 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1573790387438-4da9050393c2?q=80&w=1600&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-[#261E14]/90" />
                
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
                    <h2 className="text-3xl sm:text-5xl font-serif text-[#FAF6F0] font-bold">
                        Mari Mengenal Budaya Bali Lebih Dekat
                    </h2>
                    <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
                        Kami siap menyambut kedatangan Anda. Rencanakan kunjungan kelompok, pementasan khusus, atau kolaborasi edukasi bersama kami.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <button
                            onClick={() => changePage('reservation')}
                            className="w-full sm:w-auto px-8 py-3.5 bg-[#C99B53] hover:bg-[#B7863F] text-[#261E14] font-bold rounded-md shadow-lg transition-all duration-200 cursor-pointer"
                        >
                            RESERVASI SEKARANG
                        </button>
                        <button
                            onClick={() => changePage('contact')}
                            className="w-full sm:w-auto px-8 py-3.5 border border-[#C99B53] text-[#C99B53] hover:bg-[#C99B53]/10 font-bold rounded-md transition-all duration-200 cursor-pointer"
                        >
                            HUBUNGI KAMI
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
