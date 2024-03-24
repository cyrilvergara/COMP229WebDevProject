import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
