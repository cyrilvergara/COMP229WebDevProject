import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./src/components/pages/Home";
import Dashboard from "./src/components/pages/Dashboard";
import Profile from "./src/components/account/Profile";
import UpdateInfo from "./src/components/account/UpdateInfo";
const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/update" element={<UpdateInfo />} />
      </Routes>
    </div>
  );
};
export default MainRouter;
