import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'store/slices/authSlice';

const PrivateRoute = ({ children }) => {
  const { user } = useSelector(selectAuth);

  if (!user) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export default PrivateRoute;
