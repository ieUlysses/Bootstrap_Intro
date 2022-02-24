import React from 'react';

function TechStack() {

    const strenths = [
        { name: "React", scale: "100%", valuenow: "100" },
        { name: "MUI", scale: "100%", valuenow: "100" },
        { name: "JavaScript", scale: "75%", valuenow: "75" },
        { name: "CSS", scale: "75%", valuenow: "75" },
        { name: "Sass", scale: "75%", valuenow: "75" },
        { name: "Node.js", scale: "50%", valuenow: "50" },
        { name: "TS", scale: "10%", valuenow: "10" },
        { name: "Python", scale: "10%", valuenow: "10" },

    ]

    return (<>
        <div className='container-fluid'>

            {strenths.map(strenth => (

                <div className="progress-bar bg-light mb-1" role="progressbar" style={{ width: `${strenth.scale}` }} aria-valuenow={strenth.valuenow} aria-valuemin="0" aria-valuemax="100"><span className="text-dark" style={{ textAlign: "left", fontFamily: "Roboto" }}>{strenth.name}</span></div>

            ))
            }

        </div>
    </>)
}

export default TechStack;
