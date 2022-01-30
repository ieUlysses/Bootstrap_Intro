import React from "react"
import MotivationCards from "../Componants/MotivationCards/MotivationCards"
import MotivationHeader from "../Componants/MotivationHeader/MotivationHeader"
import MotivationText from "../Componants/MotivationText/MotivationText"
import TechStack from "../Componants/TechStack/TechStack"



function Motivation() {

    return (
        <>

            <div style={{ height: "100vh" }} className="container-fluid d-flex align-items-center justify-content-center ">
                <div style={{ height: "100%" }} className="row ">
                    <div className="col-sm-4  d-flex flex-column justify-content-evenly ">
                        <MotivationHeader />
                        <MotivationText />

                    </div>
                    <div className="col-sm-8 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "black" }}  >
                        <MotivationCards />

                    </div>
                </div>

            </div>

            <div style={{ height: "100vh" }} className="container-fluid d-flex align-items-center justify-content-center ">
                <div>
                    <TechStack />
                </div>
            </div>

        </>
    )
}

export default Motivation