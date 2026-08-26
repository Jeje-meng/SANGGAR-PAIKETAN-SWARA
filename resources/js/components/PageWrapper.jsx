import React from 'react';

export default function PageWrapper({ children, visible }) {
    return (
        <div
            className={`transition-opacity duration-150 ease-in-out ${
                visible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {children}
        </div>
    );
}
