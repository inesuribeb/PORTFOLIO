import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import React, { useState, useEffect } from 'react';
import Contact from './pages/contact/Contact';
import './Root.css'

function Root() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isUserScrolling, setIsUserScrolling] = useState(false);

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
        setIsContactOpen(!isContactOpen);

        if (!isContactOpen) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };



    return (
        <div className="root-container">
            <Contact
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
            <div className={`main-content ${isContactOpen ? 'shifted' : ''}`}>
                <Header onContactClick={handleContactClick} />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>

    );
}

export default Root;

