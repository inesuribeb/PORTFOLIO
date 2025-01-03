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
      images: [{ src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción1" },
      // { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/F886/BB3A/522C/CB5B/0A28/100A/2578/blue_rectangle.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },

      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },]
    },
    {
      title: "MACHIMBAG",
      description: "MACHIMBA is an online store offering unique, limited-edition bags designed and crafted by Rocío Machimbarrena.",
      method: "Node.js • MySQL • JavaScript • Pug • CSS3",
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
      description: "Khroma is a project that allows users to explore and generate custom color schemes.",
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