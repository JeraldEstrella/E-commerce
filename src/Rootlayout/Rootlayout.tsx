import { Outlet } from 'react-router-dom';
import Navbar from '../components/TopNavBar/Navbar.tsx';

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <header className='navbar'>
        <Navbar />
      </header>
      <main className='main-content'>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
