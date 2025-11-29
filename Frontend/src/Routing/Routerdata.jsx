import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route , Navigate  } from "react-router-dom";
import Loading from "../Components/Loading";
import ProtectedRoute from "../Components/Protectedroute";

const About = lazy(() => import("../Components/About"));
const Taskmanagement = lazy(() => import("../Components/Taskmanagement"));
const Dashboard = lazy(() => import("../Components/Dashboard"));
const Employees = lazy(() => import("../Components/Employees"));
const Login = lazy(() => import("../Components/Login"));

function Routerdata() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/employees"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Employees />
              </ProtectedRoute>
            }
          />

          <Route path="/task" element={<Taskmanagement />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routerdata;
