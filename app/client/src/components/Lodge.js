import React from "react";
import Reviews from "./Reviews";

function Lodge({ lodging}){
      

     const {id, name, image, description, sleeps, shower} = lodging; 

    return (
      //  
       <div className="lodge-item" >
          <p>Lodge # {id} : {name} </p> 
            <img src={image} className="yurt-photo" alt="lodge" />           
             <p>{description}</p>
             <p>Sleeps: {sleeps}</p>
             <p>Shower: {shower ? 'Yes' : 'No'}</p>  
            
             <p>Reviews here:</p>
           {/* either filter reviews here or in each review map */}
          
            <Reviews lodging={lodging}/>  
        
        <br/>

        </div>
    )
}

export default Lodge;