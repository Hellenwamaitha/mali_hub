import React from "react";
import {Link} from "react-router-dom"


function Navbar(){
    return(
        <header>
            <img className="logo" src="https://beautyclick.co.ke/cdn/shop/files/beautyclick-logo_800x_5315819d-2b1d-4eb3-b1f4-6410efc27c7e_200x.png?v=1613513905" alt="logo" />
            <nav>
        <ul>
          <li>
            <Link to="/">NEW ARRIVALS</Link>
          </li>
          <li>
            <Link to="/makeup">MAKEUP</Link>
          </li>
          <li>
            <Link to="/skincare">SKINCARE</Link>
          </li>
          <li>
            <Link to="/haircare">HAIRCARE</Link>
          </li>
          <li>
            <Link to="/hair">HAIR</Link>
          </li>
          <li>
            <Link to="/bath&body">BATH&BODY</Link>
          </li>
          <li>
            <Link to="/brands">BRANDS</Link>
          </li>
          <li>
            <Link to="/accessiories">ACCESSIORIES</Link>
          </li>
          <li>
            <Link to="/fragrance">FRAGRANCES</Link>
          </li>
        </ul>
      </nav>
        </header>
    )
}
