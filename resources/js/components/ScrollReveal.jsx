import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0, duration = 800, distance = '30px' }) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                threshold: 0.05,
                rootMargin: '0px 0px -60px 0px' // triggers slightly before entering the viewport
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const style = {
        transition: `opacity ${duration}ms cubic-bezier(0.215, 0.61, 0.355, 1), transform ${duration}ms cubic-bezier(0.215, 0.61, 0.355, 1), filter ${duration}ms cubic-bezier(0.215, 0.61, 0.355, 1)`,
        transitionDelay: `${delay}ms`,
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translateY(0) scale(1)' : `translateY(${distance}) scale(0.98)`,
        filter: isIntersecting ? 'blur(0)' : 'blur(2px)'
    };

    return (
        <div ref={ref} style={style} className={className}>
            {children}
        </div>
    );
}
