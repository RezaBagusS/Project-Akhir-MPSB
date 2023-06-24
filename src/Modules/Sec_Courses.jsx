import CoursesCardModule from "../Component/ModulesComp/CoursesCardModule";
import HeaderDashboard from "../Component/DashboardComp/HeaderDashboard";
import dataCoursesModule from "../data/dataCoursesModule";
import { useDebounce } from "../Helpers/UseDebounce";
import { useState, useEffect } from "react";
import { getDataCoursesModule } from "../Helpers/AuthHelpers";
import { motion } from "framer-motion";

const courses = () => {
  const [searchResult, setSearchResult] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [dataCourses, setDataCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchDebounce = useDebounce(searchQuery, 1000) || "";

  useEffect(() => {
    setSearchResult(getSearchQuery());
  }, [searchDebounce]);

  useEffect(() => {
    handleProcessGetCourses();
  }, []);

  const handleProcessGetCourses = async () => {
    try {
      let result = await getDataCoursesModule();

      console.log("result : ", result);

      setDataCourses(result);
      localStorage.setItem("oldDataCourses", result);
      localStorage.setItem("newDataCourses", result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchQuery = () => {
    let result = [];

    dataCoursesModule.forEach((item) => {
      if (item.tag.toLowerCase().includes(searchDebounce.toLowerCase())) {
        result = [...result, item.tag.toLowerCase()];
      }
    });

    return result;
  };

  return (
    <>
      <div className="h-full">
        <HeaderDashboard name={"Courses"} />
        {console.log("data Course : ", dataCourses)}

        <div className="mx-2 sm:mx-5">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5 },
              type: "spring",
            }}
            className="font-bold text-2xl sm:text-3xl text-cust-blue py-5"
          >
            <h3>Klaim kelasmu sekarang!!</h3>
          </motion.div>
          <div className="flex flex-wrap items-center py-2 group">
            <div className="relative flex w-full drop-shadow-md">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Pilih kategori kelas yang tersedia :"
                className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="mx-2 sm:mx-5 h-fit">
          <div className="py-2 mb-2 w-full font-medium text-cust-blue">
            <h4>Terdapat {searchResult.length} Kelas yang tersedia</h4>
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
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className="flex flex-wrap gap-5 justify-center h-fit pb-10"
              >
                <CoursesCardModule
                  getCourses={dataCourses}
                  searchResult={searchResult}
                  apiCourses={handleProcessGetCourses}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default courses;
