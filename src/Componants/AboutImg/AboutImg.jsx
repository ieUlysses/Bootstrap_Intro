import React from 'react';

import aboutImg from "../../Media/aboutImg.JPG"

function AboutImg() {
    return (<>
        <div style={{ height: "100%" }} className='container w-75 d-flex align-items-center '><img src={aboutImg} class="img-fluid" alt="A smiling image of James Conway"></img></div>
    </>)
}

export default AboutImg;
