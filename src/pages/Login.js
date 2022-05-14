import React, { useState } from "react";
import Background from "./components/Background";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  // React States
  const navigate=useNavigate()
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "student",
      password: "pass1",
    },
    {
      username: "teacher",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
 
    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {

        setIsSubmitted(true);
        if(userData.username==="student"){
          navigate("/home/student");
        }
        if(userData.username==="teacher"){
          navigate("/home/teacher");
        }
        
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label style={{color:"white"}}>Username </label>
          <input style={{color:"black"}} type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label style={{color:"white"}}>Password </label>
          <input style={{color:"black"}} type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <Background>
     <div className="app">
      <div className="login-form">
        <div  className="title">Sign In</div>
        {isSubmitted ? <div style={{color:"black"}}>User is successfully logged in</div> : renderForm}
      </div>
    </div>     
    </Background>
  );
};
export default Login;
