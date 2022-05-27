import React, {useContext} from "react";
import { ThemeContext } from "./App";
import sheeple from '../images/sheeple.png';

function Home(){
    // const UserContext = createContext();
    // const currentUser = useContext(UserContext);

    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
        color: darkTheme ? '#CCC' : '#333'
    }

    return(
        <div className="home" style={themeStyles}>
         
         <p className="home-text" >
             
              From the Blue Ridge Mountains to the Intracoastal Waterway, North Carolina has some sweet spots to tuck in
              for a glamping getaway.
              Its tough to beat the gorgeous setting of the regions's hills, woods, and rivers.
              And whether you're looking for an outdoorsy adventure or a simple weekend away to unplug and unwind, without getting too dirty, 
              our pet friendly lodging options offer a back-to-nature feel without sacrificing any necessities
              — on second thought, they are downright luxurious.
          </p>  
           <img src={sheeple} alt="sheep fam" className="img-home"/> 
          <p className="home-text"> We strive to create an enjoyable stay, no matter where you choose to stay, While you visit Old North Acres you can choose to meet our sheep and dogs, hike on the trails near each lodge, use our canoe, or just relax by a fire. Read our reviews to learn more about our lodging options, or use the Contact page to ask us any questions you may have!</p>
        
       
        </div>
       
    )
}


export default Home;