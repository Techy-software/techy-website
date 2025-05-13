import React from "react";
import "./login-component.css";
import myImage from "../../assets/blueBackgroundWithGlasses.svg";
import techyBoy from "../../assets/techyBoy.svg";
import userImage from "../../assets/userImage.svg";
import techyLogo from "../../assets/techyLogo.svg";
import switchIcon from "../../assets/switchIcon.svg";
import { post } from "../../utils/HtppService";
import secureLocalStorage from "react-secure-storage";
import { redirect } from "react-router-dom";

const LoginComponent = (props) => {
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
  });
  const handleLogin = async () => {
    const token = await post("/auth/login/", {
      usernameOrPhoneNumber: credentials.username,
      password: credentials.password,
    });
    console.log("token", token);
    
    secureLocalStorage.setItem("securityToken", token.accessToken);
    redirect("/");
  };
  return (
    <div>
      <div className="top-div">
        <img src={techyLogo} alt="Techy logo" className="logo-img" />
        <div className="text-div">
          <h1 className="welcome-text">Welcome to techy</h1>
          <p className="desctiption-text">
            the simplest way to manage your Academy
          </p>
          <p className="caption-text">
            track you students progress and manage your courses
            <span class="line-break">
              {" "}
              mentors, opportunities all in one platform.
            </span>
          </p>
        </div>
      </div>
      <div className="container">
        <img src={techyBoy} alt="techy boy logo" className="center-image" />
        <div className="login-container">
          <div className="login-top-row">
            <h1 className="login-container-text">Login</h1>
            <img src={switchIcon} alt="Switch icon" className="switch-icon" />
            <h3 className="switch-language">Switch to Arabic</h3>
          </div>
          <div className="username-container">
            <label htmlFor="username-input" className="username-label">
              Username:
            </label>
            <input
              type="text"
              placeholder="Enter user name"
              className="input-field"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </div>
          <div className="username-container">
            <label htmlFor="username-input" className="username-label">
              Password:
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="input-field"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>

          <div className="checkbox-container">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <div className="login-button-container">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="login-text">Login as</h2>
        <div className="user-container">
          <img src={userImage} alt="User profile image" />
          <h3 className="user-name-text">Ahmed Mecky </h3>
          <h4 className="activity-caption">Active 1 days ago</h4>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
