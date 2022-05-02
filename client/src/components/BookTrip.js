import React from "react";
import yurt from "../images/yurt.jpg"
import cabin from "../images/cabin.jpg"
import schoolBus from "../images/school-bus.jpg"


function BookTrip(){
    return (
        <div className="book_trip">
            <h2>Schedule your trip!</h2>
            {/* <p>Log in or Signup to book a trip!</p> */}
            <p>Form or calendar here to select trip and display trips for current user</p>
            <p>Click on one of our options to learn more! </p>
            <div className="image-grid">
                <img src={yurt} alt="yurt" className="yurt-photo"/>
                <img src={cabin} alt="cabin" className="yurt-photo"/>
                <img src={schoolBus} alt="yurt" className="yurt-photo"/>
                {/* https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1460,h_1095/at%2Fnews-culture%2F2022-01%2F3e59eab6-3f3a-4a8e-bb90-e20501e2687d */}
            </div>
        </div>
    )
}

export default BookTrip;