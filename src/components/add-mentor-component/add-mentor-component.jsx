import React, { useState } from "react";
import "./add-mentor-component.css";
import profilePictureCircle from "../../assets/profilePictureCircle.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import addIcon from "../../assets/icons/addIcon.svg";
import IconTextModal from "./IconTextModal";
import FileUploader from './FileUploader';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const AddMentorComponent = () => {
  const [content, setContent] = useState(getContent("option1"));
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [landline, setLandline] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState(null);
  const [experience, setExperience] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const CustomModalContent = () => (
    <form>
      <label>
        Data:
        <input type="text" name="data" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );

  const handleFileUpload = (file) => {
    console.log("Uploaded file:", file);
  };

  const handleMenuChoice = (choice) => {
    document.querySelectorAll(".menu button").forEach((button) => {
      button.classList.remove("selected");
    });
    setContent(
      getContent(
        choice,
        showPassword,
        togglePasswordVisibility,
        mobile,
        landline,
        setMobile,
        setLandline,
        email,
        setEmail,
        specialization,
        setSpecialization,
        experience,
        setExperience,
        CustomModalContent,
        handleFileUpload
      )
    );
  };

  return (
    <div>
      <div className="header-component">
        <h2>Add New Mentor</h2>
        <button>submit</button>
      </div>
      <hr className="hr" />

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

const getContent = (
  choice,
  showPassword,
  togglePasswordVisibility,
  mobile,
  landline,
  setMobile,
  setLandline,
  email,
  setEmail,
  specialization,
  setSpecialization,
  experience,
  setExperience,
  CustomModalContent,
  handleFileUpload
) => {
  const optionsSpecialization = [
    { value: "frontend", label: "Frontend Development" },
    { value: "backend", label: "Backend Development" },
    { value: "fullstack", label: "Fullstack Development" },
    { value: "devops", label: "DevOps" },
  ];

  const optionsExperience = [
    { value: "1", label: "1 year" },
    { value: "2", label: "2 years" },
    { value: "3", label: "3 years" },
    { value: "4", label: "4 years" },
    { value: "5", label: "5 years" },
    { value: "5+", label: "5+ years" },
  ];
  switch (choice) {
    case "option1":
      return (
        <div>
          <div className="info-parent-container">
            <div className="info-title">Profile picture</div>
            <hr className="hr" />
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
            <hr className="hr" />
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
              <hr className="hr" />
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
            <hr className="hr" />
            <div>
              <div className="address-form-container">
                <form className="address-form">
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
                  >
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
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
                  >
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
                  <div className="form-group">
                    <label>
                      Address details <span className="required">*</span>
                    </label>
                    <textarea placeholder="Enter address details"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="info-parent-container-spacing">
            <h2>Contact info</h2>
            <hr className="hr" />
            <div className="phone-input-container">
              <div className="phone-input-field">
                <label htmlFor="mobile">
                  Mobile number <span className="required">*</span>
                </label>
                <PhoneInput
                  country={"sa"}
                  value={mobile}
                  onChange={setMobile}
                  inputProps={{
                    name: "mobile",
                    required: true,
                    autoFocus: true,
                  }}
                />
              </div>
              <div className="phone-input-field">
                <label htmlFor="landline">
                  Landline <span className="required">*</span>
                </label>
                <PhoneInput
                  country={"in"}
                  value={landline}
                  onChange={setLandline}
                  inputProps={{
                    name: "landline",
                    required: true,
                  }}
                />
              </div>
            </div>
            <div className="email-input-field">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ex (example@example.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      );
    case "option3":
      return (
        <div>
          <div>
            <div className="info-parent-container">
              <h2>Specializatiion</h2>
              <hr className="hr" />
              <div className="select-input-container">
                <div className="select-input-field">
                  <label htmlFor="specialization">
                    Specialization <span className="required">*</span>
                  </label>
                  <Select
                    id="specialization"
                    options={optionsSpecialization}
                    value={specialization}
                    onChange={setSpecialization}
                    placeholder="Select specialization"
                  />
                </div>
                <div className="select-input-field">
                  <label htmlFor="experience">
                    Years of experience <span className="required">*</span>
                  </label>
                  <Select
                    id="experience"
                    options={optionsExperience}
                    value={experience}
                    onChange={setExperience}
                    placeholder="Select years of experience"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="info-parent-container-spacing">
            <h2>Work experince</h2>
            <hr className="hr" />
            <div>
              <IconTextModal
                text="Add Experince"
                icon={faPlusCircle}
                modalContent={<CustomModalContent />}
                iconColor="#016BDD"
                textColor="#016BDD"
              />
            </div>
          </div>
          <div className="info-parent-container-spacing">
            <h2>Certificates</h2>
            <hr className="hr" />
            <div>
              <IconTextModal
                text="Add Certificates"
                icon={faPlusCircle}
                modalContent={<CustomModalContent />}
                iconColor="#016BDD"
                textColor="#016BDD"
              />
            </div>
          </div>
        </div>
      );
    case "option4":
      return (
        <div>
          <div>
            <div className="info-parent-container">
              <h2>Attachments</h2>
              <hr className="hr" />
              <div>
                <FileUploader
                  title="National ID"
                  onFileUpload={handleFileUpload}
                />
              </div>
            </div>
          </div>
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
