import { getDataHeader } from "../../data/dataHeaderDashboard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderDashboard = ({ name }) => {
  const [isDown, setIsDown] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsDown((prev) => !prev);
  };

  return (
    <div className="relative flex items-center h-[15vh] mx-2 sm:mx-5 sm:mt-0">
      <h3 className="flex font-bold text-xl ml-6 sm:ml-0">
        {getDataHeader(name).icon}
        {getDataHeader(name).title}
      </h3>
      <div className="absolute right-0 flex flex-row gap-x-3">
        <div className="flex items-center">
          <button 
            onClick={() => navigate("/")}
            className="cursor-pointer text-sm font-light bg-transparent px-4 py-3 rounded-md ring-1 hover:ring-0 hover:bg-blue-500 hover:text-white transition-all duration-300">
            Back to Homepage
          </button>
        </div>
        <div
          onClick={handleClick}
          className={`flex items-center ml-2 group ring-1 hover:text-white hover:ring-0 hover:bg-blue-500 rounded-lg p-2 cursor-pointer transition-all duration-200
              ${isDown && "bg-slate-300 ring-2 ring-slate-400"}
              `}
        >
          <p className="text-md px-2 hidden sm:flex">
            {localStorage.getItem("username")}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-5 group-hover:fill-white"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <div className="py-2 ps-2 group-hover:fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={`h-3 ${
                isDown && "-rotate-180 "
              } transition-all duration-500`}
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeaderDashboard;
