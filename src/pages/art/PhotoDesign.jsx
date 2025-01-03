import './PhotoDesign.css';
import React, { useState } from 'react';
// import LazyImage from '../../components/lazyImage/LazyImage';

// function PhotoDesign() {

//   return (
//     <>
//       <div className="categories">
//         <span>All</span>
//         <span className="separator">, </span>
//         <span>Photography</span>
//         <span className="separator">, </span>
//         <span>Design</span>
//       </div>
//       <section className="contentContainer">
//         <div className="column1">
//           <img src="/CAPTURAS/1.png" alt="imagen de un niño" loading="lazy" />
//           <img src="/CAPTURAS/chicocapucharoja.png" alt="RETRATO DE CHUCO CON CAPUCHA ROJA" loading="lazy" />
//           <img src="/CAPTURAS/2.png" alt="nose" loading="lazy" />
//           <img src="/CAPTURAS/2.2.2.png" alt="" loading="lazy" />
//           <img src="/CAPTURAS/albaylabrador.png" alt="chico y chica sentados" loading="lazy" />
//           <img src="/CAPTURAS/ramoflores.png" alt="ramo de flores" loading="lazy" />
//           <img src="/CAPTURAS/albaamarillo.png" alt="imagen de chicacon camiseta amarilla" loading="lazy" />
//           <img src="/CAPTURAS/MANU6.png" alt="foto de chico bailando en un desguace" loading="lazy" />
//           <img src="/CAPTURAS/ZPLAYA.jpg" alt="atrardecer con pesca" loading="lazy" />
//         </div>

//         <div className="column2">
//           <img src="/CAPTURAS/1.1.png" alt="imagen de niños senegaleses" loading="lazy" />
//           <img src="/CAPTURAS/2.2.png" alt="NOSE" loading="lazy" />
//           <img src="/CAPTURAS/2.2.2.2.png" alt="NOSE" loading="lazy" />
//           <img src="/CAPTURAS/playa.png" alt="chica corriendo en playa" loading="lazy" />
//           <img src="/CAPTURAS/bolsoro.png" alt="detalle de bolso rojo" loading="lazy" />
//           <img src="/CAPTURAS/alazne.png" alt="foto mujer en blanco y negro" loading="lazy" />
//           <img src="/CAPTURAS/señoramosca.png" alt="foto de una mosca en un sombrero de señora" loading="lazy" />
//           <img src="/CAPTURAS/paisaje2.png" alt="paisaje" loading="lazy" />
//           <img src="/CAPTURAS/nwhr.png" alt="pescador porta un pez" loading="lazy" />
//           <img src="/CAPTURAS/ZABRAZO.png" alt="chicas abrazandose" loading="lazy" />
//         </div>

//         <div className="column3">
//           <img src="/CAPTURAS/1.1.1.png" alt="chico acrobacia" loading="lazy" />
//           <img src="/CAPTURAS/1.1.1.1.png" alt="nose" loading="lazy" />
//           <img src="/CAPTURAS/BOSQUENOCHE.jpg" alt="casa en el bosque de noche" loading="lazy" />
//           <img src="/CAPTURAS/senegalstyle.png" alt="chico senegales bien vestido" loading="lazy" />
//           <img src="/CAPTURAS/MANOSATRAS.png" alt="manosdechicapuestosatras" loading="lazy" />
//           <img src="/CAPTURAS/albamorado.png" alt="chica con vestido morado" loading="lazy" />
//           <img src="/CAPTURAS/helenpies.png" alt="chica sentada en cama" loading="lazy" />
//           <img src="/CAPTURAS/paisaje1.png" alt="PAISAJE" loading="lazy" />
//           <img src="/CAPTURAS/elen.png" alt="foto detalle de ojo azul de chica" loading="lazy" />
//           <img src="/CAPTURAS/ZMALLORCA.png" alt="terraza en atardecer" loading="lazy" />
//         </div>
//       </section>
//     </>
//   );

// }

