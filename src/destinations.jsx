import React from 'react';
import { useState } from 'react';
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Location() {
   // State to track if extra content is shown
   const [isExpanded, setIsExpanded] = useState(false);

   // Toggle the state
   const toggleContent = () => {
     setIsExpanded(!isExpanded);
   };
 
  return (
    <>
      <div className="locate">
        <div className='dest'>
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
                        <FontAwesomeIcon icon={faArrowRight} />

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
                        <FontAwesomeIcon icon={faArrowRight} />

                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>India</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque explicabo earum perferendis, distinctio quas necessitatibus in sit eveniet sed et ex consequuntur ducimus esse iure corporis dolor quisquam aspernatur blanditiis.</p>
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
                        <FontAwesomeIcon icon={faArrowRight} />

                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>Egypt</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptas! Itaque voluptas, debitis impedit rerum dolore reiciendis quos temporibus tempore eligendi repellendus, obcaecati officiis nihil a repudiandae at incidunt nobis.</p>
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
                        <FontAwesomeIcon icon={faArrowRight} />

                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>China</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere unde laborum veniam libero ex sunt similique fuga. Ut voluptatibus fuga expedita fugit necessitatibus saepe adipisci animi aliquam iusto dolor.</p>
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
                        <FontAwesomeIcon icon={faArrowRight} />

                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>Greece</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta deleniti nisi perferendis officia autem rerum animi nemo at, assumenda voluptatum temporibus? Repellendus obcaecati dolores eum aut odit perferendis quibusdam nulla?</p>
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
                        <FontAwesomeIcon icon={faArrowRight} />

                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>Italy</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic est animi perspiciatis accusamus ducimus vero ipsam odit sequi. Itaque quam ea sequi iste, eum dolorem officiis vel omnis quae iure?</p>
                </div>
              </div>

              {isExpanded && (
                <>
                 <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../christ-5404701_1920.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />

                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>Brazil</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam cupiditate, amet porro delectus atque, aperiam debitis vero dignissimos voluptate quasi eveniet quidem, exercitationem fugit nesciunt? Perferendis libero nesciunt inventore?</p>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../u-a-e-5453673_1920.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />

                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>Dubai</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque explicabo earum perferendis, distinctio quas necessitatibus in sit eveniet sed et ex consequuntur ducimus esse iure corporis dolor quisquam aspernatur blanditiis.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../angkor wat.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />

                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>Cambodia</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptas! Itaque voluptas, debitis impedit rerum dolore reiciendis quos temporibus tempore eligendi repellendus, obcaecati officiis nihil a repudiandae at incidunt nobis.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../london-8835826_1920.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />

                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>The United Kingdom</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere unde laborum veniam libero ex sunt similique fuga. Ut voluptatibus fuga expedita fugit necessitatibus saepe adipisci animi aliquam iusto dolor.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../torii-1389085_1920.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />

                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>Japan</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta deleniti nisi perferendis officia autem rerum animi nemo at, assumenda voluptatum temporibus? Repellendus obcaecati dolores eum aut odit perferendis quibusdam nulla?</p>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="box">
                    <div className="img-box">
                      <img src="../diffpyramid-5744558_1920.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <span>
                        <a href="#">
                        <FontAwesomeIcon icon={faArrowRight} />

                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content3">
                  <h3>Mexico</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic est animi perspiciatis accusamus ducimus vero ipsam odit sequi. Itaque quam ea sequi iste, eum dolorem officiis vel omnis quae iure?</p>
                </div>
              </div>
                </>
               )}
            </div>
          </section>
        </div>
        <br /><br />
        <div className="button-holder">
        <button className="btn btn-primary but" onClick={toggleContent}> {isExpanded ? 'See Less' : 'See More'}</button>
        </div>
        
      </div>
    </>
  );
}
