import { useLocation, Navigate, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import News from 'pages/News';
import MoneyInOut from 'pages/MoneyInOut';
import AssetsLiabilities from 'pages/AssetsLiabilities';
import SignIn from 'pages/SignIn';
import Register from 'pages/Register';
import ResetPassword from 'pages/ResetPassword';
import Profile from 'pages/Profile';
import Layout from 'components/Layout';
import PrivateRoute from 'components/router/PrivateRoute';

const AppRouter = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route element={<Layout />}>
          <Route index element={<SignIn />} />
          <Route path='register' element={<Register />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route
            path='home'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='news'
            element={
              <PrivateRoute>
                <News />
              </PrivateRoute>
            }
          />
          <Route
            path='money-in-out'
            element={
              <PrivateRoute>
                <MoneyInOut />
              </PrivateRoute>
            }
          />
          <Route
            path='assets-liabilities'
            element={
              <PrivateRoute>
                <AssetsLiabilities />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path='profile' element={<Profile />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
