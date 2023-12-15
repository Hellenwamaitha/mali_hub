import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Newarrivals from "./Newarrivals";
import Makeup from "./Makeup";
import Skincare from "./Skincare";
import Haircare from "./Haircare";
import Hair from "./Hair";
import BathBody from "./BathBody";
import Brand from "./Brand";
import Accessiories from "./Accessiories";
import Fragrances from "./Fragrances"
import Landingpage from "./Landingpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/newarrivals" element={<Newarrivals />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/haircare" element={<Haircare />} />
          <Route path="/hair" element={<Hair />} />
          <Route path="/bathbody" element={<BathBody />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/accessiories" element={<Accessiories />} />
          <Route path="/fragrances" element={<Fragrances />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
