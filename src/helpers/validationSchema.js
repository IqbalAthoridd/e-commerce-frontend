import * as Yup from 'yup';


export const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required'),
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .email('Invalid email')
      .required('email is required'),
    password: Yup.string().min(8,'Min 8 caracters').required('password is required'),
  });