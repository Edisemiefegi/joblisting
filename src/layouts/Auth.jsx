import React from "react";
import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div className="bg-neutral-100 w-full pt-12 h-screen ">
      <div className="max-w-md h-fit mx-auto  bg-white p-8  shadow-md rounded-md">
        <Outlet />
      </div>
    </div>
  );
}

export default Auth;
