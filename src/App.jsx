import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout, Error, Home } from './pages';

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
