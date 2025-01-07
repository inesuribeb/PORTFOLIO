import { Outlet } from 'react-router-dom';
import HeaderPhone from './components/header/HeaderPhone';
import { useState } from 'react';
import './RootPhone.css'

function RootPhone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* <HeaderPhone isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="root-phone__content">
        <Outlet context={{ setIsMenuOpen }} />
      </div> */}
      <HeaderPhone isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    <div className="root-phone__content">
      <Outlet context={{ isMenuOpen, setIsMenuOpen }} />
    </div>
    </>
  );
}

export default RootPhone;