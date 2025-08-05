import React from 'react';
import FullFooter from './FullFooter';
import MobileFooter from './MobileFooter';
import useWindowWidth from '../../utilities/useWindowWidth';

function PageFooter() {
  const width = useWindowWidth();

  return (
    <>
      {width < 700 ? <MobileFooter key="mobile" /> : <FullFooter key="full" />}
    </>
  );
  
}

export default PageFooter;