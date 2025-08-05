import React from 'react';
import FullHeader from './FullHeader';
import MobileHeader from './MobileHeader';
import useWindowWidth from '../../utilities/useWindowWidth';

function PageHeader() {
  const width = useWindowWidth();

  return (
    <>
      {width < 700 ? <MobileHeader /> : <FullHeader />}
    </>
  );
  
}

export default PageHeader;