import React from "react";
import DetailCourseCard from "../Component/DetailCourseComp/DetailCourseCard";
import FooterCourse from "../Component/DetailCourseComp/FooterCourse";
import NavbarCourse from "../Component/DetailCourseComp/NavbarCourse";
import FooterHome from "../Component/HomeComp/FooterHome";
import { useParams } from "react-router-dom";
import { verifyToken } from "../Helpers/AuthHelpers";

const Courses = () => {
  const { courseId } = useParams();

  const isLogin = () => {
    if (localStorage.getItem("token")) {
      verifyToken();
      return true;
    }
    return window.location.replace("/auth/login");
  };

  return (
    <>
      {isLogin()}
      <div className="h-fit bg-slate-200 w-full cust-outer-container">
        <NavbarCourse course={courseId} />
        <div className="cust-container">
          <DetailCourseCard course={courseId} />
        </div>
        <FooterCourse />
        <FooterHome />
      </div>
    </>
  );
};

export default Courses;
