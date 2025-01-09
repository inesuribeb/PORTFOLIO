import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import React, { useState, useEffect } from 'react';
import Contact from './pages/contact/Contact';
import './Root.css'

function Root() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [headerClosing, setHeaderClosing] = useState(false);
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (isContactOpen) {
            let scrollTimeout;

            const handleScroll = () => {
                clearTimeout(scrollTimeout);
                setIsUserScrolling(true);

                scrollTimeout = setTimeout(() => {
                    setIsUserScrolling(false);
                    if (window.scrollY > 0) {
                        setIsContactOpen(false);
                    }
                }, 150);
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
                clearTimeout(scrollTimeout);
            };
        }
    }, [isContactOpen]);

    const handleContactClick = () => {
        if (isContactOpen) {
            setHeaderClosing(true);
            setTimeout(() => {
                setHeaderClosing(false);
                setIsContactOpen(false);
            }, 600);
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            setIsContactOpen(true);
        }
    };

    return (
        <div className="root-container">
            <Contact
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                headerClosing={headerClosing}
            />
            <div className={`main-content ${isContactOpen ? 'shifted' : ''}`}>
                <Header onContactClick={handleContactClick} />
                <main className='outlet-desktop' key={location.pathname}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Root;

