import React, {useContext, useState} from "react";
import {useNavigate} from 'react-router-dom';
import { ThemeContext } from "./App";
// import Reviews from "./Reviews";

import StarRating from "./StarRating";

function NewReview({onAddReview, reviews, setReviews}){
    const navigate = useNavigate();
  
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
       
        color: darkTheme ? '#222' : '#333'

    }
  
    const [description, setDescription] = useState("");
    const [lodging_id, setLodgingId] = useState('')
    const [starRating, setStarRating] = useState(null);
  

    function submitNewReview(e){
        e.preventDefault();
         
        const review = {
          
            description: description, 
            starRating: starRating,
            lodging_id: lodging_id

        }
        onAddReview(review)
     
        setDescription("")
        setStarRating(null)
        setLodgingId("")
       
        setTimeout(() => {
            navigate('/book')
        },70)
       //set timeout to ensure reviews load properly 
      

   } 
 
   function handleDescriptionChange(e){
       setDescription(e.target.value)
   }
  
    function handleLodgingChange(e){
        setLodgingId(e.target.value)
    }
     
     return (
        <div className="reviews" style={themeStyles}>
           
            <h1>Tell us about your stay!</h1>
         <div className="form-div">
            <form  onSubmit={submitNewReview} className="newreview" >
           
             <label >How was your stay with us? <p className="required-star">* </p> </label>
             <StarRating setStarRating={setStarRating} starRating={starRating} />
            
            
             <label>Description <p className="required-star">* </p> </label><br/>
             <textarea 
                type="text"
                placeholder="description"
                className="item-description"
                id="description"
                required
                onChange={handleDescriptionChange}
                value={description}
                
            />
               <br/>
                
             <label>Where did you stay?<p className="required-star"> * </p></label> 
             <select onChange={handleLodgingChange} required >
                 <option id="lodging_id" value=''>Select One</option>
                 <option id="lodging_id" value='1'>Yurt</option>
                 <option id="lodging_id" value='2'>Cabin</option>
                 <option id="lodging_id" value='3'>School Bus</option>
               
             </select><br/>
             <button className="add-btn">ADD REVIEW</button>
              <h5><p className="required-star">*</p> denotes required field</h5>
            </form>
       
        </div>
       
        </div>
    )
}

export default NewReview;