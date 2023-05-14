import { useState } from "react";

const Challange = () => {
  const [isDown, setIsDown] = useState(false);

  const handleClick = () => {
    setIsDown((prev) => !prev);
  };

  return (
    <div className="relative flex items-center h-[15vh] mx-2 sm:mx-5 sm:mt-0">
      <h3 className="flex font-bold text-xl ml-6 sm:ml-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="w-6 h-6 fill-black mr-2"
        >
          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
        </svg>
        Challanges
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
  );
};

export default Challange;
