import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ currentPage, changePage }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { id: 'home', label: 'Beranda' },
        { id: 'about', label: 'Tentang Kami' },
        { id: 'programs', label: 'Program Edu-Wisata' },
        { id: 'gallery', label: 'Galeri' },
        { id: 'news', label: 'Berita' },
        { id: 'partnership', label: 'Kemitraan' },
        { id: 'contact', label: 'Kontak' },
    ];

    const handleNavClick = (pageId) => {
        changePage(pageId);
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#1C150C]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#C99B53]/20'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => handleNavClick('home')}
                    >
                        <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full border-2 border-[#C99B53] shadow-md transition-transform duration-300 group-hover:scale-105">
                            {/* SVG representing traditional Balinese crown / crest */}
                            <svg
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-[#C99B53]"
                                fill="currentColor"
                            >
                                <path d="M12 2L4.5 9h15zM4 11h16v2H4zm1 4h14l-1.5 5h-11z" />
                                <circle cx="12" cy="6" r="1" className="text-[#261E14]" />
                            </svg>
                        </div>
                        <div>
                            <span className="block font-serif text-lg md:text-xl font-bold tracking-wide text-[#C99B53] leading-none group-hover:text-white transition-colors duration-200">
                                SANGGAR PAIKETAN SWARA
                            </span>
                            <span className="block text-[10px] tracking-[0.2em] font-medium text-gray-300 uppercase leading-none mt-1">
                                Gamelan & Tari Bali
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`text-sm tracking-wide font-medium transition-all duration-200 relative py-1 cursor-pointer ${
                                    currentPage === item.id
                                        ? 'text-[#C99B53]'
                                        : 'text-gray-200 hover:text-[#C99B53]'
                                }`}
                            >
                                {item.label}
                                {currentPage === item.id && (
                                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C99B53] rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => handleNavClick('reservation')}
                            className="px-5 py-2.5 bg-[#C99B53] hover:bg-[#B7863F] text-[#261E14] text-sm font-semibold rounded-md shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                            Reservasi Kunjungan
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#C99B53] hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`lg:hidden fixed inset-0 top-20 z-40 bg-[#1C150C]/98 backdrop-blur-lg border-t border-[#C99B53]/20 transition-all duration-300 ${
                    isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                }`}
            >
                <div className="px-4 pt-6 pb-8 space-y-3 flex flex-col items-center">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`w-full text-center py-3.5 text-lg font-serif tracking-wide border-b border-gray-800 transition-colors duration-200 ${
                                currentPage === item.id
                                    ? 'text-[#C99B53] font-semibold'
                                    : 'text-gray-200 hover:text-[#C99B53]'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <div className="pt-6 w-full px-8">
                        <button
                            onClick={() => handleNavClick('reservation')}
                            className="w-full py-3.5 bg-[#C99B53] hover:bg-[#B7863F] text-[#261E14] text-center font-bold rounded-lg shadow-md transition-all duration-200 cursor-pointer"
                        >
                            Reservasi Kunjungan
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
