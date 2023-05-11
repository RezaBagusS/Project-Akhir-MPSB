const SecDashboard = () => {
  return (
    <>
      {/* Header */}
      <div className="relative flex items-center h-[15vh] mx-5 mt-8 sm:mt-0">
        <h3 className="font-bold text-3xl">Dashboard</h3>
        <div className="absolute flex items-center right-0 mx-2">
          <p className="text-xl px-2">Anonymous</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-5"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <div className="py-2 ps-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-3"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>
        </div>
      </div>

      {/* welcome */}
      <div className="flex flex-wrap items-center justify-center text-center py-2 mb-12 bg-cust-blue">
        <div className="py-2 text-cust-beige">
          <h3 className="w-full font-bold text-3xl">Hi, Anonymous 👋</h3>
          <p className="w-full font-medium text-lg py-2">
            Bagaimana kabarmu? senang bisa berjumpa kembali !!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-5 w-10/12 sm:w-9/12 mx-auto">
        {/* Introduction */}
        <div className="col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="lg:col-span-2 h-fit font-medium text-md text-justify justify-center p-8 bg-white rounded-lg">
              <p>
                LearnByCode adalah sebuah aplikasi media pembelajaran yang
                inovatif dan modern, yang dirancang khusus untuk para pengguna
                yang ingin memperdalam dan memperluas pengetahuan mereka dalam
                bidang web development.
              </p>
            </div>
            {/* Courses */}
            <div className="max-w-sm flex flex-wrap justify-center text-center mx-auto p-2 bg-white rounded-lg">
              <h3 className="font-semibold text-lg py-2">Mulai Belajar</h3>
              <p className="w-full font-medium text-sm my-3 px-4">
                Mulailah memilih course yang ingin kamu pelajari, dan dapatkan
                pengalaman belajar yang menyenangkan.
              </p>
              <a className="w-3/5 cursor-pointer font-semibold text-md p-2 mb-2 text-blue-300 bg-cust-blue rounded-lg">
                {" "}
                Pilih Courses{" "}
              </a>
            </div>

            {/* Challange */}
            <div className="max-w-sm flex flex-wrap justify-center text-center mx-auto p-2 bg-white rounded-lg">
              <h3 className="font-semibold text-lg py-2">Asah Kemampuanmu</h3>
              <p className="w-full font-medium text-sm my-3 px-4">
                Uji kemampuanmu dalam bidang web development dan raih kesempatan
                untuk meningkatkan skill ngodingmu.
              </p>
              <a className="w-3/5 cursor-pointer font-semibold text-md p-2 mb-2 text-blue-300 bg-cust-blue rounded-lg">
                {" "}
                Ikut Challange{" "}
              </a>
            </div>

          </div>
        </div>

        {/* Promo */}
        <div className="h-fit max-w-sm flex flex-wrap mx-auto justify-center text-center p-2 bg-white rounded-lg">
          <div className="w-full h-40 bg-[url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1683805812/Promo_yuj4d6.svg')] bg-cover bg-left-top"></div>
          <p className="w-full font-medium text-sm my-2 px-4">
            Mulai berlangganan sekarang juga untuk mendapatkan akses ke seluruh
            Course dan Challange LearnByCode.
          </p>
          <a className="w-3/5 cursor-pointer font-semibold text-md p-2 mb-2 text-blue-300 bg-cust-blue rounded-lg">
            {" "}
            Langganan{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default SecDashboard;
