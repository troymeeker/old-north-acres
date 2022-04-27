import React from "react";


function Shop({currentUser}){
    return (
        <div className="shop">
            {/* <h3>{`Hello ${currentUser}`}</h3> */}
            <h1>Shop</h1>
            <div className="top-row">
                <div className="grid-item">Item 1</div>
                <div className="grid-item">Item 2</div>
                <div className="grid-item">Item 3</div>
            </div>
            <div className="mid-row">
                <div className="grid-item">Item 4</div>
                <div className="grid-item">Item 5</div>
                <div className="grid-item">Item 6</div>
            </div>
            <div className="bot-row">
                <div className="grid-item">Item 7</div>
                <div className="grid-item">Item 8</div>
                <div className="grid-item">Item 9</div>
            </div>
        </div>
    )
}

export default Shop;