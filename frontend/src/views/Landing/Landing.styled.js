import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  position: relative;
  background: url('./img/showcase.jpg') no-repeat center center/cover;
  min-height: 100vh;
`;

export const DarkOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Inner = styled.div`
  color: #fff;
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Lead = styled.p`
  font-size: 1rem;
`;

export const ButtonsWrapper = styled.div`
  margin: 1rem;
`;

export const RegisterButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primaryColor};
  color: #fff;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
`;

export const LoginButton = styled(RegisterButton)`
  background: ${({ theme }) => theme.colors.lightColor};
  color: #333;
`;
