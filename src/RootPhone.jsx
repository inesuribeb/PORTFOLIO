import { Outlet } from 'react-router-dom';
import HeaderPhone from './components/header/HeaderPhone';
import './RootPhone.css'

function RootPhone() {
  return (
    <>
      <HeaderPhone />
      <div className="root-phone__content">
        <Outlet />
      </div>
    </>
  );
}

export default RootPhone;