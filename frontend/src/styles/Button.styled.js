import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background: ${({ theme }) => theme.colors.lightColor};
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
`;

export const ButtonPrimary = styled(Button)`
  background: ${({ theme }) => theme.palette.primary.background};
  color: ${({ theme }) => theme.palette.primary.color};
`;

export const ButtonDanger = styled(Button)`
  background: ${({ theme }) => theme.palette.danger.background};
  color: ${({ theme }) => theme.palette.danger.color};
`;