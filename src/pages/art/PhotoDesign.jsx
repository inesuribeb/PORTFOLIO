import './PhotoDesign.css';
import React, { useState } from 'react';


function PhotoDesign() {


  const [selectedCategory, setSelectedCategory] = useState('All');

  const column1Images = [
    { src: "/CAPTURAS/1.png", alt: "imagen de un niño", category: "Photography", order: 1 },
    { src: "/CAPTURAS/chicocapucharoja.png", alt: "RETRATO DE CHUCO CON CAPUCHA ROJA", category: "Photography", order: 2 },
    { src: "/CAPTURAS/2.png", alt: "nose", category: "Photography", order: 3 },
    { src: "/CAPTURAS/2.2.2.png", alt: "", category: "Photography", order: 4 },
    { src: "/CAPTURAS/albaylabrador.png", alt: "chico y chica sentados", category: "Photography", order: 5 },
    { src: "/CAPTURAS/ramoflores.png", alt: "ramo de flores", category: "Photography", order: 6 },
    { src: "/CAPTURAS/albaamarillo.png", alt: "imagen de chica con camiseta amarilla", category: "Photography", order: 7 },
    { src: "/CAPTURAS/MANU6.png", alt: "foto de chico bailando en un desguace", category: "Photography", order: 8 },
    { src: "/CAPTURAS/ZPLAYA.jpg", alt: "atardecer con pesca", category: "Photography", order: 9 }
  ];

  const column2Images = [
    { src: "/CAPTURAS/1.1.png", alt: "imagen de niños senegaleses", category: "Photography", order: 10 },
    { src: "/CAPTURAS/2.2.png", alt: "NOSE", category: "Design", order: 11 },
    { src: "/CAPTURAS/2.2.2.2.png", alt: "NOSE", category: "Design", order: 12 },
    { src: "/CAPTURAS/playa.png", alt: "chica corriendo en playa", category: "Photography", order: 13 },
    { src: "/CAPTURAS/bolsoro.png", alt: "detalle de bolso rojo", category: "Design", order: 14 },
    { src: "/CAPTURAS/alazne.png", alt: "foto mujer en blanco y negro", category: "Photography", order: 15 },
    { src: "/CAPTURAS/señoramosca.png", alt: "foto de una mosca en un sombrero de señora", category: "Photography", order: 16 },
    { src: "/CAPTURAS/paisaje2.png", alt: "paisaje", category: "Photography", order: 17 },
    { src: "/CAPTURAS/nwhr.png", alt: "pescador porta un pez", category: "Photography", order: 18 },
    { src: "/CAPTURAS/ZABRAZO.png", alt: "chicas abrazandose", category: "Photography", order: 19 }
  ];

  const column3Images = [
    { src: "/CAPTURAS/1.1.1.png", alt: "chico acrobacia", category: "Photography", order: 20 },
    { src: "/CAPTURAS/1.1.1.1.png", alt: "nose", category: "Design", order: 21 },
    { src: "/CAPTURAS/BOSQUENOCHE.jpg", alt: "casa en el bosque de noche", category: "Photography", order: 22 },
    { src: "/CAPTURAS/senegalstyle.png", alt: "chico senegales bien vestido", category: "Photography", order: 23 },
    { src: "/CAPTURAS/MANOSATRAS.png", alt: "manos de chica puestos atras", category: "Photography", order: 24 },
    { src: "/CAPTURAS/albamorado.png", alt: "chica con vestido morado", category: "Photography", order: 25 },
    { src: "/CAPTURAS/helenpies.png", alt: "chica sentada en cama", category: "Photography", order: 26 },
    { src: "/CAPTURAS/paisaje1.png", alt: "PAISAJE", category: "Photography", order: 27 },
    { src: "/CAPTURAS/elen.png", alt: "foto detalle de ojo azul de chica", category: "Photography", order: 28 },
    { src: "/CAPTURAS/ZMALLORCA.png", alt: "terraza en atardecer", category: "Photography", order: 29 }
  ];

  const allImages = [...column1Images, ...column2Images, ...column3Images];

  const filteredImages = selectedCategory === 'All'
    ? allImages
    : allImages.filter(img => img.category === selectedCategory);

  const renderContent = () => {
    if (selectedCategory === 'All') {
      return (
        <>
          <div className="column1">
            {filteredImages
              .filter(img => img.order <= 9)
              .map(img => (
                <img
                  key={img.order}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                />
              ))}
          </div>
          <div className="column2">
            {filteredImages
              .filter(img => img.order > 9 && img.order <= 19)
              .map(img => (
                <img
                  key={img.order}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                />
              ))}
          </div>
          <div className="column3">
            {filteredImages
              .filter(img => img.order > 19)
              .map(img => (
                <img
                  key={img.order}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                />
              ))}
          </div>
        </>
      );
    } else {
      const columns = [[], [], []];
      filteredImages.forEach((img, index) => {
        columns[index % 3].push(img);
      });

      return columns.map((column, i) => (
        <div key={i} className={`column${i + 1}`}>
          {column.map(img => (
            <img
              key={img.order}
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
          ))}
        </div>
      ));
    }
  };

  return (
    <>
      <div className="categories">
        <span
          className={selectedCategory === 'All' ? 'active' : ''}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </span>
        <span className="separator">, </span>
        <span
          className={selectedCategory === 'Photography' ? 'active' : ''}
          onClick={() => setSelectedCategory('Photography')}
        >
          Photography
        </span>
        <span className="separator">, </span>
        <span
          className={selectedCategory === 'Design' ? 'active' : ''}
          onClick={() => setSelectedCategory('Design')}
        >
          Design
        </span>
      </div>
      <section className="contentContainer">
        {renderContent()}
      </section>
    </>
  );
}

export default PhotoDesign;