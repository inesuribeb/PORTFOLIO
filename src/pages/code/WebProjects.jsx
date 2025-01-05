import { useEffect, useState } from 'react';
import SectionWeb from '../../components/sectionWeb/SectionWeb'
import './WebProjects.css'


function WebProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.web-section');
      const position = window.pageYOffset;

      setScrollPosition(position);

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const marginBottom = Math.max(80 - (scrollPosition * 0.1), 10);

  const projectsData = [
    {
      title: "SWIPE AGENCY",
      description: "SWIPE AGENCY is a fashion representation agency based in Bilbao. Its brands combine design and tradition.",
      method: "React • JavaScript • CSS3",
      link: "www.wwwmagazine.com",
      images: [
      { src: "https://i.ibb.co/2ZN5PWg/Captura-de-Pantalla-2025-01-05-a-las-14-37-55.png", alt: "descripción1" },
      { src: "https://i.ibb.co/YRML59W/IMG-6452.jpg", alt: "descripción2" },
      { src: "https://i.ibb.co/wYrqG72/Captura-de-Pantalla-2025-01-05-a-las-14-38-04.png", alt: "descripción2" },
      { src: "https://i.ibb.co/k9WJ2m4/IMG-6455.jpg", alt: "descripción2" },
      { src: "https://i.ibb.co/FYD5818/Captura-de-Pantalla-2025-01-05-a-las-14-38-13.png", alt: "descripción2" },
      // { src: "", alt: "descripción2" },
      { src: "https://i.ibb.co/HnbQfMF/Captura-de-Pantalla-2025-01-05-a-las-14-38-53.png", alt: "descripción2" },
      // { src: "", alt: "descripción2" },
      { src: "https://i.ibb.co/B6YTXBy/Captura-de-Pantalla-2025-01-05-a-las-14-39-26.png", alt: "descripción2" },
      // { src: "", alt: "descripción2" },
      { src: "https://i.ibb.co/y4PbtNS/Captura-de-Pantalla-2025-01-05-a-las-14-39-04.png", alt: "descripción2" },
      // { src: "", alt: "descripción2" },
    ]
    },
    {
      title: "MACHIMBAG",
      web: "https://machimba.inesuribe.es/home",
      description: "MACHIMBA is an online store offering unique, limited-edition bags designed and crafted by Rocío Machimbarrena.",
      method: "Node.js • MySQL • JavaScript • Pug • CSS3",
      link: "www.wwwmagazine.com",
      images: [{ src: "https://i.ibb.co/BP1v1BX/Captura-de-Pantalla-2025-01-05-a-las-10-44-45.png", alt: "descripción1" },
      { src: "https://i.ibb.co/dcWB4nJ/Captura-de-Pantalla-2025-01-05-a-las-10-45-23.png", alt: "descripción2" },
      { src: "https://i.ibb.co/vZ4W5YX/WEB-ABOUT-DIOSA.png", alt: "descripción2" },
      { src: "https://i.ibb.co/dGzsKvK/Captura-de-Pantalla-2025-01-05-a-las-10-50-18.png", alt: "descripción2" },
      { src: "https://i.ibb.co/x7yz2MH/Captura-de-Pantalla-2025-01-05-a-las-10-48-48.png", alt: "descripción2" },
      { src: "https://i.ibb.co/M9J7B6T/Captura-de-Pantalla-2025-01-05-a-las-13-20-12.png", alt: "descripción2" },
      { src: "https://i.ibb.co/MSRCwG1/Captura-de-Pantalla-2025-01-05-a-las-10-51-16.png", alt: "descripción2" },
      { src: "https://i.ibb.co/CvY7hck/Captura-de-Pantalla-2025-01-05-a-las-13-26-42.png", alt: "descripción2" },]
    },
    {
      title: "The Bike Country",
      description: "TBC is a premium tourism company specialized in cycling in the Basque Country (Euskadi).",
      method: "MySQL • React • CSS3 • JavaScript",
      link: "www.wwwmagazine.com",
      images: [{ src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción1" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },]
    },
    {
      title: "KHROMA",
      web: "https://khroma.inesuribe.es/",
      description: "Khroma is a project that allows users to explore and generate custom color schemes.",
      method: "JavaScript • API REST • CSS3",
      link: "www.wwwmagazine.com",
      images: [{ src: "https://i.ibb.co/RSYwyM7/Captura-de-Pantalla-2025-01-05-a-las-11-06-58.png", alt: "descripción1" },
        { src: "https://i.ibb.co/kmC40Ng/Captura-de-Pantalla-2025-01-05-a-las-11-04-03.png", alt: "descripción2" },
      { src: "https://i.ibb.co/B2s3VkS/Captura-de-Pantalla-2025-01-05-a-las-11-08-21.png", alt: "descripción2" },
      
      { src: "https://i.ibb.co/4tL0LJD/Captura-de-Pantalla-2025-01-05-a-las-11-14-22.png", alt: "descripción2" },
      { src: "https://i.ibb.co/0ZrjwD3/Captura-de-Pantalla-2025-01-05-a-las-11-13-29.png", alt: "descripción2" },
      { src: "https://i.ibb.co/LrXqhMw/Captura-de-Pantalla-2025-01-05-a-las-11-15-42.png", alt: "descripción2" },
      { src: "https://i.ibb.co/wKMp1W6/Captura-de-Pantalla-2025-01-05-a-las-11-14-48.png", alt: "descripción2" },]
    },
    {
      title: "BYTE BITES",
      description: "Byte Bites is a web platform designed to make exploring and discovering recipes easier.",
      method: "JavaScript • API REST • CSS3",
      link: "www.wwwmagazine.com",
      images: [{ src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción1" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },]
    },
  ];

  return (

    // <div className="web-projects">
    // <div className={`web-projects ${activeIndex > 0 ? 'scrolling' : ''}`}>
    <div className="webproject-container">
      <div className="web-projects" style={{ marginBottom: `${marginBottom}px` }}>


        {projectsData.map((project, index) => (
          <SectionWeb
            key={index}
            className={index === activeIndex ? 'active' : ''}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

export default WebProjects;