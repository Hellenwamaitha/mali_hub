// import React from "react";
// import {Link} from "react-router-dom"


// function Navbar(){
//     return(
//         <header>
            
//             <nav>
        
//           <ul>
//           <li>
//             <Link to="/">NEWARRIVALS</Link>
//           </li>
//           <li>
//             <Link to="/makeup">MAKEUP</Link>
//           </li>
//           <li>
//             <Link to="/skincare">SKINCARE</Link>
//           </li>
//           <li>
//             <Link to="/haircare">HAIRCARE</Link>
//           </li>
//           <li>
//             <Link to="/hair">HAIR</Link>
//           </li>
//           <li>
//             <Link to="/bath&body">BATH&BODY</Link>
//           </li>
//           <li>
//             <Link to="/accessiories">ACCESSIORIES</Link>
//           </li>
//           <li>
//             <Link to="/fragrances">FRAGRANCES</Link>
//           </li>
//         </ul>
//       </nav>
//         </header>
//     )
// }

// export default Navbar;

// TopNavbar.jsx
import React from 'react';

function TopNavbar ()  {
  return (
    <div className="top-navbar">
      <div className="contact-info">
        <span><i className="fa fa-phone"></i> +1234567890</span>
        <span><i className="fa fa-whatsapp"></i> WhatsApp</span>
      </div>
    </div>
  );
}

export default TopNavbar;