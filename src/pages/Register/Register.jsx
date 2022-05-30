import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, signUp } from 'store/slices/authSlice';
import { Navigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import RegisterForm from 'components/forms/RegisterForm';

const Register = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(selectAuth);

  const handleRegister = ({ firstName, lastName, email, password }) => {
    dispatch(
      signUp({
        firstName,
        lastName,
        email,
        password,
      })
    );
  };

  if (user) {
    return <Navigate to='/home' />;
  }

  return (
    <>
      <Typography variant='h1sm' component='h1' mb={2}>
        Register!
      </Typography>
      <Typography mb={4}>Complete the form below to get started.</Typography>
      <RegisterForm onSubmit={handleRegister} loading={loading} />
      {loading && <LinearProgress />}
    </>
  );
};

export default Register;
