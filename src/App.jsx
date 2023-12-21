import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout, Error, Home, Quiz, TimesTable } from './pages';
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
      {
        path: '/times-table',
        element: <TimesTable />,
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
