import { useState } from 'react';
import { useFormik } from 'formik';
import { styled } from '@mui/material/styles';
import { Form } from '../ui';
import useMediaQuery from '@mui/material/useMediaQuery';

import AccountCircle from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import useFirebase from '../../hooks/useFirebase';
import ValidationSchema from '../../models/validationSchema';

import AndLogo from 'components/ui/AndLogo';
import BookrLogo from 'components/ui/BookrLogo';
import style from '@emotion/styled';

const StyledTextField = styled(TextField)`
  margin: 1rem 0;
`;

const StyledDivAndLogo = style.div`
  margin: 1rem 0;
  text-align: center;
`;

const StyledDivBookrLogo = style.div`
  margin: 1rem 0;
  text-align: center;
`;

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const { isLoading, authRequest } = useFirebase();
  const minWidth = useMediaQuery((theme) => theme.breakpoints.up('szm'));
  const minHeight = useMediaQuery('@media(min-height: 773px)');

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: { firstName: '', lastName: '', email: '', password: '' },
    validationSchema: isLogin
      ? ValidationSchema.loginSchema
      : ValidationSchema.accountSchema,
    onSubmit: (values) => authRequest(isLogin, values),
    validateOnChange: true,
    validateOnBlur: true,
  });

  const toggleFormHandler = () => {
    resetForm();
    setIsLogin((prevState) => !prevState);
  };

  const largeDevice = minWidth && minHeight;

  const switchFormText = isLogin
    ? 'Create a new account'
    : 'Login with an existing account';

  const createAccountFields = (
    <>
      <StyledTextField
        id="firstName"
        name="firstName"
        type="text"
        label="First Name"
        value={values.firstName}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
        size={largeDevice ? 'medium' : 'small'}
        fullWidth
      />
      <StyledTextField
        id="lastName"
        name="lastName"
        type="text"
        label="Last Name"
        value={values.lastName}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
        size={largeDevice ? 'medium' : 'small'}
        fullWidth
      />
    </>
  );

  return (
    <Card component="section">
      <StyledDivAndLogo>
        <AndLogo />
      </StyledDivAndLogo>
      <StyledDivBookrLogo>
        <BookrLogo />
      </StyledDivBookrLogo>
      <Form onSubmit={handleSubmit}>
        <Icon
          component={isLogin ? LockOpenIcon : AccountCircle}
          fontSize="large"
        />
        {!isLogin && createAccountFields}
        <StyledTextField
          id="email"
          name="email"
          type="email"
          label="Email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          size={largeDevice ? 'medium' : 'small'}
          fullWidth
        />
        <StyledTextField
          id="password"
          name="password"
          type="password"
          label="Password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          size={largeDevice ? 'medium' : 'small'}
          fullWidth
        />
        {!isLoading && (
          <Button
            style={{
              backgroundColor: '#ff323c',
            }}
            type="submit"
            variant="contained"
            size={largeDevice ? 'large' : 'medium'}
            fullWidth
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        )}
        {isLoading && <CircularProgress />}
        <Divider />
        <Button
          style={{
            backgroundColor: '#000000',
          }}
          variant="contained"
          color="success"
          size={largeDevice ? 'large' : 'medium'}
          onClick={toggleFormHandler}
          fullWidth
        >
          {switchFormText}
        </Button>
      </Form>
    </Card>
  );
}

export default AuthForm;
