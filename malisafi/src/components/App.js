import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import MiddleNavbar from "./MiddleNavbar";
import BottomNavbar from "./BottomNavbar";
import Newarrivals from "./Newarrivals";
import Makeup from "./Makeup";
import Skincare from "./Skincare";
import Haircare from "./Haircare";
import Hair from "./Hair";
import BathBody from "./BathBody";
import Accessiories from "./Accessiories";
import Fragrances from "./Fragrances";
import "./App.css";

class App extends React.Component {
  componentDidCatch(error, info) {
    console.error("Error caught in App component:", error);
    console.error("Error info:", info);
  }

  render() {
    return (
      <div className="App">
        <Router>
          
          <TopNavbar/>

          
          <MiddleNavbar />

          <BottomNavbar />

          
          <div className="content">
            <Routes>
              <Route path="/" element={<Newarrivals />} />
              <Route path="/makeup" element={<Makeup />} />
              <Route path="/skincare" element={<Skincare />} />
              <Route path="/haircare" element={<Haircare />} />
              <Route path="/hair" element={<Hair />} />
              <Route path="/bathbody" element={<BathBody />} />
              <Route path="/accessiories" element={<Accessiories />} />
              <Route path="/fragrances" element={<Fragrances />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
// import Newarrivals from "./Newarrivals";
// import Makeup from "./Makeup";
// import Skincare from "./Skincare";
// import Haircare from "./Haircare";
// import Hair from "./Hair";
// import BathBody from "./BathBody";
// import Accessiories from "./Accessiories";
// import Fragrances from "./Fragrances";
// import "./App.css"

// class App extends React.Component {
//   componentDidCatch(error, info) {
//     console.error("Error caught in App component:", error);
//     console.error("Error info:", info);
//   }

//   render() {
//     return (
//       <div className="App">
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Newarrivals />} />
//             <Route path="/makeup" element={<Makeup />} />
//             <Route path="/skincare" element={<Skincare />} />
//             <Route path="/haircare" element={<Haircare />} />
//             <Route path="/hair" element={<Hair />} />
//             <Route path="/bathbody" element={<BathBody />} />
//             <Route path="/accessiories" element={<Accessiories />} />
//             <Route path="/fragrances" element={<Fragrances />} />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
// import Newarrivals from "./Newarrivals";
// import Makeup from "./Makeup";
// import Skincare from "./Skincare";
// import Haircare from "./Haircare";
// import Hair from "./Hair";
// import BathBody from "./BathBody";
// import Accessiories from "./Accessiories";
// import Fragrances from "./Fragrances"


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/newarrivals" element={<Newarrivals />} />
//           <Route path="/makeup" element={<Makeup />} />
//           <Route path="/skincare" element={<Skincare />} />
//           <Route path="/haircare" element={<Haircare />} />
//           <Route path="/hair" element={<Hair />} />
//           <Route path="/bathbody" element={<BathBody />} />
//           <Route path="/accessiories" element={<Accessiories />} />
//           <Route path="/fragrances" element={<Fragrances />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
