import React from 'react';
import * as L from './Landing.styled';

export default function Landing() {
  return (
    <L.Section>
      <L.DarkOverlay>
        <L.Inner>
          <L.Title>Developer Connector</L.Title>
          <L.Lead>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </L.Lead>
          <L.ButtonsWrapper>
            <L.RegisterButton to='/register'>Sign Up</L.RegisterButton>
            <L.LoginButton to='/login'>Login</L.LoginButton>
          </L.ButtonsWrapper>
        </L.Inner>
      </L.DarkOverlay>
    </L.Section>
  );
}
