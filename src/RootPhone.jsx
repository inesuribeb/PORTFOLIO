import { Outlet } from 'react-router-dom';
import HeaderPhone from './components/header/HeaderPhone';
import { useState, useEffect } from 'react';
import './RootPhone.css'

// function RootPhone() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <>
      
//       <HeaderPhone isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
//     <div className="root-phone__content">
//       <Outlet context={{ isMenuOpen, setIsMenuOpen }} />
//     </div>
//     </>
//   );
// }

// export default RootPhone;

function RootPhone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      let scrollTimeout;

      const handleScroll = () => {
        clearTimeout(scrollTimeout);

        setIsUserScrolling(true);

        scrollTimeout = setTimeout(() => {
          setIsUserScrolling(false);

          if (window.scrollY > 0) {
            setIsMenuOpen(false);
          }
        }, 150);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <HeaderPhone 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onMenuClick={handleMenuClick}  // Añade esta prop
      />
      <div className={`root-phone__content ${isMenuOpen ? 'shifted' : ''}`}>
        <Outlet context={{ isMenuOpen, setIsMenuOpen }} />
      </div>
    </>
  );
}

export default RootPhone;