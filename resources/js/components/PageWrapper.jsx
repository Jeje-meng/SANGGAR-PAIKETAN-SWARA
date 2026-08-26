import React from 'react';

export default function PageWrapper({ children, visible }) {
    return (
        <div
            className={`transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
                visible
                    ? 'opacity-100 translate-y-0 scale-100 blur-none'
                    : 'opacity-0 translate-y-6 scale-[0.98] blur-[2px]'
            }`}
        >
            {children}
        </div>
    );
}
