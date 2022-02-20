import React from "react"
import MotivationCards from "../Componants/MotivationCards/MotivationCards"
import MotivationHeader from "../Componants/MotivationHeader/MotivationHeader"
import MotivationText from "../Componants/MotivationText/MotivationText"
import TechStack from "../Componants/TechStack/TechStack"
import TechStackText from "../Componants/TechStackText/TechStackText"



function Motivation() {

    return (
        <>



            <div style={{ height: "100vh" }} className="container-fluid d-flex flex-column align-items-center justify-content-center ">
                <div style={{ height: "100%" }} className="row  ">
                    <div className="col-sm-4  d-flex flex-column justify-content-evenly ">
                        <MotivationHeader />
                        <MotivationText />
                    </div>
                    <div className="col-sm-8 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "black" }}  >
                        <MotivationCards />
                    </div>
                </div>
            </div>
            <div style={{ height: "100vh" }} className="container-fluid d-flex flex-column align-items-center justify-content-center  mt-5">
                <div style={{ height: "100%" }} className="row ">
                    <div className="col-sm-4  d-flex flex-column justify-content-evenly align-items-center " style={{ backgroundColor: "" }}>
                        <TechStackText />
                    </div>
                    <div className="col-sm-8 d-flex flex-column justify-content-center align-items-center"   >
                        <TechStack />
                    </div>
                </div>
            </div>







        </>
    )
}

export default Motivation