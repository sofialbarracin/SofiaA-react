
import { NavBar } from './navbar/NavBar';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
   
    </div>
  );
};

export default Layout
