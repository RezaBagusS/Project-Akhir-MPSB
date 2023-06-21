import { useEffect } from "react";
import DetailCourseCard from "../Component/DetailCourseComp/DetailCourseCard";
import FooterCourse from "../Component/DetailCourseComp/FooterCourse";
import NavbarCourse from "../Component/DetailCourseComp/NavbarCourse";
import FooterHome from "../Component/HomeComp/FooterHome";
import { useNavigate, useParams } from "react-router-dom";
import { verifyToken } from "../Helpers/AuthHelpers";

const Courses = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    isLogin();
    isValidCourse();
  }, []);

  const isValidCourse = () => {
    if (localStorage.getItem("myDataCourses")) {
      localStorage.getItem("myDataCourses").includes(courseId) ? true : navigate('/dashboard/mycourses');
    }
  }

  const isLogin = () => {
    if (localStorage.getItem("token")) {
      verifyToken();
      return true;
    }
    return window.location.replace("/auth/login");
  };

  return (
    <>
      <div className="h-fit bg-slate-200 w-full cust-outer-container">
        <NavbarCourse course={courseId} />
        <div className="cust-container">
          <div className="flex flex-col text-cust-blue text-start w-full px-8 pt-10">
            <p className="font-bold text-4xl ">
              Hi, {localStorage.getItem("username")} 🎉🎉
            </p>
            <p className="font-semibold text-2xl ">
              Mari kita belajar bersama di kelas {courseId.toUpperCase()}
            </p>
          </div>
          <DetailCourseCard course={courseId} />
        </div>
        <FooterCourse />
        <FooterHome />
      </div>
    </>
  );
};

export default Courses;
