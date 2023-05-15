const dataCard = [
    {
      title: "HTML",
      description:
        "HTML is a markup language used to create beautiful and attractive web pages by managing appearance and content.",
      svg: (
        <svg viewBox="0 0 452 520"
          className="w-28 sm:w-44 sm:h-44 mx-auto">
          <title>HTML5 Logo Badge</title>
          <path fill="RGB(227,79,38)" d="M 41,460 L 0,0 451,0 410,460 225,512" />
          <path fill="RGB(239,101,42)" d="M 226,472 L 375,431 410,37 226,37" />
          <path
            fill="RGB(236,237,238)"
            d="M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z"
          />
          <path
            fill="RGB(255,255,255)"
            d="M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z"
          />
        </svg>
      ),
    },
  
    {
      title: "CSS",
      description:
        "CSS is a styling language used to define the appearance of web pages made with HTML.",
      svg: (
        <svg viewBox="0 0 452 520"
        className="w-28 sm:w-44 sm:h-44 mx-auto">
          <title>CSS3 Logo Badge</title>
          <path fill="RGB(12,115,184)" d="M 41,460 L 0,0 451,0 410,460 225,512" />
          <path fill="RGB(48,169,220)" d="M 226,472 L 375,431 410,37 226,37" />
          <path
            fill="RGB(236,237,238)"
            d="M 226,208 L 94,208 99,265 226,265 z M 226,94 L 84,94 89,150 226,150 z M 226,355 L 102,322 109,382 226,414 z"
          />
          <path
            fill="RGB(255,255,255)"
            d="M 226,265 L 295,265 288,338 226,355 226,414 341,382 367,94 226,94 226,150 306,150 300,208 226,208 z"
          />
        </svg>
      ),
    },
  
    {
      title: "JS",
      description:"JavaScript is a multi-platform (Client & Server) programming language used to create interactive and dynamic web pages.",
      svg: (
          <svg viewBox="0 0 452 520"
          className="w-28 sm:w-44 sm:h-44 mx-auto">
        <title>Javascript Logo Badge</title>
        <path fill='RGB(229,162,40)' d='M 0,0 L 451,0 410,460 225,512 41,460'/>
        <path fill='RGB(241,191,38)' d='M 226,472 L375,431 410,37 226,37'/>
        <path fill='RGB(236,237,238)' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z'/>
        <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z'/>
      </svg>
      )
    },
  ];
  
  const CoursesCard = ({data}) => {
      
      const handleProps = () => {
         return data === "HTML" ? dataCard[0] : data === "CSS" ? dataCard[1] : dataCard[2] 
      }
  
    return (
      <div className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-[30%] h-[485px] relative rounded-lg my-2 mx-4 lg:mx-2 drop-shadow-md bg-gray-800 border-gray-700">
        <div className="p-5">
          <div className="w-full cursor-pointer bg-slate-300 p-5 rounded-lg group">
            <div className="group-hover:scale-75 transition-all duration-700">
              {handleProps().svg}
            </div>
          </div>
          <h5 className="text-center mb-2 py-2 text-2xl font-bold tracking-tight text-white">
            {handleProps().title}
          </h5>
          <p className="mb-3 text-justify font-normal text-gray-400">
            {handleProps().description}
          </p>
          <a
            href="/dashboard"
            className="absolute group inline-flex font-bold justify-center items-center 
            py-3 px-5 text-base text-center text-white rounded-lg bg-cust-blue 
            hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900
            bottom-5 left-3"
          >
            Learn
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5 group-hover:ml-5 transition-all duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
            </svg>
          </a>
        </div>
      </div>
    );
  };
  
  export default CoursesCard;

  