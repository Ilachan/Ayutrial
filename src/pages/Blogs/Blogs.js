import React from 'react';
import { homeObjOne } from './Data';
import { InfoSection} from '../../components';

function Blogs() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      
      {/* <InfoSection {...homeObjFour} /> */}
    </>
  );
};

export default Blogs;
