import './style.css';
import Reg from './images/reg.svg';
// import db from './Firestore';
// import { Link, useHistory } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  Firestore,
} from "firebase/firestore";

import {
  auth,
  registerWithEmailAndPassword,
  app,
  writedata,
  
  // addDoc
  // db,
} from "./firebase";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  // const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    // if (user) history.replace("/dashboard");
    if(user) {
    
    // writedata(user.uid)
 

     
    }
  }, [user, loading]);
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
               value={name}
               onChange={(e) => setName(e.target.value)}
              type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
              type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <input 
             onClick={register}
            type="submit" className="btn" value="Sign up" />

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
