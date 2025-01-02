import React from 'react';
import '../styles/Login.css';

const Login = () => {
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=http://localhost:3000/callback&response_type=code&scope=openid%20profile%20email`;
  const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=863167ir2v99b8&redirect_uri=http://localhost:5173/callback&scope=openid%20profile%20email`;


  return (
    <div className='general-container'>

      <div className='container-one'>

      </div>

      <div className='container-two'>
        <div className="login-container">
          <div className="login-content">
            <h1>AutoPoster</h1>
            <p>A Social Media Post Automation Tool</p>
            <div className="login-buttons">
              <a href={googleAuthUrl} className="login-button google">Login with Google</a>
              <a href={linkedInAuthUrl} className="login-button linkedin">Login with LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
