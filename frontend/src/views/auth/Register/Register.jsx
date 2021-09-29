import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';
import * as F from '../../../styles/Form.styled';

import { FaUser } from 'react-icons/fa';

import {
  register,
  loadUser,
  authState,
} from '../../../features/auth/authSlice';
// import { setAlert, removeAlert } from '../../../features/alert/alertSlice';

import { Container } from '../../../styles/Global';

const Register = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(authState);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      // dispatch(setAlert({ msg: 'Password do not match', alertType: 'danger' }));
      // setTimeout(() => {
      //   dispatch(removeAlert());
      // }, 3000);
    } else {
      await dispatch(register({ name, email, password }));
      await dispatch(loadUser());
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Container>
      <F.FormHeading>Sign Up</F.FormHeading>
      <F.FormLead>
        <FaUser /> Create Your Account
      </F.FormLead>
      <F.Form onSubmit={(e) => handleSubmit(e)}>
        <F.FormGroup>
          <F.FormInput
            onChange={(e) => handleChange(e)}
            type='text'
            placeholder='Name'
            name='name'
            value={name}
          />
        </F.FormGroup>
        <F.FormGroup>
          <F.FormInput
            onChange={(e) => handleChange(e)}
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
          />
          <F.FormText>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </F.FormText>
        </F.FormGroup>
        <F.FormGroup>
          <F.FormInput
            onChange={(e) => handleChange(e)}
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength={6}
          />
        </F.FormGroup>
        <F.FormGroup>
          <F.FormInput
            onChange={(e) => handleChange(e)}
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            minLength={6}
          />
        </F.FormGroup>
        <F.InputSubmit type='submit'>Register</F.InputSubmit>
      </F.Form>
      <F.FormParagraph>
        Already have an account? <Link to='/login'>Sign In</Link>
      </F.FormParagraph>
    </Container>
  );
};

export default Register;
