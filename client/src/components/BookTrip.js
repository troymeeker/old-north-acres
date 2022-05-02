import React, {useState, useRef, useEffect} from "react";
import yurt from "../images/yurt.jpg"
import cabin from "../images/cabin.jpg"
import schoolBus from "../images/school-bus.jpg"
 import Popup from "./Popup";





function BookTrip(){ 
     const ref = useRef(); 

     const [popup, setPopup] = useState(false); 

    useEffect(() => {
        const checkClickOutside = (e) => {
            if (popup  && ref.current && !ref.current.contains(e.target)){
              setPopup(false);
            }
        };

        document.addEventListener('mousedown', checkClickOutside)

        return () => {
            document.removeEventListener('mousedown', checkClickOutside)
        };
    }, [popup]);
   
   

  


    return (
         <div className="book_trip" >
            <h2>Schedule your trip!</h2>
         
            <p>Form or calendar here to select trip and display trips for current user</p>
            <p>Click on one of our options to learn more! </p>
            <div className="image-grid" ref={ref}> 
                
                    <img src={yurt} alt="yurt" className="yurt-photo" onClick={() => setPopup((popup) => !popup)}/>
                    <img src={cabin} alt="cabin" className="yurt-photo" onClick={() => setPopup((popup) => !popup)}/>
                    <img src={schoolBus} alt="yurt" className="yurt-photo" onClick={() => setPopup((popup) => !popup)}/>
             
                 <Popup trigger={popup} setPopup={setPopup}>
                    <h3>Lodge #_ </h3>
                    <p>This rustic lodging option sleeps _ and is great for_. </p>
                    <p>Click HERE to schedule your visit to Lodge #_</p>
                </Popup>   
              
             </div>

           
         </div> 
    );
};

export default BookTrip;