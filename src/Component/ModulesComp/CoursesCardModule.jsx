import dataCoursesModule from "../../data/dataCoursesModule";

const CoursesCardModule = () => {
  return dataCoursesModule.map((item) => {
    return (
      <div className="w-[32%] h-[450px] bg-white p-2 rounded-md" key={item.id}>
        <div className="w-full h-[50%] bg-slate-300 py-4 rounded-t-md">
          {item.svg}
        </div>
        <main className="w-full h-[28%] text-cust-blue px-3">
          <h2 className="text-xl font-semibold py-3">
            {item.title}
          </h2>
          <div className="pb-3 mb-3 font-semibold text-slate-700 opacity-80 text-justify rounded-t-lg text-sm">
            {item.description}
          </div>
        </main>
        <footer className="h-[10%] px-3">
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
          <button className="bg-sky-600 hover:bg-sky-700 w-full h-fit  py-2 rounded-md mt-auto text-cust-beige hover:text-white font-medium transition-all duration-300">
            Klaim Kelas
          </button>
        </footer>
      </div>
    );
  });
};

export default CoursesCardModule;
