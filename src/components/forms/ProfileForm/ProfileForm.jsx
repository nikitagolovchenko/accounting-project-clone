import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Form } from 'components/common/styles';
import { emailValidation } from 'constants/validation';

const countries = [
  { value: 'USA', label: 'United State of America' },
  { value: 'UK', label: 'Ukraine' },
  { value: 'PL', label: 'Poland' },
];

const states = [
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
];

const cities = [
  { value: 'Albany', label: 'Albany' },
  { value: 'New York', label: 'New York' },
];

const formFields = [
  {
    id: 'first-name',
    type: 'text',
    name: 'firstName',
    label: 'First name *',
    placeholder: 'Your first name',
    required: true,
  },
  {
    id: 'middle-name',
    type: 'text',
    name: 'middleName',
    label: 'Middle name',
    placeholder: 'Your middle name',
  },
  {
    id: 'last-name',
    type: 'text',
    name: 'lastName',
    label: 'Last name *',
    placeholder: 'Your last name',
    required: true,
  },
  {
    id: 'phone',
    type: 'tel',
    name: 'phone',
    label: 'Cell Phone',
    placeholder: 'Your phone',
  },
  {
    id: 'email',
    type: 'email',
    name: 'email',
    label: 'Email *',
    placeholder: 'Your email',
    required: true,
  },
  {
    id: 'country',
    type: 'select',
    name: 'country',
    label: 'Country',
    placeholder: 'Your country',
    list: countries,
  },
  {
    id: 'state',
    type: 'select',
    name: 'state',
    label: 'State',
    placeholder: 'Your state',
    list: states,
  },
  {
    id: 'city',
    type: 'select',
    name: 'city',
    label: 'City',
    placeholder: 'Your city',
    list: cities,
  },
  {
    id: 'address1',
    type: 'test',
    name: 'address1',
    label: 'Address line 1',
    placeholder: 'Your address 1',
  },
  {
    id: 'address2',
    type: 'test',
    name: 'address1',
    label: 'Address line 2',
    placeholder: 'Your address 2',
  },
  {
    id: 'zip',
    type: 'number',
    name: 'zip',
    label: 'Zip code',
    placeholder: 'Your ZIP',
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
  })
  .required();

const ProfileForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const values = watch();

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {formFields.map(
          ({ id, type, name, label, placeholder, list, required }) => (
            <Grid item xs={12} key={id}>
              <FormControl variant='standard'>
                <Box display='flex' alignItems='flex-end'>
                  <InputLabel
                    htmlFor={id}
                    shrink
                    error={required && !!errors[name]}
                  >
                    {label}
                  </InputLabel>
                  {required && (
                    <FormHelperText error>
                      {errors[name]?.message}
                    </FormHelperText>
                  )}
                </Box>
                {type !== 'select' && (
                  <OutlinedInput
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    {...register(name)}
                    error={required && !!errors[name]}
                  />
                )}
                {type === 'select' && (
                  <Controller
                    control={control}
                    name={name}
                    render={({ field: { value, onChange, onBlur, ref } }) => (
                      <Select
                        id={id}
                        input={<OutlinedInput />}
                        inputRef={ref}
                        displayEmpty
                        value={value ? value : ''}
                        onChange={e => onChange(e.target.value)}
                        onBlur={onBlur}
                        renderValue={selected => {
                          if (selected.length === 0) {
                            return (
                              <Typography
                                fontWeight={600}
                                sx={{ opacity: 0.4 }}
                              >
                                {placeholder}
                              </Typography>
                            );
                          }
                          return selected;
                        }}
                        disabled={
                          name === 'state'
                            ? !values.country
                            : name === 'city'
                            ? !values.state
                            : false
                        }
                      >
                        <MenuItem disabled value=''>
                          {placeholder}
                        </MenuItem>
                        {list.map(({ value, label }) => (
                          <MenuItem value={value} key={value}>
                            {label}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                )}
              </FormControl>
            </Grid>
          )
        )}
      </Grid>
    </Form>
  );
};

export default ProfileForm;
