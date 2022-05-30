import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Form, FormBottom } from 'components/common/styles';
import { emailValidation } from 'constants/validation';

const schema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required('Email is required')
      .matches(emailValidation, 'Invalid email format'),
  })
  .required();

const ResetPasswordForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
      </Grid>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <Button type='submit' variant='contained' fullWidth>
            Reset password
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

export default ResetPasswordForm;
