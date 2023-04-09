import { createBrowserRouter } from 'react-router-dom';
import { Admin, Auth } from '../pages';
import { ForgotPassword, Login } from '../redux/features';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    errorElement: <p>THIS IS ERROR PAGE</p>,
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
    children: [
      {
        path: '/admin/tab1',
        element: <p>Tab1</p>,
      },
      {
        path: '/admin/*',
        element: <p>Not found</p>,
      },
    ],
  },
]);

export default routes;