function PhotoDesign () {


   const [selectedCategory, setSelectedCategory] = useState('All');

    // Definimos las imágenes con sus categorías
    const column1Images = [
      { src: "/CAPTURAS/1.png", alt: "imagen de un niño", category: "Photography" },
      { src: "/CAPTURAS/chicocapucharoja.png", alt: "RETRATO DE CHUCO CON CAPUCHA ROJA", category: "Photography" },
      { src: "/CAPTURAS/2.png", alt: "nose", category: "Photography" },
      { src: "/CAPTURAS/2.2.2.png", alt: "", category: "Photography" },
      { src: "/CAPTURAS/albaylabrador.png", alt: "chico y chica sentados", category: "Photography" },
      { src: "/CAPTURAS/ramoflores.png", alt: "ramo de flores", category: "Photography" },
      { src: "/CAPTURAS/albaamarillo.png", alt: "imagen de chica con camiseta amarilla", category: "Photography" },
      { src: "/CAPTURAS/MANU6.png", alt: "foto de chico bailando en un desguace", category: "Photography" },
      { src: "/CAPTURAS/ZPLAYA.jpg", alt: "atardecer con pesca", category: "Photography" }
  ];
  
  const column2Images = [
      { src: "/CAPTURAS/1.1.png", alt: "imagen de niños senegaleses", category: "Photography" },
      { src: "/CAPTURAS/2.2.png", alt: "NOSE", category: "Design" },
      { src: "/CAPTURAS/2.2.2.2.png", alt: "NOSE", category: "Design" },
      { src: "/CAPTURAS/playa.png", alt: "chica corriendo en playa", category: "Photography" },
      { src: "/CAPTURAS/bolsoro.png", alt: "detalle de bolso rojo", category: "Design" },
      { src: "/CAPTURAS/alazne.png", alt: "foto mujer en blanco y negro", category: "Photography" },
      { src: "/CAPTURAS/señoramosca.png", alt: "foto de una mosca en un sombrero de señora", category: "Photography" },
      { src: "/CAPTURAS/paisaje2.png", alt: "paisaje", category: "Photography" },
      { src: "/CAPTURAS/nwhr.png", alt: "pescador porta un pez", category: "Photography" },
      { src: "/CAPTURAS/ZABRAZO.png", alt: "chicas abrazandose", category: "Photography" }
  ];
  
  const column3Images = [
      { src: "/CAPTURAS/1.1.1.png", alt: "chico acrobacia", category: "Photography" },
      { src: "/CAPTURAS/1.1.1.1.png", alt: "nose", category: "Design" },
      { src: "/CAPTURAS/BOSQUENOCHE.jpg", alt: "casa en el bosque de noche", category: "Photography" },
      { src: "/CAPTURAS/senegalstyle.png", alt: "chico senegales bien vestido", category: "Photography" },
      { src: "/CAPTURAS/MANOSATRAS.png", alt: "manos de chica puestos atras", category: "Photography" },
      { src: "/CAPTURAS/albamorado.png", alt: "chica con vestido morado", category: "Photography" },
      { src: "/CAPTURAS/helenpies.png", alt: "chica sentada en cama", category: "Photography" },
      { src: "/CAPTURAS/paisaje1.png", alt: "PAISAJE", category: "Photography" },
      { src: "/CAPTURAS/elen.png", alt: "foto detalle de ojo azul de chica", category: "Photography" },
      { src: "/CAPTURAS/ZMALLORCA.png", alt: "terraza en atardecer", category: "Photography" }
  ];

    // Función para filtrar imágenes
    const filterImages = (images) => {
        if (selectedCategory === 'All') return images;
        return images.filter(img => img.category === selectedCategory);
    };

  return(
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
                <div className="column1">
                    {filterImages(column1Images).map((img, index) => (
                        <img 
                            key={index}
                            src={img.src} 
                            alt={img.alt}
                            loading="lazy"
                        />
                    ))}
                </div>
                
                <div className="column2">
                    {filterImages(column2Images).map((img, index) => (
                        <img 
                            key={index}
                            src={img.src} 
                            alt={img.alt}
                            loading="lazy"
                        />
                    ))}
                </div>
                
                <div className="column3">
                    {filterImages(column3Images).map((img, index) => (
                        <img 
                            key={index}
                            src={img.src} 
                            alt={img.alt}
                            loading="lazy"
                        />
                    ))}
                </div>
            </section>
        </>
    );
  
}

export default PhotoDesign;