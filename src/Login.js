import React from 'react';
import './style.css';
import log from './images/log.svg'
import { NavLink } from 'react-router-dom';
import Register from './Register';

function Login() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            
          </form>
 
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <div>
              <NavLink to={Register} >
              <button className="btn transparent">
              Register
            </button>
              </NavLink>
            
            </div>
            
          </div>
          <img src={log} className="image" alt="hii" />
        </div>
       
      </div>
    </div>
  );
}

export default Login;
