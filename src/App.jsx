import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout, Error, Home, Quiz } from './pages';

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/quiz',
        element: <Quiz />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
