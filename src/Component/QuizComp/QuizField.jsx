import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuizContext } from "../../Helpers/QuizContext";

const QuizField = ({ data }) => {
  const { updateTotalBenar, updateGetIdSoalBenar } = useQuizContext();
  const [noSoal, setNoSoal] = useState(1);
  const [dataShuffle, setDataShuffle] = useState([]);
  const [showSubmit, setShowSubmit] = useState(false);
  const navigate = useNavigate();
  const { courseId, quizCode } = useParams();

  useEffect(() => {
    setDataShuffle(shuffleButton());
  }, [noSoal]);

  const handleNoSoal = () => {
    setTimeout(() => {
      if ((noSoal !== data().length)) {
        setNoSoal((prev) => prev + 1);
      }
    }, 700);
  };

  const handleTotalBenar = (id) => {
    updateTotalBenar((prev) => prev + 1);
    updateGetIdSoalBenar((prev) => [...prev, id]);
    console.log(id);
  };

  const getButtonBenar = () => {
    return (
      <button
        onClick={() => {
          if (noSoal <= data().length+1){
            if (noSoal === data().length) {
              setShowSubmit(true);
            }
            handleNoSoal();
            handleTotalBenar(data()[noSoal - 1].id);
          }
        }}
        className={`w-1/2 h-[150px] p-3 bg-cust-purple text-white rounded-md active:ring-4`}
      >
        {data()[noSoal - 1].jawabanBenar}
      </button>
    );
  };

  const getButtonSalah = () => {
    return (
      <button
        onClick={() => {
          if (noSoal <= data().length+1){
            if (noSoal === data().length) {
              setShowSubmit(true);
            }
            handleNoSoal();
          }
        }}
        className={`w-1/2 h-[150px] p-3 bg-cust-purple text-white rounded-md active:ring-4`}
      >
        {data()[noSoal - 1].jawabanSalah}
      </button>
    );
  };

  const shuffleButton = () => {
    if (Math.random() < 0.5) {
      return (
        <>
          {getButtonBenar()}
          {getButtonSalah()}
        </>
      );
    } else {
      return (
        <>
          {getButtonSalah()}
          {getButtonBenar()}
        </>
      );
    }
  };

  return (
    <div className="flex flex-col justify-between rounded-md h-full p-2">
      <div className="flex justify-center items-center px-5 py-10">
        <h1 className="text-2xl font-semibold text-center">
          {data()[noSoal - 1].soal}
        </h1>
      </div>
      <div className="flex flex-row w-full gap-x-5 my-3">{dataShuffle}</div>
      <div className="flex flex-row w-full p-2 mt-2 gap-x-10 justify-end items-center">
        {showSubmit && (
          <button
            onClick={() =>
              navigate(
                `/dashboard/mycourses/${courseId}/quiz/${quizCode}/result`
              )
            }
            className="bg-cust-blue text-white px-5 py-2 rounded-md hover:bg-cust-blue/90 active:ring-2 active:ring-cust-blue/90"
          >
            Submit Quiz
          </button>
        )}
        <span className="text-cust-blue font-bold text-lg">
          {noSoal} / {data().length}
        </span>
      </div>
    </div>
  );
};

export default QuizField;
