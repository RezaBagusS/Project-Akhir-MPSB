import { createContext, useState, useContext } from "react";

const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [totalBenar, setTotalBenar] = useState(0);
  const [getIdSoalBenar, setGetIdSoalBenar] = useState([]);

  const updateTotalBenar = (value) => {
    setTotalBenar(value);
  };

  const updateGetIdSoalBenar = (value) => {
    setGetIdSoalBenar(value);
  };

  const quizContextValue = {
    totalBenar,
    getIdSoalBenar,
    updateTotalBenar,
    updateGetIdSoalBenar,
  };

  return (
    <QuizContext.Provider value={quizContextValue}>
      {children}
    </QuizContext.Provider>
  );
};
