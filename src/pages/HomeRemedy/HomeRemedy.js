import React from 'react';
import { InfoSection2, InfoSection3 } from '../../components';
import { homeObjOne,objOne } from './Data';

function HomeRemedy() {
  return (
    <>
      <InfoSection2 {...homeObjOne} />
      <InfoSection3 {...objOne} />
            
    </>
  );
}

export default HomeRemedy;
