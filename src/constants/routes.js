import Home from 'pages/Home';
import News from 'pages/News';
import MoneyInOut from 'pages/MoneyInOut';
import AssetsLiabilities from 'pages/AssetsLiabilities';
import SignIn from 'pages/SignIn';
import Register from 'pages/Register';
import ResetPassword from 'pages/ResetPassword';
import Layout from 'components/Layout';
import PrivateRoute from 'components/router/PrivateRoute';
import { Navigate } from 'react-router-dom';

const routes = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
      {
        path: 'home',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: 'news',
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
      },
      {
        path: 'money-in-out',
        element: (
          <PrivateRoute>
            <MoneyInOut />
          </PrivateRoute>
        ),
      },
      {
        path: 'assets-liabilities',
        element: (
          <PrivateRoute>
            <AssetsLiabilities />
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <Navigate to='/' replace />,
      },
    ],
  },
];

export default routes;
