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
      title: "WWW MAGAZINE",
      description: "WWW is an online magazine with impersonal content without any path.",
      method: "Magazine • Editorial design • Web design",
      link: "www.wwwmagazine.com",
      images: [{ src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción1" },
      { src: "https://www.americasfinestlabels.com/includes/work/image_cache/92385ae74e3a74e1663eea6467a63539.thumb.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },
      { src: "https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53F0/FD66/F92E/79C5/D07A/0A28/100B/4C14/rectangle_yellow_flag.jpg", alt: "descripción2" },]
    },
    {
      title: "WWW MAGAZINE",
      description: "WWW is an online magazine with impersonal content without any path.",
      method: "Magazine • Editorial design • Web design",
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
      title: "WWW MAGAZINE",
      description: "WWW is an online magazine with impersonal content without any path.",
      method: "Magazine • Editorial design • Web design",
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
      title: "WWW MAGAZINE",
      description: "WWW is an online magazine with impersonal content without any path.",
      method: "Magazine • Editorial design • Web design",
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
      title: "WWW MAGAZINE",
      description: "WWW is an online magazine with impersonal content without any path.",
      method: "Magazine • Editorial design • Web design",
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