import React, { useState } from "react";
import "./add-mentor-component.css";
import profilePictureCircle from "../../assets/profilePictureCircle.svg";

const AddMentorComponent = () => {
  const [content, setContent] = useState(getContent("option1"));
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMenuChoice = (choice) => {
    document.querySelectorAll(".menu button").forEach((button) => {
      button.classList.remove("selected");
    });
    setContent(getContent(choice, showPassword, togglePasswordVisibility));
  };

  return (
    <div>
      <div className="header-component">
        <h2>Add New Mentor</h2>
        <button>submit</button>
      </div>
      <hr style={{ width: "100%", border: "1px solid #E6E6E6" }} />

      <div className="main-container">
        <div className="menu-container">
          <h2>4 Steps to add Mentor:</h2>
          <div className="menu">
            <button onClick={() => handleMenuChoice("option1")}>
              1- General info
            </button>
            <button onClick={() => handleMenuChoice("option2")}>
              2- Location and Contact info
            </button>
            <button onClick={() => handleMenuChoice("option3")}>
              3- Work Experince
            </button>
            <button onClick={() => handleMenuChoice("option4")}>
              4- Attachments
            </button>
          </div>
        </div>

        <div className="content-parent">
          <div className="content">{content}</div>
        </div>
      </div>
    </div>
  );
};

const getContent = (choice, showPassword, togglePasswordVisibility) => {
  switch (choice) {
    case "option1":
      return (
        <div>
          <div className="info-parent-container">
            <div className="info-title">Profile picture</div>
            <hr style={{ width: "100%", border: "1px solid #E6E6E6" }} />
            <div className="info-container">
              <div className="avatar">
                <img
                  src={profilePictureCircle}
                  alt="proflie image"
                  className="avatar-icon"
                />
              </div>
              <div>
                <button className="upload-button"> Upload Image</button>
              </div>
            </div>
            <div></div>
          </div>

          <div className="info-parent-container-spacing">
            <h2>Basic info</h2>
            <hr style={{ width: "100%", border: "1px solid #E6E6E6" }} />
            <div>
              <form className="form-container">
                <div className="form-group">
                  <label>
                    First name ( English ) <span className="required">*</span>
                  </label>
                  <input type="text" placeholder="ex (Ahmed)" />
                </div>
                <div className="form-group">
                  <label>
                    Middle name ( English ) <span className="required">*</span>
                  </label>
                  <input type="text" placeholder="ex (Kamal)" />
                </div>
                <div className="form-group">
                  <label>
                    Last name ( English ) <span className="required">*</span>
                  </label>
                  <input type="text" placeholder="ex (Mealy)" />
                </div>
                <div className="form-group">
                  <label>Nationality</label>
                  <select>
                    <option value="">Please select</option>
                    <option value="nationality1">Nationality 1</option>
                    <option value="nationality2">Nationality 2</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    ID <span className="required">*</span>
                  </label>
                  <input type="text" placeholder="ex (29831234667765432)" />
                </div>
                <div className="form-group">
                  <label>Marital Status</label>
                  <select>
                    <option value="">Select status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Date of birth</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="info-parent-container-spacing">
              <h2>Credentials</h2>
              <hr style={{ width: "100%", border: "1px solid #E6E6E6" }} />
              <form className="form-container-creddentials">
                <div className="form-group-creddentials">
                  <label>
                    Username <span className="required">*</span>
                  </label>
                  <input type="text" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                  <label>
                    Password <span className="required">*</span>
                  </label>
                  <div className="password-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    case "option2":
      return (
        <div>
          <div className="info-parent-container">
            <h2>Location</h2>
            <hr style={{ width: "100%", border: "1px solid #E6E6E6" }} />
            <div>
            <div className="address-form-container">
              <form className="address-form">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <div className="form-group">
                  <label>
                    Country <span className="required">*</span>
                  </label>
                  <select>
                    <option value="egypt">Egypt</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    City <span className="required">*</span>
                  </label>
                  <select>
                    <option value="cairo">Cairo</option>
                    <option value="alexandria">Alexandria</option>
                    <option value="giza">Giza</option>
                  </select>
                </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <div className="form-group">
                  <label>
                    Area <span className="required">*</span>
                  </label>
                  <input type="text" placeholder="El dokki" />
                </div>
                <div className="form-group">
                  <label>Postal code</label>
                  <input type="text" placeholder="Enter postal code" />
                </div>
                </div>
                <div className="form-group" >
                  <label>
                    Address details <span className="required">*</span>
                  </label>
                  <textarea placeholder="Enter address details"></textarea>
                </div>
              </form>
            </div>
            </div>
          </div>
          <div>Option 2 - Content Block 2</div>
          <div>Option 2 - Content Block 3</div>
        </div>
      );
    case "option3":
      return (
        <div>
          <div>Option 3 - Content Block 1</div>
          <div>Option 3 - Content Block 2</div>
          <div>Option 3 - Content Block 3</div>
        </div>
      );
    case "option4":
      return (
        <div>
          <div>Option 4 - Content Block 1</div>
          <div>Option 4 - Content Block 2</div>
          <div>Option 4 - Content Block 3</div>
          <div>Option 4 - Content Block 4</div>
        </div>
      );
    default:
      return (
        <div>
          <div>Option 1 - Content Block 1</div>
          <div>Option 1 - Content Block 2</div>
          <div>Option 1 - Content Block 3</div>
        </div>
      );
  }
};

export default AddMentorComponent;
