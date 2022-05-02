import React from "react";

function Popup(props){
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
           
              
              {props.children}
              <button className="popup-button" onClick={() => props.setPopup(false)}>x</button>
            </div>
        </div>
    ) : ""; 
}

export default Popup;