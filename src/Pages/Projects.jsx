import React from 'react'

import ProjectsHeader from '../Componants/ProjectsHeader/ProjectsHeader'
import ProjectsText from '../Componants/ProjectsText/ProjectsText'
import Featured from '../Componants/Projects/Featured'

function Projects() {
    return (
        <div style={{ height: "100vh" }} className="container-fluid m-0 p-0 d-flex flex-column align-items-center justify-content-center  ">
            <div style={{ height: "100%" }} className="row ">
                <div className="col-sm-4  d-flex flex-column justify-content-around align-items-left " style={{ backgroundColor: "black" }}>
                    <ProjectsHeader />
                    <ProjectsText />

                </div>
                <div className="col-sm-8 d-flex  justify-content-center align-items-center container-fluid"   >

                    <Featured />
                </div>
            </div>
        </div>
    )
}

export default Projects