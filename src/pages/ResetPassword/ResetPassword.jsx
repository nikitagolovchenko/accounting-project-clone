import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, selectAuth } from 'store/slices/authSlice';
import { Navigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import ResetPasswordForm from 'components/forms/ResetPasswordForm';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { user, loading } =
    useSelector(selectAuth);
    
  const handleResetPassword = ({ email }) => {
    dispatch(resetPassword(email));
  };

  if (user) {
    return <Navigate to='/home' />;
  }

  return (
    <>
      <Typography variant='h1sm' component='h1' mb={2}>
        Forgot your password?
      </Typography>
      <Typography mb={4}>
        We are here to help. Enter your email to continue.
      </Typography>
      <ResetPasswordForm onSubmit={handleResetPassword} />
      {loading && <LinearProgress />}
    </>
  );
};

export default ResetPassword;
