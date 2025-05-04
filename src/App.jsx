import React, { useState } from "react";
import CourseDetilasComponent from "./components/course-details-component/course-details-component";
import AddMentorComponent from "./components/add-mentor-component/add-mentor-component";
import AddAcademy from "./components/AddAcademy/AddAcademy";
import JobDetails from "./components/jobs-component/JobDetails";
import AcademyDetails from "./components/AcademyDetails/AcademyDetails";
import MentorDashboardMainPage from "./components/MentorDashboard/MentorDashboardMainPage";
import Rewards from "./components/Reward/Rewards";
import RewardDetails from "./components/Reward/RewardDetails";
import AddReward from "./components/Reward/AddReward";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import RoleCompoenent from "./components/role-component/role-component";
import AddNewRoleComponent from "./components/role-component/add-new-role-component";
import CourseLibraryComponent from "./components/course-library-component/course-library-component";
import AddStudentComponent from "./components/add-student-component/AddStudentComponent";
import MentorsListComponent from "./components/mentors-list-component/mentors-list-component";
import StudentList from "./components/students/StudentList";
import DiscountDetailsList from "./components/DiscountComponent/DiscountDetails";
import CreateDiscountCoupon from "./components/DiscountComponent/CreateDiscountCoupon";
import OpportunityMain from "./components/Opportunity/OpportunityMain";
import OpportunityView from "./components/Opportunity/OpportunityView/OpportunityView";
import Publishing from "./components/Opportunity/OpportunityDetails/Publishing";
import LoginComponent from "./components/login-component/login-component";
import ForgetPassword from "./components/login-component/ForgetPassword";
import ResetPassword from "./components/login-component/ResetPassword";
import DashboardPage from "./pages/DashboardPage";
import CourseDetailsComponent from "./components/course-details-component/course-details-component";
import Students from "./components/AcademyDetails/Students";
import OpportunityDetails from "./components/Opportunity/OpportunityDetails/OpportunityDetails";
import JobsComponent from "./components/jobs-component/JobsComponent";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Content", "Setup", "Assign"];

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/flogin" element={<ForgetPassword />} />
        <Route path="/rlogin" element={<ResetPassword />} />
        <Route path="/addNewMentor" element={<AddMentorComponent />} />
        <Route path="/MentorDashBoard" element={<MentorDashboardMainPage />} />
        <Route path="/addStudent" element={<AddStudentComponent />} />
        <Route path="/Addacademy" element={<AddAcademy currentStep={0} />} />
        <Route path="/academyDashboard" element={<AcademyDetails />} />
        <Route path="/opportunityView" element={<OpportunityView />} />
        <Route path="/opportunityDetails" element={<OpportunityDetails />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/addReward" element={<AddReward />} />
        <Route path="/rewardDetails" element={<RewardDetails />} />
        <Route path="/addNewRole" element={<AddNewRoleComponent />} />
        {/* <Route path="/studentDetails" element={<Students />} /> */}
        {/* <Route path="/MentorDetails" element={<MentorDet} */}
        <Route element={<Layout />}>
          <Route element={<DashboardPage />} index />
          {/* <Route
            path="/"
            element={<AcademyDetails steps={steps} currentStep={1} />}
          /> */}
          <Route path="/courses" element={<CourseDetailsComponent />} />
          <Route path="/mentors" element={<MentorsListComponent />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/opportunity" element={<OpportunityMain />} />
          <Route path="/opportunity/view" element={<OpportunityView />} />
          <Route path="/opportunity/details" element={<Publishing />} />
          <Route path="/settings" element={<Settings currentStep={0} />} />
          <Route path="/mentor-list" element={<MentorsListComponent />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/opportunities" element={<OpportunityMain />} />
          <Route path="/jobs" element={<JobsComponent />} />
          <Route
            path="/discount-details-list"
            element={<DiscountDetailsList />}
          />
          <Route
            path="/create-discount-coupon"
            element={<CreateDiscountCoupon />}
          />

          <Route path="/rewards" element={<Rewards />} />
          <Route path="/role" element={<RoleCompoenent />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
