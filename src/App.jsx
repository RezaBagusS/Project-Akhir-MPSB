import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import SecCourses from "./Modules/Sec_Courses";
import SecMyCourses from "./Modules/Sec_MyCourses";
import SecChallange from "./Modules/Sec_Challange";
import NotFound from "./Pages/NotFound";
import Courses from "./Pages/Courses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="courses" element={<SecCourses />} />
          <Route path="mycourses" element={<SecMyCourses />} />
          <Route path="challanges" element={<SecChallange />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard/mycourses/:courseId" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
