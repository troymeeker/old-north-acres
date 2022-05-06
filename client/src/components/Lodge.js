import React from "react";
// import yurt from "../images/yurt.jpg"
// import cabin from "../images/cabin.jpg"
// import schoolBus from "../images/school-bus.jpg"

function Lodge({setPopup, lodging}){

    const {id, image, description, sleeps, shower } = lodging; 

    return (
       
       <div  className="image-grid" >
           <p>Lodge # {id}</p>
            <img src={image} className="yurt-photo" alt="" /> 
           <p>{description}</p>
           <p>Sleeps: {sleeps}</p>

           <p>Shower: {shower}</p>

            {/* <img src={} alt="" onClick={()=> setPopup(true)}/> */}
            {/* <img src={yurt} alt="yurt" className="yurt-photo" onClick={() => setPopup(true)}/>
            <img src={cabin} alt="cabin" className="yurt-photo" onClick={() => setPopup(true)}/>
            <img src={schoolBus} alt="yurt" className="yurt-photo" onClick={() => setPopup(true)}/>  */}
        </div>
    )
}

export default Lodge;