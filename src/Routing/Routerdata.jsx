import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Taskmanagement = lazy(() => import("../Components/Taskmanagement"));

function Routerdata() {
  return (
    <Router>
      <Routes>
        <Route path="/task" element={<Suspense fallback={<p>Loading...</p>}><Taskmanagement /></Suspense>} />
      </Routes>
    </Router>
  );
}

export default Routerdata;
