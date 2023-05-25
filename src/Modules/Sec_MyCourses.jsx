import FilterMyCourses from "../Component/ModulesComp/FilterMyCourses";
import MyCoursesCard from "../Component/ModulesComp/MyCoursesCard";
import HeaderDashboard from "../Component/DashboardComp/HeaderDashboard";

const MyCourses = () => {

  return (
    <div className="h-fit">
      
      <HeaderDashboard name={"MyCourses"} />

      <div className="mx-2 sm:mx-5">
        <div className="font-bold text-3xl text-cust-blue py-5">
          <h3>Kelas Saya</h3>
        </div>
        <FilterMyCourses />
        <div className="py-3 w-full font-medium text-cust-blue">
          <h4>Berikut kelas yang telah saya klaim :</h4>
        </div>
          <MyCoursesCard />
      </div>
    </div>
  );
};

export default MyCourses;
