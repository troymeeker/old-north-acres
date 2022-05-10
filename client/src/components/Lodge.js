import React from "react";
// import Reviews from "./Reviews";


function Lodge({ lodging}){


     const {id, name, image, description, sleeps, shower} = lodging; 

    return (
       
       <div className="lodge-item" >
          <p>Lodge # {id} : {name} </p> 
            <img src={image} className="yurt-photo" alt="lodge" />           
             <p>{description}</p>
             <p>Sleeps: {sleeps}</p>
             <p>Shower: {shower ? 'Yes' : 'No'}</p>  
           
          <p>Reviews:</p>
          {/* <Reviews reviews={reviews} setReviews={setReviews}/>   */}
          {/* if review.lodging_id === lodging.id render review for lodge */}
        <br/>

        </div>
    )
}

export default Lodge;