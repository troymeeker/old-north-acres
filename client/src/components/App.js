import React, { createContext, useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./NavBar";
import ContactForm from "./ContactForm";
import BookTrip from "./BookTrip";
import Shop from "./Shop";
import Footer from "./Footer";

 const UserContext = createContext();
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
 

//  if (!authChecked) { return <div>test</div> }
//     return (     
//       currentUser ? (
  return(
    <UserContext.Provider value={currentUser}>
      <Router>
         <Navbar />
         <div className="old-north-img"><h1 className="home-title">OLD NORTH ACRES</h1></div>
       
         <Routes>
           <Route path="/" element={<Home currentUser={currentUser}/>}/>
           <Route path="/about" element={<About />}/>
           <Route path="/book" element={<BookTrip currentUser={currentUser}/>}/>
           <Route path="/shop" element={<Shop />}/>
           <Route path="/contact" element={<ContactForm />}/>
      

       </Routes>
   
        <Footer/>  
    
      
      </Router>
     
    </UserContext.Provider>
   
  );
}

export default App;
