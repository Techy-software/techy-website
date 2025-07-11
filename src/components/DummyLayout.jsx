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
  const token = secureLocalStorage.getItem("securityToken");
  const tokenDate = secureLocalStorage.getItem("tokenDate");
  const currentTime = new Date().getTime();

  // Token validity: 30 minutes (1800000 ms)
  if (!token || !tokenDate || currentTime - tokenDate > 1800000) {
    return redirect("/login");
  }

  return null;
}
