import { Link, useRouteError } from 'react-router-dom';
import notFound from '../assets/404.svg';

export default function Error() {
  const error = useRouteError();

  const containerClasses =
    'w-4xl mx-auto p-4 mt-10 flex flex-col items-center space-y-5 text-xl';
  const btnClasses = 'text-sm bg-teal-500 text-white rounded p-2';

  if (error.status === 404) {
    return (
      <main className={containerClasses}>
        <img src={notFound} alt="404" className="h-96" />
        <h2>Page not found</h2>
        <Link to="/" className={btnClasses}>
          Back home
        </Link>
      </main>
    );
  }

  return (
    <main className={containerClasses}>
      <h3>Something went wrong</h3>
      <Link to="/" className={btnClasses}>
        Back home
      </Link>
    </main>
  );
}
