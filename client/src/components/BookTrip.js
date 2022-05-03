import React, {useState} from "react";
import yurt from "../images/yurt.jpg"
import cabin from "../images/cabin.jpg"
import schoolBus from "../images/school-bus.jpg"
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";


function BookTrip(){ 
 
   const [popup, setPopup] = useState(false); 
             
   function handleClose(){
    setPopup(false);
   }


    return (
         <div className="book_trip"> 
            <h2>Schedule your trip!</h2>
          
            {/* <p>Form or calendar here to select trip and display trips for current user</p>  */}
             <p>Click on one of our options to learn more! </p>
  
          
              <OutsideClickHandler onOutsideClick={() => setPopup(false)}>  
                 <div className="image-grid" > 
                    <img src={yurt} alt="yurt" className="yurt-photo" onClick={() => setPopup(true)}/>
                    <img src={cabin} alt="cabin" className="yurt-photo" onClick={() => setPopup(true)}/>
                    <img src={schoolBus} alt="yurt" className="yurt-photo" onClick={() => setPopup(true)}/>
                </div>
               </OutsideClickHandler >
               { popup && ( 
                    <div className="popup" >
                      <div className="popup-content">              
                      
                        <h3>Lodge #_ </h3>
                         <button className="popup-button" onClick={handleClose}>&times;</button>
                        <p>This rustic lodging option sleeps _ and is great for_. </p>
                        <p>Click HERE to schedule your visit to Lodge #_</p>
                      </div>
                    </div>
                )}                
         </div> 
    );
};

export default BookTrip;