import React, {  useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./NavBar";
import ContactForm from "./ContactForm";
import BookTrip from "./BookTrip";
import Shop from "./Shop";
import Footer from "./Footer";
import Unauth from "./Unauth";
import instalogo from "../images/insta.png"

//  const UserContext = createContext();
// const currentUser = 'current user here'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    fetch("/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setCurrentUser(user)
          setAuthChecked(true)
          
        })
       } else {
         setAuthChecked(true)
       }
    })
  }, [])
 

 if (!authChecked) { return <div></div> }
    return (     
      currentUser ? (
 
    <div>
    
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <div className="old-north-img"><h1 className="home-title">OLD NORTH ACRES</h1></div>
       
      <Routes>
          <Route path="/" element={<Home currentUser={currentUser}/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/book" element={<BookTrip currentUser={currentUser}/>}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/contact" element={<ContactForm />}/>
      

      </Routes>
   
      <Footer/>   
    
     
   </div>
  ):(
    <>
    
    <div className="old-north-img"><h1 className="home-title">OLD NORTH ACRES</h1></div>
   
      <Unauth setCurrentUser={setCurrentUser}/>
      <footer className="footer">
         <div className="footer-img" >
            <a href="https://www.instagram.com/oldnorthacres/" target="_blank" alt="instagram" rel="noreferrer"><img src={instalogo} alt="instagram logo" id="insta-img" /></a>
         </div>
      </footer>
    </>
  ));
}

export default App;
