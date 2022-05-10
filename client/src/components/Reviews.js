import React, {useEffect, useState} from 'react'
import EachReview from './EachReview';

function Reviews(){
    
  const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews')
        .then((resp) => resp.json())
        .then((reviews) => setReviews(reviews))
      }, [setReviews]); 
   
 
    return (
        <div>  
           {reviews.map((review) => (
              <EachReview 
                key={review.id}
                review={review}
           
             />
           ))}

           </div>
    )
}

export default Reviews;