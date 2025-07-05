import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const links = [
    { to: "/home", icon: home, alt: "home" },
    { to: "/home/courses", icon: course, alt: "course" },
    { to: "/home/mentors", icon: mentor, alt: "mentor" },
    { to: "/home/students", icon: mentor, alt: "student" },
    { to: "/addAcademy", icon: academy, alt: "academy" },
    { to: "/home/opportunities", icon: tickets, alt: "opportunity" },
    { to: "/home/jobs", icon: job, alt: "job" },
    { to: "/home/discount-details-list", icon: discount, alt: "discount" },
    { to: "/home/rewards", icon: gift, alt: "rewards" },
    { to: "/home/Role", icon: role, alt: "role" },
    { to: "/home/Settings", icon: setting, alt: "settings" },
  ];

  return (
    <div className="bg-blue-600 text-white h-screen fixed top-0 left-0 pt-16">
      <nav className="mt-8">
        <ul>
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              <li
                className={`px-6 py-2 hover:bg-blue-500 ${
                  location.pathname === link.to ? "bg-blue-500" : ""
                }`}
              >
                <img src={link.icon} alt={link.alt} className="w-7" />
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
