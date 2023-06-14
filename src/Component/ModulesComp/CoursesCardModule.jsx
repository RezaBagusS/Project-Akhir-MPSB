import dataCoursesModule from "../../data/dataCoursesModule";
import { useEffect, useState } from "react";
import {
  getDataCoursesModule,
  sendClaimClass,
} from "../../Helpers/AuthHelpers";

const CoursesCardModule = () => {
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");
  const [dataKlaim, setDataKlaim] = useState(
    localStorage.getItem("dataKlaim")
  );

  useEffect(() => {
    handleProcessGetCourses();
  },[]);

  const handleLoading = () => {
    setLoading((prev) => !prev);
  };

  const handleProcessGetCourses = async () => {
    try {
      const result = await getDataCoursesModule();
      console.log("Dalam Process Get Courses: ", loading);
      setDataKlaim(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleProcessClaim = async (tag) => {
    try {
      handleLoading();
      await sendClaimClass(tag);
      setTag("");
      console.log("Dalam Process Claim: ", loading);
      await handleProcessGetCourses();
    } catch (error) {
      console.log(error);
    }
  };

  const getTag = (tag) => {
    setTag(tag);
  };

  const handleClaimClick = (item) => {
    getTag(item.tag.toLowerCase());
    handleProcessClaim(item.tag.toLowerCase());
  };

  return dataCoursesModule.map((item) => {
    return (
      <div
        className="xl:w-[32%] lg:w-[40%] md:w-[45%] h-fit sm:h-[490px] bg-white p-2 rounded-md"
        key={item.id}
      >
        <div className="flex justify-center items-center w-full h-[40%] sm:h-[50%] bg-slate-300 py-4 rounded-t-md">
          <div className="w-2/5 h-2/5 sm:w-4/5 sm:h-4/5">{item.svg}</div>
        </div>
        <main className="w-full h-[40%] sm:h-[30%] text-cust-blue px-3">
          <h2 className="text-xl font-semibold py-3">{item.title}</h2>
          <div className="pb-3 mb-3 font-semibold text-slate-700 opacity-80 text-justify rounded-t-lg text-sm">
            {item.description}
          </div>
        </main>
        <footer className="h-[15%] sm:h-[12%] px-3 mt-1">
          <div className="flex justify-between font-medium text-lg mb-3 border-t-2 pt-2">
            <div className="text-slate-700 text-sm sm:text-lg">
              {item.statusDiskon && (
                <>
                  <s>{item.harga}</s>
                  <span className="py-1 px-2 ml-2 rounded-md bg-cust-orange text-white">
                    {item.totalDiskon}%
                  </span>
                </>
              )}
              {!item.statusDiskon && (
                <>
                  <p>{item.harga}</p>
                </>
              )}
            </div>
            <p className="text-cust-orange ">{item.status}</p>
          </div>
          <button
            disabled={loading}
            onClick={() => handleClaimClick(item)}
            className={`bg-sky-600 hover:bg-sky-700 w-full h-fit py-2 rounded-md mt-auto text-cust-beige hover:text-white font-medium transition-all duration-300
              ${loading && "opacity-90 hover:cursor-not-allowed"}
              ${
                dataKlaim.includes(item.tag.toLowerCase()) &&
                "bg-sky-900 hover:bg-sky-950 opacity-80 hover:cursor-not-allowed"
              }
              `}
          >
            {loading && item.tag.toLowerCase() === tag.toLowerCase() && (
              <svg
                aria-hidden="true"
                className="inline-flex w-5 h-5 mr-2 text-gray-200 animate-spin  fill-sky-700 "
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
            {dataKlaim.includes(item.tag.toLowerCase())
              ? "Sudah diambil"
              : item.tag.toLowerCase() === tag.toLowerCase()
              ? ""
              : "Klaim Kelas"}
          </button>
        </footer>
      </div>
    );
  });
};

export default CoursesCardModule;
