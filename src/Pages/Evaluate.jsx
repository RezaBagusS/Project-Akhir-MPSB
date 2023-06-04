import { verifyToken } from "../Helpers/AuthHelpers";
import { useQuizContext } from "../Helpers/QuizContext";

const Evaluate = () => {
    const { totalBenar, getIdSoalBenar } = useQuizContext();

    const isLogin = () => {
        if (localStorage.getItem("token")) {
          verifyToken();
          return true;
        }
        return window.location.replace("/auth/login");
      };

    return (
        <>
            {isLogin()}
            <div>
                <h1>Evaluate</h1>
                <h3>
                    Total Benar: {totalBenar}
                </h3>
                <h3>
                    ID Soal Benar: {getIdSoalBenar}
                </h3>
            </div>
        </>
    );
}

export default Evaluate;