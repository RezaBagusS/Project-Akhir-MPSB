import dataCoursesModule from "../../data/dataCoursesModule";
import { useNavigate } from "react-router-dom";

const MyCoursesCard = ({ getCourse }) => {
  const navigate = useNavigate();

  const filteredCourses = dataCoursesModule.filter((item) =>
    getCourse.includes(item.tag.toLowerCase())
  );

  return filteredCourses.length === 0 ? (
    <div className="flex justify-center align-middle text-lg">
      <div
        id="toast-danger"
        className="flex items-center w-fit p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Error icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">Tidak ada kelas yang telah di Klaim</div>
      </div>
    </div>
  ) : (
    <div>
      {filteredCourses.map((item) => {
        return (
          <div
            key={item.id}
            className="mt-5 grid grid-cols-1 md:grid-cols-10 -z-50 gap-x-4 p-4 bg-white rounded-md drop-shadow-sm"
          >
            <div className="p-2 bg-slate-300 w-full flex justify-center items-center rounded-md md:col-span-2">
              <div className="w-20 h-24">{item.svg}</div>
            </div>
            <div className="flex justify-center items-center p-2 md:col-span-6 lg:col-span-7">
              <div className="w-full">
                <h3 className="font-semibold text-lg sm:text-2xl">
                  {item.title}
                </h3>
                <div className="flex mt-4 mb-2">
                  <p className="py-2 bg-cust-yellow w-10/12 rounded-full"></p>
                  <span className="ml-2">0%</span>
                </div>
                <p className="font-medium text-sm sm:text-lg text-slate-500">
                  0/25 Submateri
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center p-2 md:col-span-2 lg:col-span-1">
              <button
                onClick={() => navigate(item.linkCourses)}
                className="cursor-pointer flex justify-center bg-cust-blue hover:bg-blue-600 w-full h-fit py-2 rounded-md text-cust-beige hover:text-white font-medium transition-all duration-500"
              >
                Detail
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyCoursesCard;
