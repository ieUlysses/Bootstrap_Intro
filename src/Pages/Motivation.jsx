import React from "react"
import MotivationCards from "../Componants/MotivationCards/MotivationCards"
import MotivationHeader from "../Componants/MotivationHeader/MotivationHeader"



function Motivation() {

    return (
        <>





            <div style={{ height: "100%" }} className="row ">

                <div className="col-sm-8 d-flex align-items-center" style={{ backgroundColor: "black" }}  >
                    <MotivationHeader />
                </div>

                <div className="col-sm-4  d-flex flex-column justify-content-evenly align-items-center  ">

                </div>


            </div>

            <div style={{ height: "100%" }} className="row ">

                <div className="col-sm-12 d-flex align-items-center" style={{ backgroundColor: "black" }}  >
                    <MotivationCards />
                </div>

            </div>





        </>
    )
}

export default Motivation