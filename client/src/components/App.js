import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./NavBar";
import Contact from "./Contact";
import BookTrip from "./BookTrip";

function App() {
 

  return (
    <div >
    
      <Router>
         <Navbar />
         <h1 className="home-title">Old North Acres</h1>
         <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<Contact />}/>
           <Route path="/book" element={<BookTrip />}/>
        </Routes>
      </Router>

     

    <footer className="footer">
      <div>instagram link</div>
      <div>email link to contact</div>
      <div></div>
    </footer>
      
     
    
    </div>
  );
}

export default App;
