

const DashboardCardIMG = () => {

  const dataCardIMG = [
      {
          id: 1,
          goal: "Promo",
          description: "Mulai berlangganan sekarang juga untuk mendapatkan akses ke seluruh Course dan Challange LearnByCode.",
          img: ('https://res.cloudinary.com/dr0lbokc5/image/upload/v1683805812/Promo_yuj4d6.svghttps://res.cloudinary.com/dr0lbokc5/image/upload/v1683805812/Promo_yuj4d6.svg'),
          button: "Langganan",
      }
  ];

  return dataCardIMG.map((data) => {
      return (
          <div key={data.id} className="h-fit ring-2 ring-gray-200 max-w-sm flex flex-wrap mx-auto justify-center text-center p-2 bg-white rounded-lg">
            <div className="w-full h-40 bg-[url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1683805812/Promo_yuj4d6.svg')] bg-contain bg-no-repeat bg-center"></div>
            <p className="w-full font-medium text-sm my-2 px-4">
              {data.description}
            </p>
            <a className="w-3/5 cursor-not-allowed font-semibold text-md p-2 mb-2 text-blue-300 hover:text-white bg-cust-blue hover:bg-blue-800 rounded-lg transition-all duration-300">
              {/* {data.button} */}
              Coming Soon
            </a>
          </div>
      );
  });
}

export default DashboardCardIMG;
