import dataCoursesModule from "../../data/dataCoursesModule";

const CoursesCardModule = () => {
  return dataCoursesModule.map((item) => {
    return (
      <div className="xl:w-[32%] lg:w-[40%] md:w-[45%] h-fit sm:h-[490px] bg-white p-2 rounded-md" key={item.id}>
        <div className="flex justify-center items-center w-full h-[40%] sm:h-[50%] bg-slate-300 py-4 rounded-t-md">
          <div className="w-4/5 h-4/5">{item.svg}</div>
        </div>
        <main className="w-full h-[40%] sm:h-[30%] text-cust-blue px-3">
          <h2 className="text-xl font-semibold py-3">
            {item.title}
          </h2>
          <div className="pb-3 mb-3 font-semibold text-slate-700 opacity-80 text-justify rounded-t-lg text-sm">
            {item.description}
          </div>
        </main>
        <footer className="h-[15%] sm:h-[12%] px-3 mt-1">
          <div className="flex justify-between font-medium text-lg mb-3 border-t-2 pt-2">
            <div className="text-slate-700">
              {item.statusDiskon && (
                <>
                  <s>{item.harga}</s>
                  <span className="py-1 px-2 ml-2 rounded-md bg-cust-orange text-white">
                    {item.totalDiskon} %
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
          <button className="bg-sky-600 hover:bg-sky-700 w-full h-fit py-2 rounded-md mt-auto text-cust-beige hover:text-white font-medium transition-all duration-300">
            Klaim Kelas
          </button>
        </footer>
      </div>
    );
  });
};

export default CoursesCardModule;
