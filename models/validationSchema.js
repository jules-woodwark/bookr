import { object, string } from 'yup';

const InputSchema = {
  email: string().email('Email is invalid').required('An email is required!'),
  password: string().required('A password is required!'),
  firstName: string()
    .min(1, 'First Name is too short!')
    .max(50, 'First Name is too Long!')
    .required('A first name is required!'),
  lastName: string()
    .min(1, 'Last Name is too short!')
    .max(50, 'Last Name is too long!')
    .required('A last name is required!'),
};

const { email, password, firstName, lastName } = InputSchema;

const ValidationSchema = {
  loginSchema: object({
    email,
    password,
  }),
  accountSchema: object({
    firstName,
    lastName,
    email,
    password: password.min(8, 'Password must be at least 8 characters'),
  }),
  updateAccountSchema: object({
    firstName,
    lastName,
    email,
  }),
  updatePasswordSchema: object({
    password: password.min(8, 'Password must be at least 8 characters'),
  }),
};

export default ValidationSchema;
