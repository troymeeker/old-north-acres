import React from 'react'
import {FaStar} from 'react-icons/fa'

function StarRating({   starRating, setStarRating}){
    
    // const [hover, setHover] = useState(null); 
    return (
        <div>
            {[...Array(5)].map((star, i) => {

                    const ratingValue = i + 1;

                   return (<label  key={i}>
                       <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onChange = {(e) => setStarRating(e.target.value)}
                     
                        />

                       <FaStar 
                         size={30}
                         color={ratingValue <= ( starRating ) ? "#ffc107" : "#777"}
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