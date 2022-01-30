import React from 'react';

function MotivationCards() {

    const traits = [{ trait: "Resourcefullness", /* img: "https://picsum.photos/150/100", */ no: "1", alt: "placeholder" }, { trait: "Curiosity", /* img: "https://picsum.photos/150/100", */ no: "2", alt: "placeholder" }, { trait: "Critical thinking", /* img: "https://picsum.photos/150/100", */ no: "3", alt: "placeholder" }]

    return (
        <>

            <div className='container-fluid  d-flex justify-content-evenly align-items-center row  '>
                {traits.map((trait) =>
                (
                    <div className="card col-sm-4 m-2" style={{ width: "16rem", height: "min-content" }}>
                        <h4 className='text-warning' style={{ fontFamily: "YellowTail", }}>
                            #{trait.no}
                        </h4>
                        < div className="card-body" >
                            <h5 className="card-title" style={{ fontFamily: "Roboto", fontWeight: "bolder", textAlign: "center" }}>{trait.trait}</h5>
                        </div>
                    </div>
                )
                )}
            </div >

        </>
    )
}

export default MotivationCards;
