import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./NavBar";
import ContactForm from "./ContactForm";
import BookTrip from "./BookTrip";
import Shop from "./Shop";
import Footer from "./Footer";


function App() {
 

  return (
    <div >
    
      <Router>
         <Navbar />
         <div className="old-north-img"><h1 className="home-title">OLD NORTH ACRES</h1></div>
         <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/book" element={<BookTrip />}/>
           <Route path="/shop" element={<Shop />}/>
           <Route path="/contact" element={<ContactForm />}/>
      

       </Routes>
   
        <Footer/>  
    
      
      </Router>
     
    
    </div>
  );
}

export default App;
