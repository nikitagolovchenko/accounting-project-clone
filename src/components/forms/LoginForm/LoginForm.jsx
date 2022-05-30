import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as GooglIcon } from 'assets/images/google-icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/images/facebook-icon.svg';
import { ReactComponent as ViewIcon } from 'assets/images/view-icon.svg';
import { ReactComponent as ViewHideIcon } from 'assets/images/view-hide-icon.svg';
import { Form, FormBottom } from 'components/common/styles';
import { emailValidation, passwordValidation } from 'constants/validation';

const schema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required('Email is required')
      .matches(emailValidation, 'Invalid email format'),
    password: yup
      .string()
      .trim()
      .required('Password is required')
      .matches(passwordValidation, 'Invalid password format')
      .min(6, 'Password must have at least 6 characters'),
  })
  .required();

const LoginForm = ({
  onSubmit,
  onLoginWithGoogle,
  onLoginWithFacebook,
  loading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <FormControl variant='standard'>
            <Box display='flex' alignItems='flex-end'>
              <InputLabel htmlFor='email' shrink error={!!errors['email']}>
                Email
              </InputLabel>
              <FormHelperText error>{errors['email']?.message}</FormHelperText>
            </Box>
            <OutlinedInput
              id='email'
              type='email'
              placeholder='Your email'
              {...register('email')}
              error={!!errors['email']}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl variant='standard'>
            <Box display='flex' alignItems='flex-end'>
              <InputLabel
                htmlFor='password'
                shrink
                error={!!errors['password']}
              >
                Password
              </InputLabel>
              <FormHelperText error>
                {errors['password']?.message}
              </FormHelperText>
            </Box>
            <OutlinedInput
              id='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Your password'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <ViewHideIcon /> : <ViewIcon />}
                  </IconButton>
                </InputAdornment>
              }
              {...register('password', {
                required: { value: true, message: 'Password is required' },
                minLength: {
                  value: 6,
                  message: 'Password must have at least 6 characters',
                },
              })}
              error={!!errors['password']}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography textAlign='right'>
            <Link
              variant='body3'
              component={RouterLink}
              to='/reset-password'
              underline='hover'
              color='text.grey'
            >
              Forgot your password?
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <Button
            type='submit'
            variant='contained'
            fullWidth
            endIcon={loading && <CircularProgress color='inherit' size={16} />}
            disabled={loading}
          >
            Sign in
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant='outlined' fullWidth onClick={onLoginWithGoogle}>
            <SvgIcon
              component={GooglIcon}
              viewBox='0 0 17 16'
              sx={{ fontSize: '17px' }}
            />
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant='outlined' fullWidth onClick={onLoginWithFacebook}>
            <SvgIcon
              component={FacebookIcon}
              viewBox='0 0 17 16'
              sx={{ fontSize: '17px' }}
            />
          </Button>
        </Grid>
      </Grid>

      <FormBottom>
        <Typography
          variant='body3'
          textAlign='center'
          fontWeight={700}
          color='text.grey'
          component='p'
        >
          Not a member?{' '}
          <Link
            variant='body3'
            component={RouterLink}
            to='/register'
            underline='hover'
          >
            Register now
          </Link>
        </Typography>
      </FormBottom>
    </Form>
  );
};

export default LoginForm;
