import Carousel from "../carousel/Carousel";
import './SectionWeb.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function SectionWeb({ title, description, method, link, images, className }) {
    return (
        <section className={`web-section ${className}`}>
            <div className="first-line">
                <h3># {title} <ArrowOutwardIcon></ArrowOutwardIcon> </h3>
                <p>{description}</p>
                <p>{method}</p>
                <p>{link}</p>
            </div>
            <div className="second-line">
                <Carousel>
                    {images.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default SectionWeb;