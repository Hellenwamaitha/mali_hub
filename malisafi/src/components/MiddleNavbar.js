// Navbar1.js
// import React from "react";

// function Navbar1() {
//   return (
//     <div className="navbar">
//         <img src="https://beautyclick.co.ke/cdn/shop/files/beautyclick-logo_800x_5315819d-2b1d-4eb3-b1f4-6410efc27c7e_200x.png?v=1613513905" alt="Logo" className="logo" />
//       <input type="text" placeholder="Search" className="search-bar" />
//       <button className="login-button">Login</button>
//     </div>
//   );
// }

// export default Navbar1;

// MiddleNavbar.jsx
import React from 'react';

function MiddleNavbar ()  {
  return (
    <div className="middle-navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="icons">
        <span><i className="fa fa-search"></i></span>
        <span><i className="fa fa-user"></i></span>
        <span><i className="fa fa-shopping-cart"></i></span>
      </div>
    </div>
  );
}

export default MiddleNavbar;


