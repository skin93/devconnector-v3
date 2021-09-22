import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
  @media (max-width: 700px) {
    margin-top: 8rem;
  }
`;

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background-color: #fff;
  color: #333;
}
a {
  color: ${({ theme }) => theme.colors.primaryColor};
  text-decoration: none;
}
ul {
  list-style: none;
}
img {
  width: 100%;
}
`;
