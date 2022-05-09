import React, {useContext} from "react";
import { ThemeContext } from "./App";

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
              our pet friendly lodging options offer a back-to-nature feel without sacrificing any creature comforts
              — on second thought, they are downright luxurious.
          </p>
        
        </div>
       
    )
}


export default Home;