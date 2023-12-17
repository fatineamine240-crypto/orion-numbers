import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
