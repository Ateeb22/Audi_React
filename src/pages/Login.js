// import React from 'react'
// import './Login.css';

// function Login() {

//   var authentication =
//   {
//     users: [{username: "MunimBhai", password: "1234"}],
//   adduser: function(){
//   var usName = document.getElementById("usName").value
//   var pwd = document.getElementById("pwd").value

//   var check = this.users.some(function(e)
//    {
//       return e.username == usName && e.password == pwd
//    });
//         console.log(check ? 'Correct' : "Wrong Password")

//   }
//  };

//  document.getElementById("myButton").addEventListener("click", authentication.addUser.bind(authentication));
//   return (

//     <div>
//        <div className="wrapper" >
//       <div className="logo">
//         <img
//           src="gt.jpg"
//           alt=""
//         />
//       </div>
//       <div className="text-center mt-4 name">
//         Sign In
//       </div>
//       <form className="p-3 mt-3">
//         <div className="form-field d-flex align-items-center">
//           <span className="far fa-user"></span>
//           <input type="text" name="userName" id="usName" placeholder="Username" />
//         </div>
//         <div className="form-field d-flex align-items-center">
//           <span className="fas fa-key"></span>
//           <input type="password" name="password" id="pwd" placeholder="Password" />
//         </div>
//         <button className="btn mt-3" id='myButton'>Login</button>
//       </form>
//       <div className="text-center fs-6">
//         <a href="#">Forget password?</a> or <a href="#">Sign up</a>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Login



import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Container, Row, Col } from "react-bootstrap";
import AuthContext from "./AuthContext";

function Login() {
  const [usName, setusName] = useState('');
  const [pwd, setpwd] = useState('');
  const { login } = useContext(AuthContext);          // is using context value provided by AuthContext, Context value we dont use props but can send data through component tree
  const navigate = useNavigate();
 
  var authentication = {
    users: [{ username: "audi", password: "123" }],
    addUser: function () {
      // var usName = document.getElementById("usName").value;
      // var pwd = document.getElementById("pwd").value;

      var check = this.users.some(function (e) {
        return e.username === usName && e.password === pwd;
      });

      if (check) {
        console.log("Correct");
        login();
        navigate("/home");
        localStorage.setItem("token","audi")

      } else {
        console.log("Wrong Password");      
        setusName('');
        setpwd('');
       
      }
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();                               // Prevent the default form submission behavior
    authentication.addUser();                             // Call the addUser method to perform the authentication check
  };

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <div className="wrapper">
              <div className="logo">
                <img src="gt.jpg" alt="" />
              </div>
              <div className="text-center mt-4 name">Sign In</div>
              <form className="p-3 mt-3" onSubmit={handleSubmit}>
                <div className="form-field d-flex align-items-center">
                  <span className="far fa-user"></span>
                  <input
                    type="text"
                    name="userName"
                    id="usName"
                    placeholder="Username"
                    value={usName}
                    onChange={(e) => setusName(e.target.value)}
                  />
                </div>
                <div className="form-field d-flex align-items-center">
                  <span className="fas fa-key"></span>
                  <input
                    type="password"
                    name="password"
                    id="pwd"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e) => setpwd(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn mt-3">
                  Login
                </button>
              </form>
              <div className="text-center fs-6">
                <a href="#">Forget password?</a> or <a href="#">Sign up</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
