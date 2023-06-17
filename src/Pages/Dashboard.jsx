import { useLocation } from "react-router-dom";
import SidebarLeft from "../Component/DashboardComp/sidebarLeft";
import SecDashboard from "../Modules/Sec_Dashboard";
import SecCourses from "../Modules/Sec_Courses";
import SecMyCourses from "../Modules/Sec_MyCourses";
import SecChallange from "../Modules/Sec_Challenge";
import { useEffect } from "react";
import { verifyToken } from "../Helpers/AuthHelpers";

const Dashboard = () => {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  const handlePath = () => {
    if (location.pathname === "/dashboard") {
      return <SecDashboard />;
    }
    if (location.pathname === "/dashboard/courses") {
      return <SecCourses />;
    }
    if (location.pathname === "/dashboard/mycourses") {
      return <SecMyCourses />;
    }
    if (location.pathname === "/dashboard/challenges") {
      return <SecChallange />;
    }
  };

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
      <div className="cust-outer-container overflow-hidden bg-slate-600 font-poppins flex">
        <SidebarLeft />
        <div className="bg-slate-100 w-full pb-10">{handlePath()}</div>
      </div>
    </>
  );
};

export default Dashboard;
