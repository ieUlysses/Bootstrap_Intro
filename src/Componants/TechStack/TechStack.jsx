import React from 'react';

function TechStack() {

    const strenths = [
        { name: "React", scale: "100%", valuenow: "100" },
        { name: "MUI", scale: "100%", valuenow: "100" },
        { name: "Bootstrap", scale: "100%", valuenow: "100" },
        { name: "CSS", scale: "75%", valuenow: "75" },
        { name: "Sass", scale: "75%", valuenow: "75" },
        { name: "Node.js", scale: "50%", valuenow: "50" },
        { name: "TypeScript", scale: "25%", valuenow: "25" },
        { name: "Python", scale: "25%", valuenow: "25" },

    ]

    return (<>
        <div className='container-fluid' style={{ width: "85vw" }}>

            {strenths.map(strenth => (
                <div classNAme="progress">
                    <div className="progress-bar mb-1 rounded bg-dark" role="progressbar" style={{ width: `${strenth.scale}` }} aria-valuenow={strenth.valuenow} aria-valuemin="0" aria-valuemax="100"><span style={{ textAlign: "left", fontSize: "larger", fontFamily: "Roboto" }}>{strenth.name}</span></div>
                </div>
            ))
            }

        </div>
    </>)
}

export default TechStack;
