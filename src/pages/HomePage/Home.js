import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      {/* <InfoSection {...homeObjFour} /> */}
    </>
  );
};

export default Home;
