import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

function Default() {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
}

export default Default;
