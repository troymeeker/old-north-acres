import React, {useEffect, useState} from 'react'

import EachReview from './EachReview';

function Reviews({lodging}){

  const [starRating, setStarRating] = useState(null)
  const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews')
        .then((resp) => resp.json())
        .then((reviews) => setReviews(reviews))
    }, []); 
   
    function handleReviewDelete(id){
      const updatedReviews = reviews.filter((review) => review.id !== id)
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
           {/* //reviews.filter here */}
           {reviews.map((review) => (
               //filter 
              <EachReview 

                key={review.id}
                review={review}
                onDelete={handleReviewDelete}
                onEdit={handleReviewEdit}
                starRating={starRating}
                setStarRating={setStarRating}
                lodging={lodging}
             />
           ))}
          
           {/* <button  onClick={navToLodges}> See all Reviews</button>  */}

           </div>
    )
}

export default Reviews;