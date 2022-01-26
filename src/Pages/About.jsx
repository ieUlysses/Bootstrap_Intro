import React from "react"
import AboutHeader from "../Componants/AboutHeader/AboutHeader"
import AboutImg from "../Componants/AboutImg/AboutImg"
import AboutText from "../Componants/AboutText/AboutText"


function About() {

    return (
        <>

            <div style={{ height: "100vh" }} className="container-fluid d-flex align-items-center justify-content-center ">



                <div className="container w-25">
                    <AboutHeader />
                    <AboutText />
                </div>

                <AboutImg />

            </div>

        </>
    )
}

export default About