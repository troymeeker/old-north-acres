import React from "react";
import sheep from '../images/sheep.png';

function About(){

    return(
        <div className="about">
           <h2>About</h2> 
           <p className="about-section">
               We love adventuring, caring for our small group of farm animals, and living in beautiful North Carolina. <br/>
             
               Here at Old North Acres we offer a handful of delightful lodging options, whether you want to simply park your van and sit by our firepits, stay in our renovated school bus, our 
               small cabin, or our guest house, we have an option for you! <br/>
            <div ><img src={sheep} alt="sheep" className="sheep"/> </div>
               Come visit us, We'd love to show you why we love it here!
           </p>
        </div>
    )
}


export default About;