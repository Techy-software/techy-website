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
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import RoleCompoenent from "./components/role-component/role-component";
import AddNewRoleComponent from "./components/role-component/add-new-role-component";
import AddStudentComponent from "./components/add-student-component/AddStudentComponent";
import MentorsListComponent from "./components/mentors-list-component/mentors-list-component";
import StudentDashboardMainPage from "./components/StudentDashboard/StudentDashboardMainPage";
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
import OpportunityDetails from "./components/Opportunity/OpportunityDetails/OpportunityDetails";
import JobsComponent from "./components/jobs-component/JobsComponent";
import DummyLayout, { chekcAuthLoader } from "./components/DummyLayout";
import StudentsTable from "./components/students/StudentsTable";
import CourseLibraryComponent from "./components/course-library-component/course-library-component";
import CourseSetup from "./components/course-setup-component/CourseSetup";
import "leaflet/dist/leaflet.css";
import CourseMentorAssignScreen from "./components/course-mentor/CourseMentorAssignScreen";

const router = createBrowserRouter([
  { path: "/login", element: <LoginComponent /> },
  { path: "/flogin", element: <ForgetPassword /> },
  { path: "/rlogin", element: <ResetPassword /> },
  {
    element: <DummyLayout />,
    loader: chekcAuthLoader,
    children: [
      {
        path: "courseDetails/:courseId",
        element: <CourseDetailsComponent staps={0} currentStep={0} />,
      },
      {
        path: "courseSetup/:courseId",
        element: <CourseSetup currentStep={0} />,
      },
      {
        path: "CourseMentorAssign/:courseId",
        element: <CourseMentorAssignScreen />,
      },
      { path: "addNewMentor", element: <AddMentorComponent /> },
      { path: "MentorDashBoard", element: <MentorDashboardMainPage /> },
      { path: "addStudent", element: <AddStudentComponent /> },
      { path: "StudentDashBoard", element: <StudentDashboardMainPage /> },
      { path: "Addacademy", element: <AddAcademy currentStep={0} /> },
      { path: "academyDashboard", element: <AcademyDetails /> },
      { path: "opportunityView", element: <OpportunityView /> },
      { path: "opportunityDetails", element: <OpportunityDetails /> },
      { path: "job-details", element: <JobDetails /> },
      { path: "addReward", element: <AddReward /> },
      { path: "rewardDetails", element: <RewardDetails /> },
      { path: "addNewRole", element: <AddNewRoleComponent /> },
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <DashboardPage /> },
          {
            path: "courses",
            element: <CourseLibraryComponent />,
          },
          { path: "mentors", element: <MentorsListComponent /> },
          { path: "students", element: <StudentsTable /> },
          { path: "opportunity", element: <OpportunityMain /> },
          { path: "opportunityView/:id", element: <OpportunityView /> },
          { path: "opportunity/details/:id", element: <Publishing /> },
          { path: "settings", element: <Settings currentStep={0} /> },
          { path: "mentor-list", element: <MentorsListComponent /> },
          // { path: "student-list", element: <StudentList /> },
          { path: "opportunities", element: <OpportunityMain /> },
          { path: "jobs", element: <JobsComponent /> },
          { path: "discount-details-list", element: <DiscountDetailsList /> },
          { path: "create-discount-coupon", element: <CreateDiscountCoupon /> },
          { path: "rewards", element: <Rewards /> },
          { path: "role", element: <RoleCompoenent /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

// const App = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const steps = ["Content", "Setup", "Assign"];

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" loader={chekcAuthLoader} element={<DummyLayout />}>
//           <Route path="/login" element={<LoginComponent />} index={true} />
//           <Route path="/flogin" element={<ForgetPassword />} />
//           <Route path="/rlogin" element={<ResetPassword />} />
//           <Route path="/addNewMentor" element={<AddMentorComponent />} />
//           <Route
//             path="/MentorDashBoard"
//             element={<MentorDashboardMainPage />}
//           />
//           <Route path="/addStudent" element={<AddStudentComponent />} />
//           <Route path="/Addacademy" element={<AddAcademy currentStep={0} />} />
//           <Route path="/academyDashboard" element={<AcademyDetails />} />
//           <Route path="/opportunityView" element={<OpportunityView />} />
//           <Route path="/opportunityDetails" element={<OpportunityDetails />} />
//           <Route path="/job-details" element={<JobDetails />} />
//           <Route path="/addReward" element={<AddReward />} />
//           <Route path="/rewardDetails" element={<RewardDetails />} />
//           <Route path="/addNewRole" element={<AddNewRoleComponent />} />
//           <Route element={<Layout />}>
//             <Route element={<DashboardPage />} index />
//             <Route path="/courses" element={<CourseDetailsComponent />} />
//             <Route path="/mentors" element={<MentorsListComponent />} />
//             <Route path="/students" element={<StudentList />} />
//             <Route path="/opportunity" element={<OpportunityMain />} />
//             <Route path="/opportunityView/:id" element={<OpportunityView />} />
//             <Route path="/opportunity/details/:id" element={<Publishing />} />
//             <Route path="/settings" element={<Settings currentStep={0} />} />
//             <Route path="/mentor-list" element={<MentorsListComponent />} />
//             <Route path="/student-list" element={<StudentList />} />
//             <Route path="/opportunities" element={<OpportunityMain />} />
//             <Route path="/jobs" element={<JobsComponent />} />
//             <Route
//               path="/discount-details-list"
//               element={<DiscountDetailsList />}
//             />
//             <Route
//               path="/create-discount-coupon"
//               element={<CreateDiscountCoupon />}
//             />

//             <Route path="/rewards" element={<Rewards />} />
//             <Route path="/role" element={<RoleCompoenent />} />
//             <Route path="/settings" element={<Settings />} />
//           </Route>
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
