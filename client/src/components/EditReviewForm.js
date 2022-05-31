import React, { useState, useEffect } from "react";
// import {FaStar} from 'react-icons/fa'
import StarTest from "./StarTest";


function EditReviewForm({onEdit, review, toggleEdit}){
        const {id, description, starRating  } = review;
        const [updatedStar, setUpdatedStar] = useState(starRating);
        const [updatedDescription, setupdatedDescription] = useState(description);
        // const [hover, setHover] = useState(null)

    useEffect(()=> {
        console.log('rerender');
    })

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
                starRating: updatedStar
            }),
        })
        .then((r) => r.json())
        .then((updatedReview) => {
            // debugger
            // alert('Your change has been noted, Press ok to see change reflected')
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
              {/* {stars} */}
              <StarTest setUpdatedStar={setUpdatedStar} updatedStar={updatedStar}/>
            </div>
            
            
            <button type="submit" onClick={handleFormSubmit}> CONFIRM</button>
        </form>            
    </div>
    )
}

export default EditReviewForm;