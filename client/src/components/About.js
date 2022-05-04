import React, {useContext} from "react";
import { ThemeContext } from "./App";
import sheep from '../images/sheep.png';

function About(){
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
       
        color: darkTheme ? '#CCC' : '#333'

    }

    return(
        <div className="about" style={themeStyles}>
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