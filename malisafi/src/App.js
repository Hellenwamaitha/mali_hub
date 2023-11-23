import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NEWARRIVALS />}/>
        <Route path="/aboutus" element={< MAKEUP/>}/>
        <Route path="/contactus" element={<SKINCARE/>}/>
        <Route path="/hospital" element={<HAIRCARE />}/>
        <Route path="/signup" element={<HAIR />}/>
        <Route path="/booking" element={<BATHBODY />}/>
        <Route path="/booking" element={< BRAND/>}/>
        <Route path="/booking" element={<ACCESSERIES />}/>
        <Route path="/booking" element={<FRAGRANCE />}/>
      </Routes>
      </Router>
    </div>
  );
}
export default App;
