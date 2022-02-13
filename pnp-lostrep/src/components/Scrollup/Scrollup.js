import React, { useState, useEffect } from 'react';

const Scrollup = () => {
    const [scrollY, setScrollY] = useState(0);
    const [buttonStatus, setButtonStatus] = useState(false);

    const handleFollow = () => {
        setScrollY(window.pageYOffset);
        if (scrollY > 100) {
            setButtonStatus(true);
        } else {
            setButtonStatus(false);
        }
    };

    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setScrollY(0);
        setButtonStatus(false);
    };

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        };
        watch();
        return () => {
            window.removeEventListener('scroll', handleFollow);
        };
    });

    return (
        <div>
            {buttonStatus ? (
                <a
                    onClick={handleTop}
                    className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 15l7-7 7 7"></path>
                    </svg>
                </a>
            ) : null}
        </div>
    );
};

export default Scrollup;
