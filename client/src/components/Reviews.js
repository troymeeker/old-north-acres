import React, {useContext} from "react";
import { ThemeContext } from "./App";


function Reviews(){
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
       
        color: darkTheme ? '#CCC' : '#333'

    }

    // useEffect(() => {
    //     fetch('/reviews')
    //     .then((resp) => resp.json())
    //     .then((reviews) => setReviews(reviews))
    //   }, []);

    return (
        <div className="reviews" style={themeStyles}>
           
            <h1>Reviews</h1>

            <form  className="newpost">
           <h4>CREATE NEW REVIEW</h4><br/>
             <label>Your Name </label>
             <input
                type="text"
                placeholder="user name"
                id="user_name"
             
               /><br/>
             <label>Description </label>
             <input 
                type="text"
                placeholder="description"
                className="item-description"
                id="description"
              
               /><br/>
                <label>How was your stay? </label>
             <select  >
                 <option id="category_id" value=''>Select One</option>
                 <option id="category_id" value='1'>Gold Star</option>
                 <option id="category_id" value='2'>Blue Ribbon</option>
                 <option id="category_id" value='3'>Two Thumbs Up</option>
                 <option id="category_id" value='4'>5 Stars</option>
             </select><br/>
             <label>Lodge </label>
             <select  >
                 <option id="category_id" value=''>Select One</option>
                 <option id="category_id" value='1'>Yurt</option>
                 <option id="category_id" value='2'>Cabin</option>
                 <option id="category_id" value='3'>School Bus</option>
               
             </select><br/>

             <button className="add-btn">ADD REVIEW</button>
                  
         </form>

            {/* <p>current user can add items to cart</p> */}
           
            {/* <div className="top-row">
                <div className="grid-item">Item 1</div>
                <div className="grid-item">Item 2</div>
                <div className="grid-item">Item 3</div>
            </div>
            <div className="mid-row">
                <div className="grid-item">Item 4</div>
                <div className="grid-item">Item 5</div>
                <div className="grid-item">Item 6</div>
            </div>
            <div className="bot-row">
                <div className="grid-item">Item 7</div>
                <div className="grid-item">Item 8</div>
                <div className="grid-item">Item 9</div>
            </div> */}
        </div>
    )
}

export default Reviews;