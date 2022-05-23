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
    // const [firstName, setFirstName] = useState("");
    const [description, setDescription] = useState("");
    
    const [lodging_id, setLodgingId] = useState('')
    const [starRating, setStarRating] = useState(null);
  

    function submitNewReview(e){
        e.preventDefault();
         
        const review = {
          
            description: description, 
            lodging_id: lodging_id,
            starRating: starRating
        }
        onAddReview(review)
        // setFirstName("")
        setDescription("")
        setStarRating(null)
        setLodgingId("")
        navigate('/book');

   } 
 
   function handleDescriptionChange(e){
       setDescription(e.target.value)
   }
  
    function handleLodgingChange(e){
        setLodgingId(e.target.value)
    }
     
 

    return (
        <div className="reviews" style={themeStyles}>
           
            <h1>Reviews</h1>
         <div className="form-div">
            <form  onSubmit={submitNewReview} className="newreview" >
           <h4>TELL US ABOUT YOUR STAY!</h4>
             <label>How was your stay with us?</label>
             <StarRating setStarRating={setStarRating} starRating={starRating}/>
            
            
             <label>Description </label><br/>
             <textarea 
                type="text"
                placeholder="description"
                className="item-description"
                id="description"
                onChange={handleDescriptionChange}
                value={description}
                
            />
               <br/>
                
             <label>Lodge </label> 
             <select  onChange={handleLodgingChange}>
                 <option id="lodging_id" value={0}>Select One</option>
                 <option id="lodging_id" value={1}>Yurt</option>
                 <option id="lodging_id" value={2}>Cabin</option>
                 <option id="lodging_id" value={3}>School Bus</option>
               
             </select><br/>
             <button className="add-btn">ADD REVIEW</button>
            </form>

        </div>
       
        </div>
    )
}

export default NewReview;