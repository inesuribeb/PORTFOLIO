import React, { useState, useEffect} from 'react';

import './Contact.css'

function Contact({ isOpen, onClose }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={`contact-page ${isOpen ? 'open' : ''}`}>
            {/* <h1>contact</h1> */}
            <div className='first-column-contact'>
                <div className='first-line-contact'>
                    <h5>Bilbao, Basque Country<br />
                        {time.toLocaleTimeString('es-ES', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false
                        })}
                    </h5>
                </div>
                <div className='second-line-contact'>
                    <h5>Services</h5>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>

            <div className='second-column-contact'>
                <div className='first-line-contact'>
                    <h5>Welcome!</h5>
                </div>
                <div className='second-line-contact'>
                    <h5>Links</h5>
                    <ul>
                        <li>Github</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>Behance</li>
                    </ul>
                </div>
            </div>

            <div className='third-column-contact'>
                <div className='first-line-contact'>
                    <h5>inesuribeb@gmail.com</h5>
                </div>
                <div className='second-line-contact'>
                    <p>As a designer with a strong background in visual communication, I am currently expanding my skill set as a full-stack web developer. With a passion for merging creativity with technology, I aim to create digital experiences that are both aesthetically pleasing and functionally effective. I focus on designing user-centric solutions that balance innovation, design principles, and technical expertise. My approach is rooted in understanding the needs of the user while delivering intuitive, engaging, and visually compelling interfaces. Whether in design or development, I strive to bring a harmonious blend of creativity and precision to every project.</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;