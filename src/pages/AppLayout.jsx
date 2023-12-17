import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
