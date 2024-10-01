import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import Location from "./destinations";
import Book from "./booking";
import Footer from "./footer";

export default function Home(){
    return(
    <>
      <div className="opening">
       <Navbar />
        <div className="">
            <p className="introtext ">
                Let's Start your Journey
                <br />
                <Link to="/signup"  className="btn btn-primary">
                    Travel with us
                </Link>
            </p>
        </div>
      </div>
      <br />
      <Location/>
      <br />
      <br />
      <Book/>
      <br />

      <Footer/>

    </>
    );
}