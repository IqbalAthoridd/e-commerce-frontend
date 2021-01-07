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


export const adressSchema = Yup.object().shape({
  recipient:Yup.string()
  .min(5,'Too short!')
  .required('Recipient is required!'),
  phone_number:Yup.string()
  .min(12,'Invalid phone number!')
  .max(13,'Invalid phone number!')
  .required('Phone number is required!'),
  adress:Yup.string()
  .min(20,'Input full adress!')
  .required('Adress is required!'),
  postal_code:Yup.string()
  .min(5,'Invalid postal code!')
  .max(5,'Invalid postal code!')
  .required('Postal code is required!'),
  city:Yup.string()
  .min(3,'Invalid city!')
  .required('City is required!'),
})