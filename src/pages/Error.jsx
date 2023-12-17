import { Link, useRouteError } from 'react-router-dom';
import notFound from '../assets/404.svg';

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main>
        <img src={notFound} alt="not found" />
        <h2>Page not found</h2>
        <Link to="/">Back home</Link>
      </main>
    );
  }

  return (
    <main>
      <h3>Something went wrong</h3>
      <Link to="/">Back home</Link>
    </main>
  );
}
export default Error;
