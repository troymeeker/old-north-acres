import React, {useState} from 'react'
import EditReviewForm from './EditReviewForm';

function EachReview({review, onDelete, onEdit}){
    const [editReview, setEditReview] = useState(false); 
    const { id, description, rating, lodging_id, user_can_modify, user_id } = review;


    function toggleEdit(){
        setEditReview(!editReview)
    }

    function handleDeleteReview(){
        fetch(`reviews/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
              onDelete(id); 
            }
        })
    }
    function handleEditReview(updatedReview){
       onEdit(updatedReview);
    }


    return (
        <div className="each-review">
            <p> Reviewer: {user_id}</p>
            {/* author = currentUser.username */}
            <p> Lodge: {lodging_id} </p>
            <p>{description}</p>
            <p>Rating: {rating}</p>
           

        { editReview ? <EditReviewForm onEdit={handleEditReview} toggleEdit={toggleEdit} review={review} /> : null}
        {user_can_modify ? ( 
            <div>
              <button  onClick={toggleEdit}>EDIT REVIEW</button>
              <button onClick={handleDeleteReview}>DELETE REVIEW</button>
            </div>
        ) : (null)}
              
 
        </div>
    )
}

export default EachReview;