import { createContext, useState, useContext } from "react";

const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [getIdSoalBenar, setGetIdSoalBenar] = useState([]);

  const updateGetIdSoalBenar = (value) => {
    setGetIdSoalBenar(value);
  };

  const quizContextValue = {
    getIdSoalBenar,
    updateGetIdSoalBenar,
  };

  return (
    <QuizContext.Provider value={quizContextValue}>
      {children}
    </QuizContext.Provider>
  );
};
