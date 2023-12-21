import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

export default function AppLayout() {
  return (
    <>
      <Header />
      <hr className="border-gray-200 dark:border-gray-700 my-3 md:my-5 -mx-4 md:-mx-10 xl:-mx-14" />

      <main className="flex-1 max-w-full w-[50rem] mx-auto pt-1">
        <Outlet />
      </main>

      <hr className="border-gray-200 dark:border-gray-700 my-3 md:my-5 -mx-4 md:-mx-10 xl:-mx-14" />
      <Footer />
    </>
  );
}
