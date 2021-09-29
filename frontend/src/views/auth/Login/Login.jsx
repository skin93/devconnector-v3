import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';
import * as F from '../../../styles/Form.styled';

import { FaUser } from 'react-icons/fa';

import { login, loadUser, authState } from '../../../features/auth/authSlice';

import { Container } from '../../../styles/Global';

const Login = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(authState);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ email, password }));
    await dispatch(loadUser());
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Container>
      <F.FormHeading>Sign In</F.FormHeading>
      <F.FormLead>
        <FaUser /> Sign Into Your Account!
      </F.FormLead>
      <F.Form onSubmit={(e) => handleSubmit(e)}>
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
        <F.InputSubmit type='submit'>Login</F.InputSubmit>
      </F.Form>
      <F.FormParagraph>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </F.FormParagraph>
    </Container>
  );
};

export default Login;
