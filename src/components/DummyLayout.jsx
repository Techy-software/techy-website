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
  if (
    !secureLocalStorage.getItem("securityToken") // 30 minutes in milliseconds
  ) {
    // Redirect to login if token is invalid or expired (30 minutes)
    return redirect("/login");
  }
  return null;
}
