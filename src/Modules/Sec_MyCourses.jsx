// import FilterMyCourses from "../Component/ModulesComp/FilterMyCourses";
import MyCoursesCard from "../Component/ModulesComp/MyCoursesCard";
import HeaderDashboard from "../Component/DashboardComp/HeaderDashboard";
import { useEffect, useState } from "react";
import {
  getDataCoursesModule,
  getProgressMateri,
} from "../Helpers/AuthHelpers";

const MyCourses = () => {
  const [dataCoursesModule, setDataCoursesModule] = useState();
  const [getProgress, setGetProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    try {
      const dataCourse = await getDataCoursesModule();
      setDataCoursesModule(dataCourse);
      localStorage.setItem("myDataCourses", dataCourse.tag);
      const progress = await getProgressMateri(dataCourse.data[0].kodeKelas);
      setGetProgress(progress);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="h-fit">
      <HeaderDashboard name={"MyCourses"} />
      <div className="mx-2 sm:mx-5">
        <div className="font-bold text-3xl text-cust-blue py-5">
          <h3>Kelas Saya</h3>
        </div>
        {/* <FilterMyCourses /> */}
        <div className="py-3 w-full font-medium text-cust-blue">
          <h4>Berikut kelas yang telah saya klaim :</h4>
        </div>
        <div>
          {loading ? (
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[10%] mx-auto animate-spin my-28"
              >
                <path
                  fillRule="evenodd"
                  d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Loading . . . </p>
            </div>
          ) : (
            <div>
              <MyCoursesCard
                getCourse={dataCoursesModule}
                getProgress={getProgress}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
