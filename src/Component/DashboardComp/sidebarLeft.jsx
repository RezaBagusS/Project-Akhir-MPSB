import { useState } from "react";
import SideBarModules from "./Part/SideBarModules";

const SidebarLeft = () => {
    const [isClose, setIsClose] = useState(false);

  return (
    <div className={`bg-slate-600 overflow-hidden h-screen w-7/12 sm:w-5/12 md:w-4/12 lg:w-3/12 text-cust-beige
        ${isClose ? 'w-[80px] sm:w-[80px] md:w-[80px] lg:w-[80px]' : ''}
    transition-all duration-500`}>
      <div className="relative flex justify-center items-center bg-slate-700 h-[15vh] py-2 ps-6 pe-3">
        <div className="w-full font-semibold text-xl transition-all duration-300">
            Academy
        </div>
        <div className={`absolute flex justify-center items-center w-2/12 h-10 right-0
            ${isClose && 'w-full bg-slate-700'}
        transition-all duration-700`}>
          <div className="flex justify-center items-center w-6 h-6 cursor-pointer bg-cust-orange hover:ring-4 hover:ring-slate-500 rounded-sm transition-all duration-300">
            <svg 
                onClick={() => {
                    setIsClose(prev => !prev);
                }}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
                className={`w-6 h-6 p-1 fill-cust-beige ${isClose ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 `}
            >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[75vh] w-full py-2 font-medium text-md">
        <SideBarModules isClose={isClose} />
      </div>
      <div className={`flex justify-center h-[10vh] py-2 border-t-2 border-gray-500 mx-5
        ${isClose ? 'hidden' : 'block'}
      `}>
        <span className="block text-sm text-gray-400 text-center">
          © 2023{" "}
          <a href="/" className="hover:underline">
            LearnByCode™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default SidebarLeft;
