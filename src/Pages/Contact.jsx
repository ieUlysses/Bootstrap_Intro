import React from "react"
import ContactForm from "../Componants/ContactForm/ContactForm"
import ContactHeader from "../Componants/ContactHeader/ContactHeader"
import ContactText from "../Componants/ContactText/ContactText"
import aboutImg from "../Media/aboutImg.JPG"
function Contact() {

    return (
        <>

            <div style={{ height: "100vh" }} className="container-fluid d-flex align-items-center justify-content-center ">



                <div style={{ height: "100%" }} className="row ">

                    <div className="col-sm-8 d-flex align-items-center" style={{ backgroundColor: "black" }}  >
                        <img src={aboutImg} className="img-fluid" alt="A smiling image of James Conway"></img>
                    </div>

                    <div className="col-sm-4  d-flex flex-column justify-content-evenly align-items-center  ">
                        <ContactHeader />
                        <ContactText />
                        <ContactForm />
                    </div>


                </div>



            </div>



        </>
    )
}

export default Contact