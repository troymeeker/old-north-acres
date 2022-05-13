import React from "react";



function Lodge({ lodging}){


     const {id, name, image, description, sleeps, shower} = lodging; 

    return (
       
       <div className="lodge-item" >
          <p>Lodge # {id} : {name} </p> 
            <img src={image} className="yurt-photo" alt="lodge" />           
             <p>{description}</p>
             <p>Sleeps: {sleeps}</p>
             <p>Shower: {shower ? 'Yes' : 'No'}</p>  
           
        
         
         
        <br/>

        </div>
    )
}

export default Lodge;