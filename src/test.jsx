import React from 'react';
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Location() {
  return (
    <>
      <div className="locate">
        <div>
          <section>
            <div className="heading">
              <h2>Travel Destinations</h2>
            </div>
            <div className="container">
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../eiffel-tower-975004_1280.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>France</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam cupiditate, amet porro delectus atque, aperiam debitis vero dignissimos voluptate quasi eveniet quidem, exercitationem fugit nesciunt? Perferendis libero nesciunt inventore?</p>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../taj-mahal-3212516_1920.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>India</h3>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../pyramids-7081993_1920.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>Egypt</h3>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../great-wall-of-china-8191166_1920.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>China</h3>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../athens-1403983_1920.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>Greece</h3>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../colosseum-2182371_1920.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>Italy</h3>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div></div>
      </div>
    </>
  );
}
