import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./src/components/pages/Home";
import Dashboard from "./src/components/pages/Dashboard";
const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
export default MainRouter;
