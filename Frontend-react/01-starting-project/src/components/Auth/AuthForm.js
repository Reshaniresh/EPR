import { useState, useEffect } from "react";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import classes from "./AuthForm.module.css";

import { LOGIN } from "../../utils/APICONSTANTS";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };
 
  const loginUser = (e) => {
    e.preventDefault();
    let data = {
      username: e.target.username.value,
      password: e.target.password.value,
      emailId: "epradmin@epr.com",
    };
    axios
      .post(LOGIN, data)
      .then((response) => {
        
        if(response.status===201){
          console.log(response.data.message);
          setMessage(response.data.message)
          setOpen(true)
          setIsLogin((prevState) => !prevState);
        }else{

        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // loginUser();
  }, []);

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={loginUser}>
        <div className={classes.control}>
          {/* <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required /> */}
          <label htmlFor="username">Your username</label>
          <input type="text" id="username" value={username} onChange={(e)=>{console.log(e.target.value);setUsername(e.target.value)}} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={false}
        message={message}
        // action={action}
      />
    </section>
  );
};

export default AuthForm;
