import React from 'react';

export default function PageWrapper({ children, visible }) {
    return (
        <div
            className={`transition-all duration-300 ease-in-out transform ${
                visible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-2 scale-[0.99]'
            }`}
        >
            {children}
        </div>
    );
}
