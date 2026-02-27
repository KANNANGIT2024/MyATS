// import React, { useState } from "react";

// function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = () => {
//     alert("Signed up!");
//     console.log(name, email, password);
//   };

//   return (
//     <form>
//       <h2>Sign Up</h2>

//       <input
//         type="text"
//         placeholder="Name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br /><br />

//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br /><br />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br /><br />

//       <button type="button" onClick={handleSubmit}>
//         Sign Up
//       </button>
//     </form>
//   );
// }

// export default SignUp;

import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to your ATS dashboard</p>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

    
        <button className="signin-btn" onClick={handleSignIn}>
          Sign In
        </button>

        <div className="divider">
          <span>OR CONTINUE WITH</span>
        </div>

        <div className="social-buttons">
          <button className="social-btn">
            {/* <span>🌐</span>  */}
            Google
          </button>

          <button className="social-btn">
            <span>in</span> LinkedIn
          </button>
        </div>

        <p className="signup-text">
          Don't have an account? <a href="#">Sign up</a>
        </p>

      </div>
    </div>
  );
}

export default Signup;