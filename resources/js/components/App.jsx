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
    const [progress, setProgress] = useState(0);
    const [progressVisible, setProgressVisible] = useState(false);

    const changePage = (newPage) => {
        if (newPage === page) return;
        
        // Start gold loading bar
        setProgressVisible(true);
        setProgress(30);
        
        setVisible(false);
        setPage(newPage);
    };

    useEffect(() => {
        if (!visible) {
            const timer = setTimeout(() => {
                setRenderedPage(page);
                setVisible(true);
                window.scrollTo({ top: 0, behavior: 'instant' });
                
                // Complete loading progress bar
                setProgress(100);
                
                const hideTimer = setTimeout(() => {
                    setProgressVisible(false);
                    setProgress(0);
                }, 300);

                // Force recalculation for IntersectionObservers
                const reflowTimer = setTimeout(() => {
                    window.dispatchEvent(new Event('scroll'));
                    window.scrollBy(0, 1);
                    window.scrollBy(0, -1);
                }, 50);

                return () => {
                    clearTimeout(hideTimer);
                    clearTimeout(reflowTimer);
                };
            }, 150); // fast 150ms fade-out transition
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
        <div className="flex flex-col min-h-screen bg-[#FAF6F0] text-[#261E14] font-sans selection:bg-[#C99B53] selection:text-white overflow-x-hidden">
            {/* Top Gold Loading Bar */}
            <div 
                className="fixed top-0 left-0 h-[3px] bg-[#C99B53] z-[9999] transition-all duration-300 ease-out shadow-[0_0_8px_#C99B53] pointer-events-none"
                style={{ 
                    width: `${progress}%`, 
                    opacity: progressVisible ? 1 : 0 
                }}
            />
            
            <Navbar currentPage={page} changePage={changePage} />
            <main className="flex-grow min-h-[75vh] overflow-x-hidden">
                <PageWrapper visible={visible}>
                    {renderCurrentPage()}
                </PageWrapper>
            </main>
            <Footer changePage={changePage} />
        </div>
    );
}
