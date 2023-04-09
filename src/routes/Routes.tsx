import { Admin, Auth } from '@pages';
import { createBrowserRouter } from 'react-router-dom';
import { Login, ForgotPassword } from 'redux/features';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [],
  },
]);

export default routes;
