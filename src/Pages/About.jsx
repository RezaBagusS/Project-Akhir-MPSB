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
      <div className="grid grid-cols-2 py-5">
        <div
          className="bg-[url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1683194605/Vector_AboutUs_uvjls6.svg')]
                    bg-no-repeat bg-cover bg-center h-96 w-full my-auto
                    "
        ></div>
        <div className="grid grid-rows-3 gap-y-4 ml-5">
            {dataAnggota.map((item, index) => {
              return (
                <div className="flex" key={index}>
                    <div className="rounded-full bg-cust-yellow w-28 h-28 m-2"></div>
                    <div className="my-auto px-2">
                        <h3 className="font-semibold text-2xl italic">{item.nama}</h3>
                        <p className="font-medium text-lg italic">{item.prodi}</p>
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
