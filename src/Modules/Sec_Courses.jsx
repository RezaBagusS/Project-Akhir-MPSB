import { useState } from "react";
import CoursesCardModule from "../Component/ModulesComp/CoursesCardModule";

const courses = () => {
  const [isDown, setIsDown] = useState(false);
  const [openOption, setOpenOption] = useState(false);

  const handleClick = () => {
    setIsDown((prev) => !prev);
  };

  const handleOpenOption = () => {
    setOpenOption((prev) => !prev);
  };

  return (
    <div className="h-full">
      <div className="relative flex items-center h-[15vh] mx-2 sm:mx-5 sm:mt-0">
        <h3 className="flex font-bold text-xl ml-6 sm:ml-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="w-6 h-6 fill-black mr-2"
          >
            <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
          </svg>
          Courses
        </h3>
        <div
          onClick={handleClick}
          className={`absolute flex items-center right-0 ml-2 group hover:bg-slate-300 rounded-lg p-2 cursor-pointer transition-all duration-300
          ${isDown && "bg-slate-300 ring-2 ring-slate-400"}
        `}
        >
          <p className="text-md px-2 hidden sm:flex">Anonymous</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-5"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <div className="py-2 ps-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={`h-3 ${
                isDown && "-rotate-180"
              } transition-all duration-500`}
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mx-2 sm:mx-5">
        <div className="font-bold text-3xl text-cust-blue py-5">
          <h3>Klaim kelasmu sekarang !!</h3>
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
          <h4>Terdapat XX Kelas yang tersedia</h4>
        </div>
        <div className="flex flex-wrap gap-5 justify-center h-fit pb-10">
          <CoursesCardModule />
        </div>
      </div>
    </div>
  );
};

export default courses;
