import React, {useState, useContext, useEffect} from "react";
import { ThemeContext } from "./App";

import Lodge from "./Lodge";


function BookTrip(){ 

    const [lodgings, setLodgings] = useState([]);

    const darkTheme = useContext(ThemeContext); 

    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
       
        color: darkTheme ? '#CCC' : '#333'
    }
 

     useEffect(() => {
        fetch('/lodgings')
        .then((resp) => resp.json())
        .then((lodgings) => setLodgings(lodgings))
     }, []);


    return (
         <div className="book_trip" style={themeStyles}> 
            <h2>Learn about our Lodging options</h2>
          
            {/* <p>Form or calendar here to select trip and display trips for current user</p>  */}
               
              <div> 

               {lodgings.map((lodging) => (
                    <Lodge 
                        key={lodging.id} 
                        lodging={lodging}
                       
                    />
               ))}
           
            </div>       
        
         </div> 
    );
};

export default BookTrip;