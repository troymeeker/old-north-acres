import React, {useEffect, useState} from 'react'
import EachReview from './EachReview';

function Reviews(){
    
  const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews')
        .then((resp) => resp.json())
        .then((reviews) => setReviews(reviews))
      }, [setReviews]); 
   
    function handleReviewDelete(id){
      const updatedReviews = reviews.filter((rev) => rev.id !== id)
      setReviews(updatedReviews);
    }
    function handleReviewEdit(updatedReview){
        const updatedReviews = reviews.map((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview;
            } else {
                return review;
            }
        })
        setReviews(updatedReviews)

    }
 
    return (
        <div>  
           {reviews.map((review) => (
              <EachReview 

                key={review.id}
                review={review}
                onDelete={handleReviewDelete}
                onEdit={handleReviewEdit}
              
             />
           ))}

           </div>
    )
}

export default Reviews;