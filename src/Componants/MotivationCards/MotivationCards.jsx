import React from 'react';

function MotivationCards() {

    const traits = [{ trait: "Resourcefullness", img: "https://picsum.photos/150/100", no: "1", alt: "placeholder" }, { trait: "Curiosity", img: "https://picsum.photos/150/100", no: "2", alt: "placeholder" }, { trait: "Critical thinking", img: "https://picsum.photos/150/100", no: "3", alt: "placeholder" }]

    return (

        <>
            <div className='container-fluid d-flex justify-content-evenly'>
                {traits.map((trait) =>
                (<div style={{ backgroundColor: "red", width: "25%" }} className='d-flex'>
                    <img style={{ float: "left" }} src={trait.img} alt={trait.alt} key={trait.index} />
                </div>)
                )}
            </div>
        </>
    )
}

export default MotivationCards;
