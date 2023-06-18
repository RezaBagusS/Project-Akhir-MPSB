const DashboardCardNoIMG = () => {
  const dataCard = [
    {
      id: 1,
      title: "Mulai Belajar",
      description:
        "Mulailah memilih course yang ingin kamu pelajari, dan dapatkan pengalaman belajar yang menyenangkan.",
      button: "Pilih Courses",
      link: "/dashboard/courses",
    },
    {
      id: 2,
      title: "Asah Kemampuanmu",
      description:
        "Uji kemampuanmu dalam bidang web development dan raih kesempatan untuk meningkatkan skill ngodingmu.",
      button: "Ikut Challange",
      link: "/dashboard/challenges",
    },
  ];

  return dataCard.map((data) => {
    return (
      <div key={data.id} 
        className="max-w-sm flex ring-2 ring-gray-200 flex-wrap justify-center text-center mx-auto p-2 bg-white rounded-lg">
        <h3 className="font-semibold text-lg py-2">{data.title}</h3>
        <p className="w-full font-medium text-sm my-3 px-4">
          {data.description}
        </p>
        <a 
          href={data.link}
          className="w-3/5 cursor-pointer font-semibold text-sm sm:text-md p-2 mb-2 text-blue-300 hover:text-white bg-cust-blue hover:bg-blue-800 hover:scale-[.95] rounded-lg transition-all duration-300">
          {data.button}
        </a>
      </div>
    );
  });
};

export default DashboardCardNoIMG;
