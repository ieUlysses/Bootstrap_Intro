import React from "react"
import AboutHeader from "../Componants/AboutHeader/AboutHeader"
import aboutImg from "../Media/aboutImg.JPG"
import AboutText from "../Componants/AboutText/AboutText"


function About() {

    return (
        <>

            <div style={{ height: "100vh" }} className="container-fluid d-flex align-items-center justify-content-center ">


                <div style={{ height: "100%" }} className="row ">

                    <div className="col-sm-4  d-flex flex-column justify-content-evenly ">
                        <AboutHeader />
                        <AboutText />
                    </div>

                    <div className="col-sm-8 d-flex align-items-center" style={{ backgroundColor: "black" }}  >
                        <img src={aboutImg} className="img-fluid" alt="A smiling image of James Conway"></img>
                    </div>
                </div>

            </div>

        </>
    )
}

export default About