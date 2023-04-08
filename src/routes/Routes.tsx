import { Auth } from '@pages';
import { createBrowserRouter } from 'react-router-dom';
import { Login } from 'redux/features';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);

export default routes;
