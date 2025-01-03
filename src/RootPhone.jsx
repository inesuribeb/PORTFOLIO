import { Outlet } from 'react-router-dom';
import HeaderPhone from './components/header/HeaderPhone';

function RootPhone() {
  return (
    <>
      <HeaderPhone />
      <Outlet />
    </>
  );
}

export default RootPhone;