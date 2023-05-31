import { verifyToken } from "../Helpers/AuthHelpers";

const Quiz = () => {

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
                <h1>Quiz</h1>
            </div>
        </>
    )
}

export default Quiz;