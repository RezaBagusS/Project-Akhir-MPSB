import { useState } from "react";

const FilterMyCourses = () => {
  const [isClicked1, setIsClicked1] = useState(true);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const styleFalse = `block py-2 px-4 cursor-pointer bg-white hover:bg-slate-200 text-xs sm:text-base hover:font-medium hover:ring-1 rounded-lg drop-shadow-sm`;
  const styleTrue = `block py-2 px-4 cursor-pointer bg-slate-200 text-xs sm:text-base font-medium ring-1 rounded-lg drop-shadow-sm`;

  return (
    <div className="flex flex-wrap justify-start gap-5 align-middle font-normal">
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
    </div>
  );
};

export default FilterMyCourses;
