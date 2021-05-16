import React from 'react';
import Landing from '../LandingSection/Landing';
import Container from '@material-ui/core/Container';
const HomeScreen = () => {
  return (
    <>
      <Landing />
      <Container>
        <h1>Body</h1>
      </Container>
    </>
  );
};

export default HomeScreen;
