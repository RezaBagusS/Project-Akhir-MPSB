import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import SecCourses from "./Modules/Sec_Courses";
import SecMyCourses from "./Modules/Sec_MyCourses";
import SecChallenge from "./Modules/Sec_Challenge";
import NotFound from "./Pages/NotFound";
import Courses from "./Pages/Courses";
import Material from "./Pages/Material";
import Quiz from "./Pages/Quiz";
import Evaluate from "./Pages/Evaluate";
import { QuizProvider } from "./Helpers/QuizContext";
import Challenge from "./Pages/Challenge";
import { ModalConfirmProvider } from "./Helpers/ModalConfirmContext";

function App() {
  return (
    <ModalConfirmProvider>
      <QuizProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route path="courses" element={<SecCourses />} />
              <Route path="mycourses" element={<SecMyCourses />} />
              <Route path="challenges" element={<SecChallenge />} />
            </Route>
            <Route path="/dashboard/challenges/:challengeId" element={<Challenge />} />
            <Route path="/dashboard/mycourses/:courseId" element={<Courses />} />
            <Route path="/dashboard/mycourses/:courseId/material" element={<Material />} />
            <Route path="/dashboard/mycourses/:courseId/quiz/:quizCode" element={<Quiz />} />
            <Route path="/dashboard/mycourses/:courseId/quiz/:quizCode/result" element={<Evaluate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QuizProvider>
    </ModalConfirmProvider>
  );
}

export default App;
