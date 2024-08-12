import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import React, { useState } from 'react';


export default function Signup (){

    const [showLogin, setShowLogin] = useState(true);

    const handleLogin = () => {
        setShowLogin(false);
    };

    const handleRegister = () => {
        setShowLogin(true);
    };

    return (
        <>
        <div className="opening text-center">
         <Navbar></Navbar>
         {showLogin ? (
         <div id="content" className="content">
        <div>
          <h3 className="formtxt"><em>Signup</em></h3>
          <br />
          <h4 className="formtxt">Personal Details</h4>
        </div>

        <form>
          <div className="fields">
            <img className="img" src="../MEDIA/face-scan.png" alt="face" />
            <input
              className="fill"
              type="text"
              name="fn"
              id="fn"
              placeholder="Firstname"
              required
            />

            <br />
            <br />

            <img className="img" src="../MEDIA/face-scan.png" alt="face" />
            <input
              className="fill"
              type="text"
              name="ln"
              id="ln"
              placeholder="Lastname"
              required
            />

            <br />
            <br />

            <img className="img" src="../MEDIA/email.png" alt="email" />
            <input
              className="fill"
              type="email"
              name="em"
              id="em"
              placeholder="@email"
              required
            />

            <br />
            <br />

            <img className="img" src="../MEDIA/hide.png" alt="password" />
            <input
              className="fill"
              type="password"
              name="pass"
              id="pass"
              placeholder="password"
              required
            />

            <br />
            <br />

            <img className="img" src="../MEDIA/hide.png" alt="password" />
            <input
              className="fill"
              type="password"
              name="pass"
              id="pass"
              placeholder="confirm password"
              required
            />

            <br />
            <br />

            <img className="img" src="../MEDIA/gender.png" alt="gender" />
            <select name="gender" id="gender">
              <option value="0"></option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>
          </div>

          <br />
          <div className="btn btn-group-lg btn-success ">
            <span>Submit</span>
          </div>

          <div className="login">
            <label>
              <input type="checkbox" /> I agree to the terms and conditions
            </label>
          </div>
          <br />

          <div className="login">
            <label>
              <p>Already have an account </p>
            </label>

            <span className="log" onClick={() => handleLogin()} style={{ cursor: 'pointer' }}>
              Login
            </span>
          </div>
        </form>
      </div>
         ) : (
      <div id="content2" className="content2">
        <div>
          <h3 className="formtxt"><em>Login</em></h3>
          <br />
          <h4 className="formtxt">Personal Details</h4>
        </div>

        <form action="#">
          <div className="fields1">
            <img className="img" src="../MEDIA/email.png" alt="email" />
            <input
              className="fill"
              type="email"
              name="em"
              id="em"
              placeholder="@email"
              required
            />

            <br />
            <br />

            <img className="img" src="../MEDIA/hide.png" alt="password" />
            <input
              className="fill"
              type="password"
              name="pass"
              id="pass"
              placeholder="password"
              required
            />
          </div>

          <br />
          <div className="btn btn-group-lg btn-success ">
            <span>Submit</span>
          </div>

          <div className="remember">
            <label>
              <input type="checkbox" /> Remember me
            </label>

            <p>Forgot password ?</p>
          </div>

          <br />

          <div className="login">
            <label>
              <p>Dont have an account </p>
            </label>

            <span className="register" onClick={() => handleRegister ()} style={{ cursor: 'pointer' }}>
              Register
            </span>
          </div>
        </form>
      </div>
         )}
  </div>
        </>
    )


}