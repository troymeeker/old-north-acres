import React from 'react'
import EachReview from './EachReview';

function Reviews({reviews}){
    

   
 
    return (
        <div>  
           { reviews.map((review) => (
            <EachReview 
               key={review.id}
               review={review}
           
              
            />
           ))}
           </div>
    )
}

export default Reviews;