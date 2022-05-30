import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuth,
  signIn,
  signInWithGoogle,
  signInWithFacebook,
} from 'store/slices/authSlice';
import { Navigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import LoginForm from 'components/forms/LoginForm';

const SignIn = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(selectAuth);

  const handleLogin = ({ email, password }) => {
    dispatch(signIn({ email, password }));
  };

  const handleLoginWithGoogle = () => {
    dispatch(signInWithGoogle());
  };

  const handleLoginWithFacebook = () => {
    dispatch(signInWithFacebook());
  };

  if (user) {
    return <Navigate to='/home' />;
  }

  return (
    <>
      <Typography variant='h1sm' component='h1' mb={2}>
        Sign In!
      </Typography>
      <Typography mb={4}>Welcome back you’ve been missed.</Typography>
      <LoginForm
        onSubmit={handleLogin}
        onLoginWithGoogle={handleLoginWithGoogle}
        onLoginWithFacebook={handleLoginWithFacebook}
        loading={loading}
      />
      {loading && <LinearProgress />}
    </>
  );
};

export default SignIn;
