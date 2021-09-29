import styled from 'styled-components';
import { ButtonPrimary } from './Button.styled';

export const Form = styled.form``;

export const FormHeading = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const FormLead = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  margin: 1.2rem 0;
`;

export const FormText = styled.small`
  display: block;
  margin-top: 0.3rem;
  color: #888;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
`;

export const InputSubmit = styled(ButtonPrimary)``;

export const FormParagraph = styled.p`
  margin: ${({ theme }) => theme.margins.my1};
`;
