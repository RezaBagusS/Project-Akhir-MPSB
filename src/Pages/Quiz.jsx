import { verifyToken } from "../Helpers/AuthHelpers";
import { useParams } from "react-router-dom";
import { getQuiz } from "../data/dataQuiz";
import NavbarCourse from "../Component/DetailCourseComp/NavbarCourse";
import FooterHome from "../Component/HomeComp/FooterHome";
import GetReady from "../Component/QuizComp/GetReady";
import { useEffect, useState } from "react";
import QuizField from "../Component/QuizComp/QuizField";

const Quiz = () => {
  const { courseId, quizCode } = useParams();
  const [activeComponent, setActiveComponent] = useState(1);
  const [startQuiz, setStartQuiz] = useState(false);

  const isLogin = () => {
    if (localStorage.getItem("token")) {
      verifyToken();
      return true;
    }
    return window.location.replace("/auth/login");
  };

  const handleQuizCode = () => {
    if (quizCode === "final") {
      return "Final Quiz";
    } else {
      return `Quiz ${quizCode}`;
    }
  };

  const handleQuiz = () => {
    const quiz = getQuiz(courseId, quizCode).find((item) => item).soalQuiz;
    return quiz;
  };

  const getVisibleGetReady = (value) => {
    return setStartQuiz(value);
  }

  return (
    <>
      {isLogin()}
      <div className="cust-outer-container bg-cust-beige">
        <NavbarCourse course={courseId} />
        <div className="cust-container h-autopx-8 py-10">
          <div className="w-full flex justify-center py-2 text-4xl font-semibold">
            <h1>{handleQuizCode()}</h1>
          </div>
          <div className="p-2 mt-5 h-[450px]">
            <div className="bg-white ring-4 ring-cust-blue p-5 flex h-full flex-col justify-center rounded-lg">
                <GetReady getVisible={getVisibleGetReady} />
                {
                    startQuiz && (
                        <QuizField data={handleQuiz} />
                    )
                }
            </div>
          </div>
        </div>
        <FooterHome />
      </div>
    </>
  );
};

export default Quiz;
