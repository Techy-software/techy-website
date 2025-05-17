import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/sideBarIcons/home.png";
import course from "../assets/sideBarIcons/course.png";
import mentor from "../assets/sideBarIcons/mentor.png";
import tickets from "../assets/sideBarIcons/tickets.png";
import academy from "../assets/sideBarIcons/academy.png";
import job from "../assets/sideBarIcons/job.png";
import discount from "../assets/sideBarIcons/discount.png";
import gift from "../assets/sideBarIcons/gift.png";
import setting from "../assets/sideBarIcons/setting.png";
import role from "../assets/sideBarIcons/roles.png";

const Sidebar = () => {
  return (
    <div className="bg-blue-600 text-white h-screen fixed top-0 left-0 pt-16">
      <nav className="mt-8">
        <ul>
          <Link to="/">
            <li className="px-6 py-2 hover:bg-blue-500">
              <img src={home} alt="home" className="w-7" />
            </li>
          </Link>
          <Link to="/courses">
            <li className="px-6 py-2 hover:bg-blue-500">
              <img src={course} alt="course" className="w-7" />
            </li>
          </Link>
          <Link to="/mentors">
            <li className="px-6 py-2 hover:bg-blue-500">
              <img src={mentor} alt="mentor" className="w-7" />
            </li>
          </Link>
          <Link to="/students">
            <li className="px-6 py-2 hover:bg-blue-500">
              <img src={mentor} alt="student" className="w-7" />
            </li>
          </Link>
          <Link to="/addAcademy">
            <li className="px-6 py-2 hover:bg-blue-500">
              <img src={academy} alt="academy" className="w-7" />
            </li>
          </Link>
          <Link to="/opportunities">
            <li className="px-6 py-2 hover:bg-blue-500">
              <img src={tickets} alt="opportunity" className="w-7" />
            </li>
          </Link>
          <Link to="/jobs">
            <li className="px-6 py-2 hover:bg-blue-500">
              <img src={job} alt="job" className="w-7" />
            </li>
          </Link>
          <Link to="/discount-details-list">
            <li className="px-6 py-2 hover:bg-blue-500">
              <img src={discount} alt="discount" className="w-7" />
            </li>
          </Link>
          <Link to="/rewards">
            <li className="px-6 py-2 hover:bg-blue-500">
              <img src={gift} alt="rewards" className="w-7" />
            </li>
          </Link>
          <Link to="/Role">
            <li className="px-6 py-2 hover:bg-blue-500">
              <img src={role} alt="role" className="w-7" />
            </li>
          </Link>
          <Link to="/Settings">
            <li className="px-6 py-2 hover:bg-blue-500">
              <img src={setting} alt="settings" className="w-7" />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
