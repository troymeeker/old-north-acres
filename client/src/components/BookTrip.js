import React, {useState, useContext, useEffect} from "react";
import { ThemeContext } from "./App";
import Lodge from "./Lodge";

// import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";


function BookTrip(){ 

    const [lodgings, setLodgings] = useState([]);

    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
       
        color: darkTheme ? '#CCC' : '#333'
    }
 
//    const [popup, setPopup] = useState(false); 
             
//    function handleClose(){
//     setPopup(false);
//    }

     useEffect(() => {
        fetch('/lodgings')
        .then((resp) => resp.json())
        .then((lodgings) => setLodgings(lodgings))
      }, []);


    return (
         <div className="book_trip" style={themeStyles}> 
            <h2>Schedule your trip!</h2>
          
            {/* <p>Form or calendar here to select trip and display trips for current user</p>  */}
             <p>Click on one of our options to learn more! </p>
               
              {/* <OutsideClickHandler onOutsideClick={() => setPopup(false)}>   */}
              <div> 

               {lodgings.map((lodging) => (
                    <Lodge 
                        key={lodging.id} 
                        lodging={lodging}
                    />
               ))}

              </div>
                  
            
               {/* </OutsideClickHandler >  */}
{/*             { popup && ( 
                           <div className="popup" >
                      {lodgings.map((lodging) => (
                      <div className="popup-content">  
                         <h3>Lodge #{lodging.id}</h3>
                        <p>description:{lodging.description}</p>
                         <button className="popup-button" onClick={handleClose}>&times;</button>
                        <p>sleeps: {lodging.sleeps} </p>
                         <p>Shower: </p>
                        <p>Click HERE to schedule your visit to Lodge #_</p>
                       </div>
                  ))}
                  </div>   */}
                     {/* )}                 */}
         </div> 
    );
};

export default BookTrip;