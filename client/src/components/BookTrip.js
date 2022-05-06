import React, {useState, useContext, useEffect} from "react";
import { ThemeContext } from "./App";
import Lodge from "./Lodge";

import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";


function BookTrip(){ 
    const [lodgings, setLodgings] = useState([]);

    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
       
        color: darkTheme ? '#222' : '#333'

    }
 
   const [popup, setPopup] = useState(false); 
             
   function handleClose(){
    setPopup(false);
   }

     useEffect(() => {
        fetch('/lodgings')
        .then((resp) => resp.json())
        .then((lodgings) => setLodgings(lodgings))
      }, []);

//    function findLodgeInfo(){
   
//    }


    return (
         <div className="book_trip" style={themeStyles}> 
            <h2>Schedule your trip!</h2>
          
            {/* <p>Form or calendar here to select trip and display trips for current user</p>  */}
             <p>Click on one of our options to learn more! </p>
               
              <OutsideClickHandler onOutsideClick={() => setPopup(false)}>  
              <div> 

               {lodgings.map((lodging) => (
                    <Lodge 
                        key={lodging.id} 
                        setPopup={setPopup} 
                        lodging={lodging}
                    />
               ))}

              </div>
                    {/* <img src={yurt} alt="yurt" className="yurt-photo" onClick={() => setPopup(true)}/>
                    <img src={cabin} alt="cabin" className="yurt-photo" onClick={() => setPopup(true)}/>
                    <img src={schoolBus} alt="yurt" className="yurt-photo" onClick={() => setPopup(true)}/> */}
            
               </OutsideClickHandler > 
           
               { popup && ( 
                    <div className="popup" >
                      <div className="popup-content">              
                        <h3>Lodge #_ </h3>
                        <p>description: _ </p>
                         <button className="popup-button" onClick={handleClose}>&times;</button>
                        <p>sleeps: _  </p>
                         <p>Shower: y/n</p>
                        <p>Click HERE to schedule your visit to Lodge #_</p>
                      </div>
                    </div>
                )}                
         </div> 
    );
};

export default BookTrip;