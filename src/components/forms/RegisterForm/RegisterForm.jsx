import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { ReactComponent as ViewIcon } from 'assets/images/view-icon.svg';
import { ReactComponent as ViewHideIcon } from 'assets/images/view-hide-icon.svg';
import { Form, FormBottom } from 'components/common/styles';
import { emailValidation, passwordValidation } from 'constants/validation';

const formFields = [
  {
    id: 'first-name',
    type: 'text',
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Your first name',
  },
  {
    id: 'last-name',
    type: 'text',
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Your last name',
  },
  {
    id: 'email',
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Your email',
  },
  {
    id: 'password',
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Your password',
  },
];

const schema = yup
  .object({
    firstName: yup.string().trim().required('First name is required'),
    lastName: yup.string().trim().required('Last name is required'),
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

const RegisterForm = ({ onSubmit, loading }) => {
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
        {formFields.map(({ id, type, name, label, placeholder }) => (
          <Grid item xs={12} key={id}>
            <FormControl variant='standard'>
              <Box display='flex' alignItems='flex-end'>
                <InputLabel htmlFor={id} shrink error={!!errors[name]}>
                  {label}
                </InputLabel>
                <FormHelperText error>{errors[name]?.message}</FormHelperText>
              </Box>
              <OutlinedInput
                type={
                  type === 'password'
                    ? showPassword
                      ? 'text'
                      : 'password'
                    : type
                }
                id={id}
                placeholder={placeholder}
                {...register(name)}
                error={!!errors[name]}
                endAdornment={
                  type === 'password' && (
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
                  )
                }
              />
            </FormControl>
          </Grid>
        ))}
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
            Create account
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
          Already have an account?{' '}
          <Link
            variant='body3'
            component={RouterLink}
            to='/login'
            underline='hover'
          >
            Sign In
          </Link>
        </Typography>
      </FormBottom>
    </Form>
  );
};

export default RegisterForm;
