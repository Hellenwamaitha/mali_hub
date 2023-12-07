import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Newarrivals from "./components/Newarrivals";
import Makeup from "./components/Makeup";
import Skincare from "./components/Skincare";
import Haircare from "./components/Haircare";
import Hair from "./components/Hair";
import BathBody from "./components/BathBody";
import Brand from "components/Brand";
import Accessiories from "components/Accessiories";
import Fragrances from "./components/Fragrances"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
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
