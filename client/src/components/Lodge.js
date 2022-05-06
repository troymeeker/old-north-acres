import React from "react";


function Lodge({ lodging}){

     const {id, image, description, sleeps, shower} = lodging; 

    return (
       
       <div  >
         <p>Lodge # {id}</p> 
            <img src={image} className="yurt-photo" alt="" />           
             <p>{description}</p>
             <p>Sleeps: {sleeps}</p>
             <p>Shower: {shower ? 'Yes' : 'No'}</p>  

          

        </div>
    )
}

export default Lodge;