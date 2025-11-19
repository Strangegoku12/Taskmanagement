import { lazy, Suspense } from "react";
import Loading from "../Components/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const About = lazy(()=>import ("../Components/About"));
const Taskmanagement = lazy(() => import("../Components/Taskmanagement"));
const Dashboard=lazy(()=>import("../Components/Dashboard"))
const Employees=lazy(()=>import("../Components/Employees"))
const Login=lazy(()=>import('../Components/Login'))
function Routerdata() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/task" element={<Taskmanagement />} />
          <Route path="/about" element={<About />} />
          <Route path="/employees" element={<Employees/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routerdata;
