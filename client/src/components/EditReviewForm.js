import React, { useState } from "react";


function EditReviewForm({onEdit, review, toggleEdit}){
        const {id, description,  } = review;
        // const [updatedRating, setUpdatedRating] = useState(rating);
        const [updatedDescription, setupdatedDescription] = useState(description);

    
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
                // rating: updatedRating
                
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
            <label>Edit Description</label>
            <input className="description-field" type="text" placeholder={description} value={updatedDescription} onChange={(e) => setupdatedDescription(e.target.value)}></input><br/>
            {/* <label>Edit Rating</label> 
            <input type="text" placeholder="New rating" value={updatedRating} onChange={(e) => setUpdatedRating(e.target.value)}>
                
            </input><br/> */}
            
            <button type="submit" onClick={handleFormSubmit}> Confirm Edit</button>
        </form>            
    </div>
    )
}

export default EditReviewForm;