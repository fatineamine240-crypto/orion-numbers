import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

export default function AppLayout() {
  return (
    <>
      <Header />
      <hr className="border-gray-200 dark:border-gray-700 my-3 md:my-5 -mx-4 md:-mx-10 xl:-mx-14" />

      <main className="flex-1 max-w-3xl w-full mx-auto py-1">
        <Outlet />
      </main>

      <hr className="border-gray-200 dark:border-gray-700 my-3 md:my-5 -mx-4 md:-mx-10 xl:-mx-14" />
      <Footer />
    </>
  );
}
