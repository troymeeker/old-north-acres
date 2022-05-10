import React, {  useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./NavBar";
import ContactForm from "./ContactForm";
import BookTrip from "./BookTrip";
import NewReview from "./NewReview";
import Footer from "./Footer";
import Unauth from "./Unauth";
import instalogo from "../images/insta.png"

  export const ThemeContext = React.createContext();


function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [reviews, setReviews] = useState([]);

  function toggleTheme(){
    setDarkTheme((darkTheme) => !darkTheme)
  }

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


  function handleReviewAdd(review){
    
    fetch("/reviews", {
        method: "POST", 
        headers: {
           "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    
    .then((resp) => resp.json())
    .then((review) => {
         setReviews([...reviews,review])
    })
  }
 

 if (!authChecked) { return <div></div> }
    return (     
      currentUser ? (
 
    <div>
    <ThemeContext.Provider value={darkTheme}>
     
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} toggleTheme={toggleTheme} darkTheme={darkTheme}/>
        <div className="old-north-img"><h1 className="home-title">OLD NORTH ACRES</h1></div>
       
      <Routes> 
        
          <Route path="/" element={<Home  />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/book" element={<BookTrip />}/>
          <Route path="/newreview" element={<NewReview onNewReview={handleReviewAdd}/>}/>
          <Route path="/contact" element={<ContactForm />}/>
      

      </Routes>
     
   
      <Footer/>   
    
      </ThemeContext.Provider>
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
