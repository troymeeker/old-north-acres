import React, {useState} from "react";
import yurt from "../images/yurt.jpg"
import cabin from "../images/cabin.jpg"
import schoolBus from "../images/school-bus.jpg"
import Popup from "./Popup";


function BookTrip(){
    const [popup, setPopup] = useState(false); 

function handleReserve(){
    setPopup(true);
}

    return (
        <div className="book_trip">
            <h2>Schedule your trip!</h2>
            {/* <p>Log in or Signup to book a trip!</p> */}
            <p>Form or calendar here to select trip and display trips for current user</p>
            <p>Click on one of our options to learn more! </p>
            <div className="image-grid">
                <img src={yurt} alt="yurt" className="yurt-photo" onClick={() => setPopup(true)}/>
                <img src={cabin} alt="cabin" className="yurt-photo" onClick={handleReserve}/>
                <img src={schoolBus} alt="yurt" className="yurt-photo" onClick={handleReserve}/>
                
                <Popup trigger={popup} setPopup={setPopup}>
                    <h3>Lodge #_ </h3>
                    <p>This rustic lodging option sleeps _ and is great for_. </p>
                    <p>Click HERE to schedule your visit to Lodge #_</p>
                </Popup> 
             
            </div>
           
        </div>
    )
}

export default BookTrip;