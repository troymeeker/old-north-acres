import React, { useState } from "react";
import {FaStar} from 'react-icons/fa'


function EditReviewForm({onEdit, review, toggleEdit}){
        const {id, description, starRating  } = review;
        const [updatedRating, setUpdatedRating] = useState(starRating);
        const [updatedDescription, setupdatedDescription] = useState(description);
        // const [hover, setHover] = useState(null)

    
    function handleFormSubmit(e){
          e.preventDefault();
          toggleEdit();
       

        fetch(`/reviews/${id}`, {
            method: "PATCH" , 
            headers: {
               "Content-Type":"application/json",
            },
            body: JSON.stringify({ 
                description: updatedDescription,
                starRating: updatedRating
            }),
        })
        .then((r) => r.json())
        .then((updatedReview) => {
            onEdit(updatedReview)
        });
    }
   
 
    return ( 
    <div >
                        
        <form >
            <label>Edit Description</label><br/>
            <textarea className="description-field" type="text" placeholder={description} value={updatedDescription} onChange={(e) => setupdatedDescription(e.target.value)}></textarea><br/>
           
             <label>Edit Rating</label> 
             <div>
              {[...Array(5)].map((star, i) => {

                    const updatedRating = i + 1;

               return(<label key={i}>
                       <input 
                            type="radio" 
                            name="rating" 
                            value={updatedRating}
                            onClick = {(e) => setUpdatedRating(e.target.value)}
                        />

                       <FaStar 
                         size={30}
                         color={updatedRating <= ( starRating) ? "#ffc107" : "#777"}
                        //   onMouseEnter={() => setHover(ratingValue)}
                        //   onMouseOut={() => setHover(null)}
                        />
               </label>)
              })}
            </div>
            
            
            <button type="submit" onClick={handleFormSubmit}> Confirm Edit</button>
        </form>            
    </div>
    )
}

export default EditReviewForm;