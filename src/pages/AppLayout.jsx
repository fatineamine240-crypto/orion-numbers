import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

export default function AppLayout() {
  return (
    <>
      <Header />
      <hr className="border-gray-150 dark:border-gray-700 mb-3 md:mb-5" />

      <main className="flex-1 max-w-3xl w-full mx-auto py-1 px-4">
        <Outlet />
      </main>

      <hr className="border-gray-150 dark:border-gray-700 mt-3 md:mt-5" />
      <Footer />
    </>
  );
}
