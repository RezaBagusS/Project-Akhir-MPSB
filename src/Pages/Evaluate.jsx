import { useNavigate, useParams } from "react-router-dom";
import NavbarCourse from "../Component/DetailCourseComp/NavbarCourse";
import { verifyToken } from "../Helpers/AuthHelpers";
import { useQuizContext } from "../Helpers/QuizContext";
import FooterHome from "../Component/HomeComp/FooterHome";
import { useEffect, useState } from "react";
import { getQuiz } from "../data/dataQuiz";

const Evaluate = () => {
  const { getIdSoalBenar } = useQuizContext();
  const { courseId, quizCode } = useParams();
  const [noSoal, setNoSoal] = useState(1);
  const navigate = useNavigate();

  const clearDuplicateOnIdSoal = () => {
    let IdSoalBenar = [...new Set(getIdSoalBenar)];
    return IdSoalBenar;
  }

  const isLogin = () => {
    if (localStorage.getItem("token")) {
      verifyToken();
      return true;
    }
    return window.location.replace("/auth/login");
  };

  useEffect(() => {
    checkHasAttemptQuiz();
  });

  const checkHasAttemptQuiz = () => {
    if (clearDuplicateOnIdSoal().length !== 0) {
      return true;
    }
    return window.location.replace(
      `/dashboard/mycourses/${courseId}/quiz/${quizCode}`
    );
  };

  const getStyleTotalBenar = () => {
    let getTotalBenar = clearDuplicateOnIdSoal().length;
    if (getTotalBenar === 0) {
      return `w-0 hidden`;
    } else if (getTotalBenar === 5) {
      return `w-full`;
    } else if (getTotalBenar === 1) {
      return `w-1/5`;
    }
    return `w-${getTotalBenar}/5`;
  };

  const getStyleTotalSalah = () => {
    let getTotalSalah = 5 - clearDuplicateOnIdSoal().length;
    if (getTotalSalah === 0) {
      return `w-0 hidden`;
    } else if (getTotalSalah === 5) {
      return `w-full`;
    } else if (getTotalSalah === 1) {
      return `ml-1 w-1/5`;
    }
    return `ml-1 w-${getTotalSalah}/5`;
  };

  const getPresentase = () => {
    let getTotalBenar = clearDuplicateOnIdSoal().length;
    let getPresentase = (getTotalBenar / 5) * 100;
    return {
      benar: `${getPresentase}%`,
      salah: `${100 - getPresentase}%`,
    };
  };

  const handleNoSoalNext = () => {
    if (noSoal !== handleQuiz().length) {
      setNoSoal((prev) => prev + 1);
    }
  };

  const handleNoSoalPrev = () => {
    if (noSoal !== 1) {
      setNoSoal((prev) => prev - 1);
    }
  };

  const handleQuiz = () => {
    const quiz = getQuiz(courseId, quizCode).find((item) => item.id == quizCode).soalQuiz;
    return quiz;
  };

  const handleCorrection = () => {
    const bgCorrection = clearDuplicateOnIdSoal().includes(noSoal)
      ? {
          benar: "bg-green-600",
          salah: "bg-cust-purple",
          msg: "Jawaban kamu benar",
        }
      : {
          benar: "bg-cust-purple",
          salah: "bg-red-600",
          msg: "Jawaban kamu salah",
        };
    return bgCorrection;
  };

  return (
    <>
      {isLogin()}
      <div className="cust-outer-container bg-white">
        <NavbarCourse course={courseId} />
        <div className="cust-container mx-auto w-full h-full flex flex-col">
          <div className="flex flex-col items-center p-5 text-4xl font-semibold">
            <h1>Selamat, kamu telah menyelesaikan quiz {quizCode}</h1>
          </div>
          <div className="flex flex-wrap justify-center mt-5">
            <h1 className="w-full text-center font-medium text-3xl">
              HASIL QUIZ
            </h1>
            <div className="bg-[#33122F] relative rounded-lg my-5 p-5 w-10/12 text-cust-beige border-2 border-gray-200 drop-shadow-[0px_5px_5px_rgb(0,0,0,0.5)]">
              <div 
                onClick={() => {
                  navigate(`/dashboard/mycourses/${courseId}/material`)
                }}
                className="absolute left-5 top-4 flex flex-row gap-x-2 cursor-pointer hover:bg-[#40223C] active:bg-[#40223C] p-2 rounded-md transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="pointer-events-none"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 12v.01M3 21h18M5 21V5a2 2 0 0 1 2-2h7.5M17 13.5V21M14 7h7m-3-3l3 3l-3 3"
                  />
                </svg>
                <h1 className="pointer-events-none">Kembali ke Materi</h1>
              </div>
              <h1 className="mb-4 flex justify-center text-2xl">
                HI, {localStorage.getItem("username")}
              </h1>
              <div className="flex flex-col text-xl justify-center items-center mb-10">
                <h1>Skor Kamu : </h1>
                <h3 className="text-5xl mt-3 text-cust-yellow">
                  {clearDuplicateOnIdSoal().length * 20}
                </h3>
              </div>
              <h1>Detail :</h1>
              <div className="bg-[#40223C] px-8 pt-4 pb-2 rounded-md">
                <div className="bg-gray-800 flex justify-between w-full rounded-full overflow-hidden ">
                  <div
                    className={`bg-green-400 py-1 text-sm text-center text-black ${getStyleTotalBenar()}`}
                  >
                    {getPresentase().benar}
                  </div>
                  <div
                    className={`bg-red-600 py-1 text-sm text-center text-white ${getStyleTotalSalah()}`}
                  >
                    {getPresentase().salah}
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <h2 className="text-green-400">Correct</h2>
                  <h2 className="text-cust-yellow text-lg">Accuracy</h2>
                  <h2 className="text-red-600">Incorrect</h2>
                </div>
              </div>
              <h1 className="mt-5">Statistik :</h1>
              <div className="grid grid-cols-2 gap-x-5">
                <div className="flex flex-col justify-center items-center h-20 bg-[#40223C] rounded-md">
                  <h3 className="text-3xl">{clearDuplicateOnIdSoal().length}</h3>
                  <h1>Benar</h1>
                </div>
                <div className="flex flex-col justify-center items-center h-20 bg-[#40223C] rounded-md">
                  <h3 className="text-3xl">{5 - clearDuplicateOnIdSoal().length}</h3>
                  <h1>Salah</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#40223C] relative text-cust-beige mx-auto mb-10 w-10/12 h-[360px] p-4 rounded-lg border-2 border-gray-200 drop-shadow-[0px_5px_5px_rgb(0,0,0,0.5)]">
            <h1 className="text-base font-semibold text-center">
              -- Evaluasi --
            </h1>
            <h1 className="text-lg font-semibold text-center">
              {handleQuiz()[noSoal - 1].soal}
            </h1>
            <div className="grid grid-cols-2 gap-5 p-5">
              <div
                className={`bg-cust-purple flex justify-center items-center text-center p-3 h-40 text-sm rounded-md
              ${handleCorrection().benar}
              drop-shadow-[0px_5px_5px_rgb(0,0,0,0.3)]
              `}
              >
                <h1>{handleQuiz()[noSoal - 1].jawabanBenar}</h1>
              </div>
              <div
                className={`bg-cust-purple flex justify-center items-center text-center p-3 h-40 text-sm rounded-md
              ${handleCorrection().salah}
              drop-shadow-[0px_5px_5px_rgb(0,0,0,0.3)]
              `}
              >
                <h1>{handleQuiz()[noSoal - 1].jawabanSalah}</h1>
              </div>
            </div>
            <div className="absolute bottom-3 left-0 w-full flex flex-row justify-between gap-5 px-10">
              <div>
                <h1>{handleCorrection().msg}</h1>
              </div>
              <div className="flex flex-row gap-5">
                <h1 className="py-2">{noSoal}/5</h1>
                <button
                  onClick={handleNoSoalPrev}
                  className="bg-cust-blue py-2 px-4 rounded-md hover:bg-blue-700 active:bg-blue-600 transition-all duration-300"
                >
                  Prev
                </button>
                <button
                  onClick={handleNoSoalNext}
                  className="bg-cust-blue py-2 px-4 rounded-md hover:bg-blue-700 active:bg-blue-600 transition-all duration-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <FooterHome />
      </div>
    </>
  );
};

export default Evaluate;
