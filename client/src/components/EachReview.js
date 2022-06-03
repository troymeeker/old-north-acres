import React, {useState} from 'react'
import EditReviewForm from './EditReviewForm';
import {FaStar} from 'react-icons/fa'
// import StarRating from './StarRating';

function EachReview({review, onDelete, onEdit, setStarRating, lodging}){
    const [editReview, setEditReview] = useState(false); 
    const { id, description, user_can_modify, starRating, user} = review;
    //get user 
    const { name } = lodging;


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
       
            {/* <p> Reviewer: {user_id}</p> */}
            
            <p>Reviewer: {user.username[0].toUpperCase() + user.username.substring(1)}</p>
            <p>Lodge name: {name}</p>
            <p>{description}</p>
            <p>Rating: </p>
               
            <div>
            {[...Array(5)].map((star, i) => {

                    const ratingValue = i + 1;

                   return (<label  key={i}>
                       <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                          
                        />

                       <FaStar 
                         size={30}
                         color={ratingValue <= (starRating) ? "#ffc107" : "#777"}
                        //  onMouseEnter={() => setHover(ratingValue)}
                        //  onMouseOut={() => setHover(null)}
                        />
                       </label>
                 )
            })} 
            
        </div>
        {user_can_modify ? ( 
            <div>
              <button onClick={toggleEdit} className='button'>EDIT REVIEW</button>
              <button onClick={handleDeleteReview} className='button'>DELETE REVIEW</button>
            </div>
        ) : (null)}

        { editReview ? 
            <EditReviewForm 
              onEdit={handleEditReview} 
              toggleEdit={toggleEdit} 
              review={review} 
            //   setStarRating={setStarRating}
            //   starRating={starRating}
            /> : null}
    
        </div>
    
     )
}

export default EachReview;