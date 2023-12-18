import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout, Error, Home, Quiz } from './pages';
import { loader as quizLoader } from './pages/Quiz';

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
        loader: quizLoader,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <p>hello there</p>
    </RouterProvider>
  );
}

export default App;
