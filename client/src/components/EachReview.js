import React from 'react'

function EachReview({review, onDelete}){
    const { id, description, rating, lodging_id, user_can_modify, user_id } = review;

    function handleDeleteReview(){
        fetch(`reviews/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
              onDelete(id); 
            }
        })
    }
    function handleEditReview(){
        console.log('edit');
    }


    return (
        <div className="each-review">
            <p> {user_id}</p>
            {/* author = currentUser.username */}
            <p> Lodge: {lodging_id} </p>
            <p>{description}</p>
            <p>Rating: {rating}</p>
           

        {user_can_modify ? ( 
            <div>
              <button  onClick={handleEditReview}>EDIT REVIEW</button>
              <button onClick={handleDeleteReview}>DELETE REVIEW</button>
            </div>
        ) : (null)}
              
 
        </div>
    )
}

export default EachReview;