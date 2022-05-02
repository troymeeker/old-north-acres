import React from "react";
import sheep from '../images/sheep.png';

function About(){

    return(
        <div className="about">
           <h2>About</h2> 
           <div className="about-section">
              <p> We love adventuring, caring for our small group of farm animals, and living in beautiful North Carolina. <br/>
             
               Here at Old North Acres we offer a handful of delightful lodging options, whether you want to simply park your van and sit by our firepits, stay in our renovated school bus, our 
               small cabin, or our yurt, we have an option for you!</p> <br/>
                <img src={sheep} alt="sheep" className="sheep"/> 
              <p>Come visit us, We'd love to show you why we love it here!</p> 
           </div>
        </div>
    )
}


export default About;