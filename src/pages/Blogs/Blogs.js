import React from 'react';
import { homeObjOne,homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection} from '../../components';

function Blogs() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      {/* <Pricing /> */}
      {/* <InfoSection {...homeObjFour} /> */}
    </>
  );
};

export default Blogs;
