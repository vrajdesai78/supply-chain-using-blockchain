import React from 'react';
import './style.css';
import Reg from './images/reg.svg'

function Register() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />

          </form>

        </div>
      </div>

      <div className="panels-container">
      <div className="panel left-panel">
      <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={Reg} className="image" alt="hii" />
        </div>

      </div>
    </div>
  );
}

export default Register;
