import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout, Error, Home, Quiz } from './pages';

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
