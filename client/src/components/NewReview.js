import React, {useContext, useState} from "react";
import { ThemeContext } from "./App";
import Reviews from "./Reviews";


function NewReview({onNewReview, reviews, setReviews}){

    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
       
        color: darkTheme ? '#CCC' : '#333'

    }
    const [username, setUserName] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [lodging_id, setLodgingId] = useState("");
    

    function submitNewReview(e){
        e.preventDefault();
         
        const review = {
            username: username, 
            description: description, 
            rating: rating, 
            lodging_id: lodging_id, 
            
        }
        onNewReview(review)
        setUserName("")
        setDescription("")
        setRating("")
        setLodgingId("")
        // console.log(review);
       

   } 
   function handleUserNameChange(e){
       setUserName(e.target.value)
   }
   function handleDescriptionChange(e){
       setDescription(e.target.value)
   }
     function handleRatingChange(e){
        setRating(e.target.value)
     }
    function handleLodgingChange(e){
        setLodgingId(e.target.value)
    }

    return (
        <div className="reviews" style={themeStyles}>
           
            <h1>Reviews</h1>
         <div className="form-div">
            <form  onSubmit={submitNewReview} className="newpost" >
           <h4>CREATE NEW REVIEW</h4><br/>
             <label>Your Name </label>
             <input
                type="text"
                placeholder="user name"
                id="user_name"
                onChange={handleUserNameChange}
                value={username}
               /><br/>
             <label>Description </label>
             <textarea 
                type="text"
                placeholder="description"
                className="item-description"
                id="description"
                onChange={handleDescriptionChange}
                value={description}
               /><br/>
                <label>How was your stay? </label>
             <select onChange={handleRatingChange} >
                 <option value=''>Select One</option>
                 <option value='1'>Gold Star</option>
                 <option value='2'>Blue Ribbon</option>
                 <option value='3'>Two Thumbs Up</option>
                 <option value='4'>5 Stars</option>
             </select><br/>
             <label>Lodge </label> 
             <select  onChange={handleLodgingChange}>
                 <option id="lodging_id" value=''>Select One</option>
                 <option id="lodging_id" value='1'>Yurt</option>
                 <option id="lodging_id" value='2'>Cabin</option>
                 <option id="lodging_id" value='3'>School Bus</option>
               
             </select><br/>
             <button className="add-btn">ADD REVIEW</button>
            </form>

        </div>
        <div>
             
            <p>Reviews here</p>
             <Reviews />  
        </div>
        </div>
    )
}

export default NewReview;