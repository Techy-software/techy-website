import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddMentorComponent from "./components/add-mentor-component/add-mentor-component";
import AddStudentComponent from "./components/add-student-component/AddStudentComponent";
import Role from "./components/role-component/role-component";
import AddRole from "./components/role-component/add-new-role-component";
import MentorDashboardMainPage from "./components/MentorDashboard/MentorDashboardMainPage";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mentor" element={<MentorDashboardMainPage />} />
          <Route path="/role" element={<Role />} />
          <Route path="/addRole" element={<AddRole />} />
          <Route path="/addMentor" element={<AddMentorComponent />} />
          <Route path="/addStudent" element={<AddStudentComponent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
