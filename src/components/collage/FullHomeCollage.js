import React from 'react';
import coastImg from "../../images/compressed/chris-leipelt-6n-gB_fjkN8-unsplash-500x625.jpg";
import blowDryImg from "../../images/compressed/jenna-oslin-MmDO1-ezCE4-unsplash-500x750.jpg";
import braidImg from "../../images/compressed/liubov-ilchuk-kX_5Kd7FjdU-unsplash-500x678.jpg";
import sun from "../../images/svgs/noun-sun-7902639.svg";
import waves from "../../images/svgs/noun-water-water-1235535.svg";

function FullHomeCollage() {
    
    return (
        <>
            <img className="collage-img coast" src={ coastImg } alt="california coast"/>
            <img className="collage-img brush" src={ blowDryImg } alt="round brush blow drying hair"/>
            <img className="collage-img braid" src={ braidImg } alt="braided hair"/>
            <img src={ sun } alt="doodle of a sun" className="sun-decor" />
            <img src={ waves } alt="doodle of waves" className="wave-decor" />
        </>
      );
}

export default FullHomeCollage;