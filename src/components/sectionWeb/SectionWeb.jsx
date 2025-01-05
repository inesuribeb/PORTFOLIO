import Carousel from "../carousel/Carousel";
import './SectionWeb.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function SectionWeb({ title, web, description, method, link, images, className }) {
    return (
        <section className={`web-section ${className}`}>
            <div className="first-line">
                {/* <h3># {title} <ArrowOutwardIcon></ArrowOutwardIcon> </h3> */}
                <h3>
                    <a href={web} target="_blank" rel="noopener noreferrer">
                        # {title} <ArrowOutwardIcon />
                    </a>
                </h3>
                <p>{description}</p>
                <p>{method}</p>
                <p>{link}</p>
            </div>
            <div className="second-line">
                {/* <Carousel>
                    {images.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} />
                    ))}
                </Carousel> */}
                <Carousel>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                        />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default SectionWeb;