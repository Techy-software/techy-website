import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

// Layouts
import LandingLayout from "./components/LandingLayout";
import DummyLayout, {chekcAuthLoader} from "./components/DummyLayout";
import Layout from "./components/Layout";

// Auth
import LoginComponent from "./components/login-component/login-component";
import ForgetPassword from "./components/login-component/ForgetPassword";
import ResetPassword from "./components/login-component/ResetPassword";

// Landing pages
import HomePage from "./AdminDashboard/screens/HomePage/HomePage";
import ForAcademy from "./AdminDashboard/screens/ForAcademy/foracademy";
import AboutTechy from "./AdminDashboard/screens/AboutTechy/AboutTechy";
import BecomeAPartner from "./AdminDashboard/screens/BecomeAPartner/BecomeAPartner";
import DiscoverJobs from "./AdminDashboard/screens/DiscoverJobs/DiscoverJobs";
import Course from "./AdminDashboard/screens/Course/Course";

// Dashboard & Sub-pages
import DashboardPage from "./pages/DashboardPage";
import AddMentorComponent from "./components/add-mentor-component/add-mentor-component";
import AddAcademy from "./components/AddAcademy/AddAcademy";
import AddStudentComponent from "./components/add-student-component/AddStudentComponent";
import AcademyDetails from "./components/AcademyDetails/AcademyDetails";
import StudentDashboardMainPage from "./components/StudentDashboard/StudentDashboardMainPage";
import MentorDashboardMainPage from "./components/MentorDashboard/MentorDashboardMainPage";
import JobsComponent from "./components/jobs-component/JobsComponent";
import JobDetails from "./components/jobs-component/JobDetails";
import RoleCompoenent from "./components/role-component/role-component";
import AddNewRoleComponent from "./components/role-component/add-new-role-component";
import CourseDetailsComponent from "./components/course-details-component/course-details-component";
import CourseSetup from "./components/course-setup-component/CourseSetup";
import CourseMentorAssignScreen from "./components/course-mentor/CourseMentorAssignScreen";
import CourseLibraryComponent from "./components/course-library-component/course-library-component";
import CoursesDashboard from "./components/CoursesDashboard/CoursesDashboard";
import MentorsListComponent from "./components/mentors-list-component/mentors-list-component";
import StudentsTable from "./components/students/StudentsTable";
import Settings from "./components/Settings/Settings";
import Rewards from "./components/Reward/Rewards";
import AddReward from "./components/Reward/AddReward";
import RewardDetails from "./components/Reward/RewardDetails";
import DiscountDetailsList from "./components/DiscountComponent/DiscountDetails";
import CreateDiscountCoupon from "./components/DiscountComponent/CreateDiscountCoupon";
import OpportunityMain from "./components/Opportunity/OpportunityMain";
import OpportunityView from "./components/Opportunity/OpportunityView/OpportunityView";
import OpportunityDetails from "./components/Opportunity/OpportunityDetails/OpportunityDetails";
import Publishing from "./components/Opportunity/OpportunityDetails/Publishing";

const router = createBrowserRouter([
  // 🔓 Public Routes
  { path: "/login", element: <LoginComponent /> },
  { path: "/flogin", element: <ForgetPassword /> },
  { path: "/rlogin", element: <ResetPassword /> },
  { path: "/CourseOverview", element: <Course /> },

  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "for-academy", element: <ForAcademy /> },
      { path: "aboutTechy", element: <AboutTechy /> },
      { path: "discoverJobs", element: <DiscoverJobs /> },
      { path: "becomeAPartner", element: <BecomeAPartner /> },
    ],
  },

  // 🔐 Protected Routes
  {
    path: "/",
    element: <DummyLayout />,
    loader: chekcAuthLoader,
    children: [
      // Individual protected routes (not nested under /home)
      { path: "addNewMentor", element: <AddMentorComponent /> },
      { path: "MentorDashBoard", element: <MentorDashboardMainPage /> },
      { path: "addStudent", element: <AddStudentComponent /> },
      { path: "StudentDashBoard", element: <StudentDashboardMainPage /> },
      { path: "Addacademy", element: <AddAcademy /> },
      { path: "academyDashboard", element: <AcademyDetails /> },
      { path: "opportunityView", element: <OpportunityView /> },
      { path: "opportunityDetails", element: <OpportunityDetails /> },
      { path: "job-details", element: <JobDetails /> },
      { path: "addReward", element: <AddReward /> },
      { path: "rewardDetails", element: <RewardDetails /> },
      { path: "addNewRole", element: <AddNewRoleComponent /> },

      // Course detail views
      { path: "courseDetails/:courseId", element: <CourseDetailsComponent /> },
      { path: "courseSetup/:courseId", element: <CourseSetup currentStep={0} /> },
      { path: "CourseMentorAssign/:courseId", element: <CourseMentorAssignScreen /> },

      // 🧭 Main dashboard route
      {
        path: "/home",
        element: <Layout />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: "courses", element: <CourseLibraryComponent /> },
          { path: "mentors", element: <MentorsListComponent /> },
          { path: "students", element: <StudentsTable /> },
          { path: "opportunity", element: <OpportunityMain /> },
          { path: "opportunityView/:id", element: <OpportunityView /> },
          { path: "opportunity/details/:id", element: <Publishing /> },
          { path: "settings", element: <Settings currentStep={0} /> },
          { path: "mentor-list", element: <MentorsListComponent /> },
          { path: "opportunities", element: <OpportunityMain /> },
          { path: "jobs", element: <JobsComponent /> },
          { path: "discount-details-list", element: <DiscountDetailsList /> },
          { path: "create-discount-coupon", element: <CreateDiscountCoupon /> },
          { path: "rewards", element: <Rewards /> },
          { path: "role", element: <RoleCompoenent /> },
          { path: "course-details", element: <CoursesDashboard /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
