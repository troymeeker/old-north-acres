import React, {useContext} from "react";
import { ThemeContext } from "./App";


function Shop(){
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(80,90,70)' : 'rgb(170,185,145)', 
       
        color: darkTheme ? '#CCC' : '#333'

    }
    return (
        <div className="shop" style={themeStyles}>
           
            <h1>Shop</h1>
            <p>current user can add items to cart</p>
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