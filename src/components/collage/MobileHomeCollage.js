import React from 'react';
import coastImg from "../../images/compressed/chris-leipelt-6n-gB_fjkN8-unsplash-500x625.jpg";
import braidImg from "../../images/compressed/liubov-ilchuk-kX_5Kd7FjdU-unsplash-500x678.jpg";
import sun from "../../images/svgs/noun-sun-7902639.svg";

function MobileHomeCollage() {
    
    return (
        <>
            <img className="collage-img coast" src={ coastImg } alt="california coast"/>
            <img className="collage-img braid" src={ braidImg } alt="braided hair"/>
            <img src={ sun } alt="doodle of a sun" className="sun-decor" />
        </>
      );
}

export default MobileHomeCollage;
