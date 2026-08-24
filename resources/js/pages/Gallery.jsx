import React, { useState } from 'react';
import { Eye, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'Semua' },
        { id: 'gamelan', label: 'Gamelan' },
        { id: 'tari', label: 'Tari Bali' },
        { id: 'upacara', label: 'Upacara & Sosial' },
    ];

    const items = [
        { image: "https://images.unsplash.com/photo-1513829096963-8a30ef68ad66?q=80&w=800&auto=format&fit=crop", category: "gamelan", title: "Latihan Bersama Gamelan", desc: "Masyarakat Desa Bantas berlatih tabuh bersama di Wantilan Sanggar." },
        { image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop", category: "tari", title: "Pementasan Tari Anak-anak", desc: "Generasi muda melestarikan Tari Legong di panggung pementasan." },
        { image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop", category: "upacara", title: "Upacara Piodalan Sanggar", desc: "Piodalan dan sembahyang bersama memohon kelancaran pelestarian seni." },
        { image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop", category: "gamelan", title: "Praktik Teknik Gamelan", desc: "Para wisatawan asing antusias mempelajari ketukan instrumen Gangsa." },
        { image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop", category: "tari", title: "Tari Condong Bali", desc: "Detail ekspresi penari Condong yang penuh dinamika dan taksu." },
        { image: "https://images.unsplash.com/photo-1518548419070-2c61b169c79d?q=80&w=800&auto=format&fit=crop", category: "upacara", title: "Pameran Kerajinan Tradisional", desc: "Eksibisi ukiran kayu tradisional untuk instrumen musik di sanggar." },
    ];

    const filteredItems = filter === 'all' 
        ? items 
        : items.filter(item => item.category === filter);

    return (
        <div className="bg-[#FAF6F0] min-h-screen">
            
            {/* HERO BANNER */}
            <section className="relative py-32 md:py-40 flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/gallery_banner.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1C150C]/95 via-[#261E14]/85 to-[#FAF6F0]" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12 space-y-6">
                    <span className="text-xs font-bold tracking-widest text-[#C99B53] uppercase block">
                        — DOKUMENTASI KEGIATAN
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight">
                        Galeri Sanggar
                    </h1>
                    <div className="h-[2px] w-20 bg-[#C99B53] mx-auto" />
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Mengabadikan momen pembelajaran, pementasan, dan kebersamaan pelestarian budaya di Sanggar Paiketan Swara.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                                filter === cat.id
                                    ? 'bg-[#C99B53] text-[#261E14] shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group relative cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-75"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white">
                                        <Eye size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-[9px] tracking-widest font-bold text-[#C99B53] uppercase mb-2 block">
                                    {item.category}
                                </span>
                                <h3 className="text-lg font-serif font-bold text-[#261E14] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
