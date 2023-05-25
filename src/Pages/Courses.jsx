import React from "react";
import DetailCourseCard from "../Component/DetailCourseComp/DetailCourseCard";
import FooterCourse from "../Component/DetailCourseComp/FooterCourse";
import NavbarCourse from "../Component/DetailCourseComp/NavbarCourse";
import FooterHome from "../Component/HomeComp/FooterHome";
import { useParams } from "react-router-dom";
import dataCoursesModule from "../data/dataCoursesModule";

const Courses = () => {
  const { courseId } = useParams();

  return (
    <div className="h-fit bg-slate-200 w-full cust-outer-container">
      <NavbarCourse course={courseId} />
      <DetailCourseCard course={courseId} />
      <FooterCourse />
      <FooterHome />
    </div>
  );
};

export default Courses;
