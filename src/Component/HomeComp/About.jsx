const dataAnggota = [
    {
        nama: "Andhini Widyasari Putri",
        prodi: "Information Technology Education 2021",
    },
    {
        nama: "Reza Bagus Saputra",
        prodi: "Information Technology Education 2021",
    },
    {
        nama: "Apriandhita Aries Prayoga",
        prodi: "Information Technology Education 2021",
    },
];

const About = () => {
  return (
    <div className="py-5">
      <h2 className="text-center text-4xl font-bold py-5">About Us</h2>
      <div className="grid lg:grid-cols-2 py-5">
        <div
          className="bg-[url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1683194605/Vector_AboutUs_uvjls6.svg')]
                    bg-cover bg-left lg:h-80 xl:h-full w-full my-auto hidden lg:flex
                    "
        ></div>
        <div className="grid grid-rows-3 gap-y-4 xl:ml-5">
            {dataAnggota.map((item, index) => {
              return (
                <div className="flex bg-sky-600 w-full h-[120px]" key={index}>
                    <div className="bg-cust-yellow w-4/12 m-2"></div>
                    <div className="my-auto w-full ml-2">
                        <h3 className="font-semibold text-xl italic">{item.nama}</h3>
                        <p className="font-medium text-md italic">{item.prodi}</p>
                    </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default About;
