import React from "react";
import "./login-component.css";
import techyBoy from "../../assets/techyBoy.svg";
import userImage from "../../assets/userImage.svg";
import techyLogo from "../../assets/techyLogo.svg";
import switchIcon from "../../assets/switchIcon.svg";
import { post } from "../../utils/HtppService";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { cross } from "react-icons-kit/icomoon/cross";

const ENCRYPTION_KEY = "mySecret1234!";

const LoginComponent = () => {
  const navigator = useNavigate();

  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] =
    React.useState(false);
  const [forgotMobile, setForgotMobile] = React.useState("");
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [otpCode, setOtpCode] = React.useState("");
  const [lastUser, setLastUser] = React.useState("");
  const [encryptedPassword, setEncryptedPassword] = React.useState("");

  React.useEffect(() => {
    const saved = Cookies.get("lastUser");
    if (saved) {
      const parsed = JSON.parse(saved);
      setLastUser(parsed.username);
      setEncryptedPassword(parsed.password);
    }
  }, []);

  const handleLogin = async () => {
    if (!credentials.username || !credentials.password) {
      alert("Please enter both username and password.");
      return;
    }

    try {
      const token = await post("/auth/login/", {
        usernameOrPhoneNumber: credentials.username,
        password: credentials.password,
      });

      secureLocalStorage.setItem("securityToken", token.accessToken);

      // Encrypt and store in cookie
      const encrypted = CryptoJS.AES.encrypt(
        credentials.password,
        ENCRYPTION_KEY
      ).toString();
      Cookies.set(
        "lastUser",
        JSON.stringify({ username: credentials.username, password: encrypted }),
        { expires: 7 }
      );

      navigator("/", { replace: true });
    } catch (err) {
      alert("Login failed. Please check your credentials.");
      console.error(err);
    }
  };

  const handleLastUserLogin = async () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(
        encryptedPassword,
        ENCRYPTION_KEY
      ).toString(CryptoJS.enc.Utf8);

      const token = await post("/auth/login/", {
        usernameOrPhoneNumber: lastUser,
        password: decrypted,
      });

      secureLocalStorage.setItem("securityToken", token.accessToken);
      navigator("/", { replace: true });
    } catch (err) {
      alert("Auto-login failed. Try manual login.");
      console.error(err);
    }
  };

  const handleForgotPasswordSubmit = async () => {
    if (!forgotMobile.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    try {
      // await post("/otp/send/", { phoneNumber: forgotMobile });
      console.log("Simulated sending OTP to", forgotMobile);
      setShowForgotPasswordModal(false);
      setOtpModalVisible(true);
    } catch (err) {
      alert("Failed to send OTP.");
      console.error(err);
    }
  };

  const handleOtpSubmit = () => {
    if (otpCode.length !== 6) {
      alert("Please enter a 6-digit OTP.");
      return;
    }

    alert(`Entered OTP: ${otpCode}`);
    setOtpCode("");
    setOtpModalVisible(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="top-div">
        <img src={techyLogo} alt="Techy logo" className="logo-img" />
        <div className="text-div">
          <h1 className="welcome-text">Welcome to techy</h1>
          <p className="desctiption-text">
            the simplest way to manage your Academy
          </p>
          <p className="caption-text">
            track your students' progress and manage your courses
            <span className="line-break">
              mentors, opportunities all in one platform.
            </span>
          </p>
        </div>
      </div>

      {/* Main Login */}
      <div className="container">
        <img src={techyBoy} alt="techy boy" className="center-image" />
        <div className="login-container">
          <div className="login-top-row">
            <h1 className="login-container-text">Login</h1>
            <img src={switchIcon} alt="Switch" className="switch-icon" />
            <h3 className="switch-language">Switch to Arabic</h3>
          </div>

          <div className="username-container">
            <label className="username-label">Username:</label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Enter username"
                className="input-field"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
              />
            </div>
          </div>

          <div className="username-container">
            <label className="username-label">Password:</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="input-field"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
              <span
                className="input-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon icon={showPassword ? eyeOff : eye} size={18} />
              </span>
            </div>
          </div>

          <div className="checkbox-container">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              Remember me
            </label>
            <span
              className="forgot-password"
              onClick={() => setShowForgotPasswordModal(true)}
            >
              Forgot password?
            </span>
          </div>

          <div className="login-button-container">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Last User Login */}
      {/* {lastUser && (
        <div className="relative">
          <h2 className="login-text">Login as</h2>
          <div
            className="user-container cursor-pointer"
            onClick={handleLastUserLogin}
          >
            <img src={userImage} alt="User" />
            <h3 className="user-name-text">{lastUser}</h3>
            <h4 className="activity-caption">Last logged in</h4>
          </div>
          <span
            className="absolute top-0 right-2 text-gray-500 hover:text-red-500 cursor-pointer"
            onClick={() => {
              Cookies.remove("lastUser");
              setLastUser("");
              setEncryptedPassword("");
            }}
            title="Remove last user"
          >
            <Icon icon={cross} size={18} />
          </span>
        </div>
      )} */}

      {/* <div className="relative">
        <h2 className="login-text">Login as</h2>
        <div
          className={`user-container ${
            lastUser ? "cursor-pointer" : "opacity-50 cursor-default"
          }`}
          onClick={() => lastUser && handleLastUserLogin()}
        >
          <img src={userImage} alt="User" />
          <h3 className="user-name-text">{lastUser || "No saved user"}</h3>
          <h4 className="activity-caption">
            {lastUser ? "Last logged in" : "No recent login saved"}
          </h4>
        </div>

        <span
          className="absolute top-0 right-2 text-gray-500 hover:text-red-500 cursor-pointer"
          onClick={() => {
            Cookies.remove("lastUser");
            setLastUser("");
            setEncryptedPassword("");
          }}
          title="Remove last user"
        >
          <Icon icon={cross} size={18} />
        </span>
      </div> */}

      {lastUser && (
        <div className="mt-8 ml-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Login as</h2>

          <div className="relative bg-white shadow-md rounded-xl p-4 flex flex-col items-center w-64">
            {/* Close (X) icon */}
            <span
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer"
              onClick={() => {
                Cookies.remove("lastUser");
                localStorage.removeItem("lastUser");
                secureLocalStorage.removeItem("securityToken");
                setLastUser("");
                setEncryptedPassword("");
              }}
              title="Remove saved user"
            >
              <Icon icon={cross} size={16} />
            </span>

            <img src={userImage} alt="User" className="w-16 h-16 mb-2" />
            <h3 className="text-lg font-medium text-gray-700">{lastUser}</h3>
            <h4 className="text-sm text-gray-500">Last logged in</h4>

            <button
              onClick={handleLastUserLogin}
              className="mt-3 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
            >
              Log in
            </button>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              Forgot Password
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Enter your registered mobile number:
            </p>
            <input
              type="text"
              placeholder="Mobile number"
              value={forgotMobile}
              onChange={(e) => setForgotMobile(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col gap-3 mt-2">
              <button
                onClick={handleForgotPasswordSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
              <button
                onClick={() => setShowForgotPasswordModal(false)}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OTP Modal */}
      {otpModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              Enter OTP
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Enter the 6-digit code sent to your mobile.
            </p>
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  id={`otp-${i}`}
                  value={otpCode[i] || ""}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/, "");
                    const arr = otpCode.split("");
                    arr[i] = val;
                    setOtpCode(arr.join(""));
                    if (val && i < 5) {
                      document.getElementById(`otp-${i + 1}`)?.focus();
                    }
                  }}
                  className="w-10 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <button
                onClick={handleOtpSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
              <button
                onClick={() => setOtpModalVisible(false)}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginComponent;
