import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar (){
  return (
   <>
   <header className="head">

   <h2 className='logo'>Ventures</h2>

    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </nav>
   

   </header>
   </>

  )
}