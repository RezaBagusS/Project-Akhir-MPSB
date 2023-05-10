const dataAnggota = [
    {
        nama: "Andhini Widyasari Putri",
        prodi: "Information Technology Education 2021",
        photo: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1683692844/foto_Andhini_mjhnxd.svg"
    },
    {
        nama: "Reza Bagus Saputra",
        prodi: "Information Technology Education 2021",
        photo: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1683692844/foto_Reza_y0pusx.svg"
    },
    {
        nama: "Apriandhita Aries Prayoga",
        prodi: "Information Technology Education 2021",
        photo: "https://res.cloudinary.com/dr0lbokc5/image/upload/v1683692843/foto_Yoga_sycndy.svg"
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
                <div className="flex w-10/12 lg:w-full h-[120px] mx-auto" key={index}>
                    <img 
                      src={item.photo} 
                      alt="MisssingIMG" 
                      className="mr-2 rounded-full border-cust-blue"
                    />
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
