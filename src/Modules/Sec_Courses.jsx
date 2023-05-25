
import CoursesCardModule from "../Component/ModulesComp/CoursesCardModule";
import HeaderDashboard from "../Component/DashboardComp/HeaderDashboard";
import dataCoursesModule from "../data/dataCoursesModule";
import { useState } from "react";

const courses = () => {
  const [openOption, setOpenOption] = useState(false);

  const handleOpenOption = () => {
    setOpenOption((prev) => !prev);
  };

  return (
    <div className="h-full">
      
      <HeaderDashboard name={"Courses"} />

      <div className="mx-2 sm:mx-5">
        <div className="font-bold text-2xl sm:text-3xl text-cust-blue py-5">
          <h3>Klaim kelasmu sekarang!!</h3>
        </div>
        <div className="flex flex-wrap items-center py-2 group">
          <div className="relative flex w-full drop-shadow-md">
            <input
              onClick={handleOpenOption}
              type="text"
              placeholder="Pilih kelas yang tersedia :"
              className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
            />
            <div
              onClick={handleOpenOption}
              className={`absolute hover:cursor-pointer z-10 p-2 rounded-full right-5 top-2 hover:bg-slate-200
                ${openOption && "bg-slate-200"}
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={`h-3 transition-all duration-200
                    ${openOption && "-rotate-180"}
                  `}
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
            <div
              className={`absolute z-50 top-12 cursor-pointer font-medium text-slate-800 bg-white w-full rounded-sm overflow-hidden
                ${openOption ? "max-h-80 drop-shadow-md" : "max-h-0"}
                transition-all duration-300
              `}
            >
              <option value="HTML" className="w-full p-2 hover:bg-sky-200">
                HTML
              </option>
              <option value="CSS" className="w-full p-2 hover:bg-sky-200">
                CSS
              </option>
              <option
                value="Javascript"
                className="w-full p-2 hover:bg-sky-200"
              >
                Javascript
              </option>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 sm:mx-5 h-fit">
        <div className="py-2 mb-2 w-full font-medium text-cust-blue">
          <h4>Terdapat {dataCoursesModule.length} Kelas yang tersedia</h4>
        </div>
        <div className="flex flex-wrap gap-5 justify-center h-fit pb-10">
          <CoursesCardModule />
        </div>
      </div>
    </div>
  );
};

export default courses;
