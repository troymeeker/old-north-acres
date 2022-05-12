import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa'

function StarRating(){
    const [starRating, setStarRating] = useState(null);
    // const [hover, setHover] = useState(null); 
    return (
        <div>
            {[...Array(5)].map((star, i)=> {

                    const ratingValue = i + 1;

                   return (<label  key={i}>
                       <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => setStarRating(ratingValue)}
                        />

                       <FaStar 
                         size={22}
                         color={ratingValue <= ( starRating) ? "#ffc107" : "#555"}
                        //  onMouseEnter={() => setHover(ratingValue)}
                        //  onMouseOut={() => setHover(null)}
                        />
                       </label>
                   )
            })}
            
        </div>
    )
}

export default StarRating;