import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageWrapper from './PageWrapper';
import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import News from '../pages/News';
import Gallery from '../pages/Gallery';
import Partnership from '../pages/Partnership';
import Contact from '../pages/Contact';
import Reservation from '../pages/Reservation';

export default function App() {
    const [page, setPage] = useState('home');
    const [renderedPage, setRenderedPage] = useState('home');
    const [visible, setVisible] = useState(true);

    const changePage = (newPage) => {
        if (newPage === page) return;
        setVisible(false);
        setPage(newPage);
    };

    useEffect(() => {
        if (!visible) {
            const timer = setTimeout(() => {
                setRenderedPage(page);
                setVisible(true);
                window.scrollTo({ top: 0, behavior: 'instant' });
            }, 300); // 300ms transitions
            return () => clearTimeout(timer);
        }
    }, [page, visible]);

    const renderCurrentPage = () => {
        switch (renderedPage) {
            case 'home':
                return <Home changePage={changePage} />;
            case 'about':
                return <About />;
            case 'programs':
                return <Programs changePage={changePage} />;
            case 'news':
                return <News />;
            case 'gallery':
                return <Gallery />;
            case 'partnership':
                return <Partnership />;
            case 'contact':
                return <Contact />;
            case 'reservation':
                return <Reservation />;
            default:
                return <Home changePage={changePage} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FAF6F0] text-[#261E14] font-sans selection:bg-[#C99B53] selection:text-white">
            <Navbar currentPage={page} changePage={changePage} />
            <main className="flex-grow">
                <PageWrapper visible={visible}>
                    {renderCurrentPage()}
                </PageWrapper>
            </main>
            <Footer changePage={changePage} />
        </div>
    );
}
