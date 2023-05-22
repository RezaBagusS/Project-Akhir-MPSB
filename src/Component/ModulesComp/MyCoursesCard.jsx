import dataCoursesModule from "../../data/dataCoursesModule";

const MyCoursesCard = () => {
  return (
    // Template dulu dengan data HTML
    <div className="mt-5 grid grid-cols-1 md:grid-cols-10 -z-50 gap-x-4 p-4 bg-white rounded-md drop-shadow-sm">
      <div className="p-2 bg-slate-300 w-full flex justify-center items-center rounded-md md:col-span-2">
        <div className="w-20 h-24">{dataCoursesModule[0].svg}</div>
      </div>
      <div className="flex justify-center items-center p-2 md:col-span-6 lg:col-span-7">
        <div className="w-full">
          <h3 className="font-semibold text-lg sm:text-2xl">
            {dataCoursesModule[0].title}
          </h3>
          <div className="flex mt-4 mb-2">
            <p className="p-2 bg-cust-yellow w-10/12"></p>
            <span className="ml-2">0%</span>
          </div>
          <p className="font-medium text-sm sm:text-lg text-slate-500"> 0/25 Submateri </p>
        </div>
      </div>
      <div className="flex justify-center items-center p-2 md:col-span-2 lg:col-span-1">
        <button className="bg-cust-blue hover:bg-blue-600 w-full h-fit py-2 rounded-md text-cust-beige hover:text-white font-medium transition-all duration-500">
          Detail
        </button>
      </div>
    </div>
  );
};

export default MyCoursesCard;
