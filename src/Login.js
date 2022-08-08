import React , { useEffect, useState }  from 'react';
import './style.css';
import log from './images/log.svg'
import { NavLink,useNavigate  } from "react-router-dom";
import Register from './Register';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import AddProduct from './AddProduct';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user){
      console.log("Success")
    }
    if(error){
      console.log("Login error")
    }
  }, [user, loading]);
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
            
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
              type="password" placeholder="Password" />
            </div>
            <input type="submit" 
             onClick={() =>
              // console.log(email,password),
              signInWithEmailAndPassword(auth,email, password)
              
         }
            value="Login" className="btn solid" />
            
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
