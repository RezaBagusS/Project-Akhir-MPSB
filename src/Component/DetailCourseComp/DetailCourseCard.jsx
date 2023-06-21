
import dataCoursesModule from "../../data/dataCoursesModule";

const DetailCourseCard = ({ course }) => {

    const getCourse = dataCoursesModule.find((item) => item.tag.toLowerCase() === course);

  return (
    <div className="h-fit text-[#202020] w-full pb-6">
      <div className="h-fit sm:px-8 py-4 flex flex-col items-center text-cust-blue">
        <div className="bg-white mt-5 p-5 rounded-md drop-shadow-md ">
          <h1 className="font-bold text-lg sm:text-2xl mb-5">Deskripsi Kelas</h1>
          <p className="text-start text-sm sm:text-base">
            {
              getCourse.descriptionDetail
            }
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-5 mb-10 w-full drop-shadow-md">
          <div className="w-full text-start p-5 mt-5 sm:col-span-8 bg-white rounded-md drop-shadow-md">
            <h1 className="font-bold text-lg">Apasih tujuan kelas ini?</h1>
            <ul className="text-sm sm:text-base font-normal">
              {
                getCourse.tujuanPembelajaran.map((item, index) => {
                  return (
                    <li key={index}>
                      - {item}
                    </li>
                  );
                })
              }
            </ul>
          </div>

          <div className="w-full px-5 pb-5 mt-5 sm:col-span-4 bg-white rounded-md drop-shadow-md">
            <div className="w-32 md:w-36 lg:w-40 h-32 md:h-36 lg:h-40 mx-auto drop-shadow-md sm:mt-8 md:mt-0">
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684937983/Five_Star_HD_z9npep.png"
                alt="MissingIMG"
              />
            </div>
            <div className="flex  md:w-3/4 justify-center mx-auto font-bold text-sm lg:text-base text-center text-cust-beige p-2 bg-cust-orange rounded-md drop-shadow-md">
              <p>Terdapat { getCourse.materi.length } Materi</p>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 border-t-2 border-black border-opacity-30 pt-5">
          <div className="md:col-span-8 text-cust-blue w-full">
            <div className="p-5 flex flex-col bg-white rounded-md drop-shadow-md">
              <h1 className="font-bold text-lg">Persiapan Kelas</h1>
              <p className="mb-3">
                Berikut persiapan yang perlu kalian lakukan:
              </p>
              <ul className="text-sm sm:text-base font-normal">
                {
                  getCourse.persiapanKelas.map((item, index) => {
                    return (
                      <li key={index}>
                        - {item}
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-5 p-5 text-sm sm:text-base text-center justify-center items-center bg-white rounded-md drop-shadow-md">
            <p>
              Mari kita mulai petualangan kreatif ini dan bertransformasi
              menjadi pengembang web yang handal!
            </p>
            <a 
              href={`/dashboard/mycourses/${course}/material`}
              className="font-bold text-lg cursor-pointer bg-cust-blue text-cust-beige hover:bg-sky-600 hover:scale-95 py-2 px-5 rounded-md hover:drop-shadow-md transition-all duration-300">
              Lets Start
            </a>
          </div>

          <div className="md:col-span-8">
            <div className="flex flex-col gap-y-2 bg-white p-5 rounded-md drop-shadow-md">
              <h1 className="font-bold text-lg">Materi</h1>
              {
                getCourse.materi.map((item, index) => {
                  return (
                    <div key={index} className="w-full bg-cust-orange rounded-md py-2 sm:py-3 px-3 sm:px-4 text-cust-beige font-medium text-sm sm:text-base drop-shadow-md">
                      { index + 1 }. { item }
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCourseCard;
