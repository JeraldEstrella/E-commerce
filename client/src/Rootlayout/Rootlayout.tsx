import { Outlet } from 'react-router-dom';
import Navbar from '../components/TopNavBar/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='root-layout'>
        <header className='navbar'>
          <Navbar />
        </header>
        <main className='main-content'>
          <Outlet />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default RootLayout;
