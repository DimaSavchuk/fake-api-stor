import React from 'react';
import Trending from '../Trending/Trending';

import { HomeSection } from './Home.styled';

const Home = () => {
  return (
    <HomeSection>
      <Trending title={'Trending'} />
    </HomeSection>
  );
};

export default Home;
