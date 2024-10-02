import React from 'react';
import './index.css';
import { useRef } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const navRef = useRef();
  const [navIsOpen, setNavIsOpen] = useState(false);

  const showNavbar = () => {
    setNavIsOpen(!navIsOpen);
  };

  const closeNavbar = () => {
    setNavIsOpen(false);
  };

  return (
   <>
   <header className="head">
    
   <Link smooth to="/#home"><h2 className='logo'>Ventures</h2></Link>
    

    <nav ref={navRef} className={`navbar ${navIsOpen ? "open" : ""}`}>
      <ul>
            <li>
              <Link smooth to="/#home" onClick={closeNavbar}>Home</Link>
            </li>
            <li>
              <Link smooth to="/#destinations" onClick={closeNavbar}>Destinations</Link>
            </li>
            <li>
              <Link smooth to="/#bookings" onClick={closeNavbar}>Bookings</Link>
            </li>
           
      </ul>
    </nav>
   
        <button className="nav-btn" onClick={showNavbar}>
          {navIsOpen ? <FaTimes /> : <FaBars />}
        </button>
   </header>
   </>
  );
}
