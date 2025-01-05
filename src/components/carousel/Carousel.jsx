import { useRef } from 'react';
import './Carousel.css'

function Carousel({ children }) {
    const trackRef = useRef(null);
    
    return (
        <div className="carousel">
            <div className="carousel-track" ref={trackRef}>
                {children}
                {children} 
            </div>
        </div>
    )
}

export default Carousel;



