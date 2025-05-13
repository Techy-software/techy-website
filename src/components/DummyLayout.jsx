import React from "react";
import { Outlet, redirect } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const DummyLayout = ({ children }) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DummyLayout;

export function chekcAuthLoader() {
  const currentDate = new Date().getTime();
  const tokenDate = secureLocalStorage.getItem("tokenDate");
  console.log("tokenDate", secureLocalStorage.getItem("securityToken"));
  if (!secureLocalStorage.getItem("securityToken")) {
    return redirect("/login");
  }
  return null;
}
