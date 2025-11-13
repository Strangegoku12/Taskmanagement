import { lazy, Suspense } from "react";
import Loading from "../Components/Loading";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Logout=lazy(()=>import ("../Components/Logout"));
const About = lazy(()=>import ("../Components/About"));
const Taskmanagement = lazy(() => import("../Components/Taskmanagement"));
const Report= lazy(()=>import("../Components/Report"))
const Dashboard=lazy(()=>import("../Components/Dashboard"))

function Routerdata() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/task" element={<Taskmanagement />} />
          <Route path="/report" element={<Report/>} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routerdata;
