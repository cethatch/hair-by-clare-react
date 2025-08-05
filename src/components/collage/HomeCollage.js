import MobileHomeCollage from "./MobileHomeCollage";
import FullHomeCollage from "./FullHomeCollage";
import React from "react";
import useWindowWidth from "../../utilities/useWindowWidth";

function HomeCollage() {
    const width = useWindowWidth();
    return (
        <>
          {width < 700 ? <MobileHomeCollage key="mobile" /> : <FullHomeCollage key="full" />}
        </>
      );
}

export default HomeCollage;