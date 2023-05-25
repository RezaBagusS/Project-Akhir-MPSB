import dataCoursesModule from "../../data/dataCoursesModule";

const DetailCourseCard = ({ course }) => {

    const getCourse = dataCoursesModule.find((item) => item.tag.toLowerCase() === course);

  return (
    <div className="h-fit text-[#202020] w-full cust-container pb-6">
      <div className="h-fit px-8 py-4 flex flex-col items-center text-cust-blue">
        <div className="bg-white mt-5 p-5 rounded-md drop-shadow-md ">
          <h1 className="font-bold text-2xl mb-5">Deskripsi Kelas</h1>
          <p className="text-start">
            {
              getCourse.descriptionDetail
            }
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-5 mb-10 w-full drop-shadow-md">
          <div className="w-full text-start p-5 mt-5 col-span-8 bg-white rounded-md drop-shadow-md">
            <h1 className="font-bold text-lg">Apasih tujuan kelas ini?</h1>
            <ul className="text-base font-normal">
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

          <div className="w-full flex-col items-center px-5 pb-5 mt-5 col-span-4 bg-white rounded-md drop-shadow-md">
            <div className="w-40 h-w-40 mx-auto drop-shadow-md">
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684937983/Five_Star_HD_z9npep.png"
                alt="MissingIMG"
              />
            </div>
            <div className="flex w-3/4 justify-center mx-auto font-bold text-lg text-cust-beige p-2 bg-cust-orange rounded-md drop-shadow-md">
              <p>Terdapat { getCourse.materi.length } Materi</p>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-12 gap-5 border-t-2 border-black border-opacity-30 pt-5">
          <div className="col-span-8 text-cust-blue w-full">
            <div className="p-5 flex flex-col bg-white rounded-md drop-shadow-md">
              <h1 className="font-bold text-lg">Persiapan Kelas</h1>
              <p className="mb-3">
                Berikut persiapan yang perlu kalian lakukan:
              </p>
              <ul className="text-base font-normal">
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

          <div className="col-span-4 flex flex-col gap-5 p-5 justify-center items-center bg-white rounded-md drop-shadow-md">
            <p>
              Mari kita mulai petualangan kreatif ini dan bertransformasi
              menjadi pengembang web yang handal!
            </p>
            <a className="font-bold text-lg cursor-pointer bg-cust-blue text-cust-beige py-2 px-5 rounded-md hover:drop-shadow-md">
              Lets Start
            </a>
          </div>

          <div className="col-span-8">
            <div className="flex flex-col gap-y-2 bg-white p-5 rounded-md drop-shadow-md">
              <h1 className="font-bold text-lg">Materi</h1>
              {
                getCourse.materi.map((item, index) => {
                  return (
                    <div key={index} className="w-full bg-cust-orange rounded-md py-3 px-4 text-cust-beige font-medium text-base drop-shadow-md">
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
