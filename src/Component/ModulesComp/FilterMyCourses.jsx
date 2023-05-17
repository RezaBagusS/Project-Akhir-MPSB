import { useState } from "react";

const FilterMyCourses = () => {
  const [isClicked1, setIsClicked1] = useState(true);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const [isDown, setIsDown] = useState(false);

  const handleClick = () => {
    setIsDown((prev) => !prev);
  };

  const styleFalse = `hidden sm:block py-2 px-4 cursor-pointer bg-white hover:bg-slate-200 hover:font-medium hover:ring-1 rounded-lg drop-shadow-sm`;
  const styleTrue = `hidden sm:block py-2 px-4 cursor-pointer bg-slate-200 font-medium ring-1 rounded-lg drop-shadow-sm`;

  return (
    <div className="flex justify-start gap-x-5 align-middle font-normal">
      <div
        onClick={() => {
          setIsClicked1(true);
          setIsClicked2(false);
          setIsClicked3(false);
        }}
        className={isClicked1 ? styleTrue : styleFalse}
      >
        <p>Semua</p>
      </div>

      <div
        onClick={() => {
          setIsClicked1(false);
          setIsClicked2(true);
          setIsClicked3(false);
        }}
        className={isClicked2 ? styleTrue : styleFalse}
      >
        <p className="whitespace-nowrap">Sedang Dipelajari</p>
      </div>

      <div
        onClick={() => {
          setIsClicked1(false);
          setIsClicked2(false);
          setIsClicked3(true);
        }}
        className={isClicked3 ? styleTrue : styleFalse}
      >
        <p>Selesai</p>
      </div>

      <div 
        onClick={handleClick}
        className="flex sm:hidden justify-between w-full bg-white cursor-pointer drop-shadow-md py-3 px-4 rounded-md">
        <p className="font-medium text-lg text-cust-blue">Filter :</p>
        <span className={`p-2
            ${isDown && "bg-slate-200 rounded-full"}
        `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={`h-3 transition-all duration-200
             ${isDown && "-rotate-180"}
            `}
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </span>
        <div
          className={`absolute z-50 top-14 left-0 cursor-pointer font-medium text-slate-800 bg-white w-full rounded-sm overflow-hidden
                ${isDown ? "max-h-80 drop-shadow-md" : "max-h-0"}
                transition-all duration-300
              `}
        >
          <option value="Semua" className="w-full p-2 hover:bg-sky-200">
            Semua
          </option>
          <option value="Otw" className="w-full p-2 hover:bg-sky-200">
            Sedang Dipelajari
          </option>
          <option value="Selesai" className="w-full p-2 hover:bg-sky-200">
            Selesai
          </option>
        </div>
      </div>
    </div>
  );
};

export default FilterMyCourses;
