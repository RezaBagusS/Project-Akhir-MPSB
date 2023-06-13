import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginputComp from "../Component/LoginputComp.jsx";
import { dataSVG } from "../data/dataSVG.jsx";
import { LoginValidation } from "../Helpers/AuthHelpers.jsx";
import ModalLoading from "../Component/ModalLoading.jsx";
import { verifyToken } from "../Helpers/AuthHelpers.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getToken();
  },[]);

  const handleLogin = async (e) => {
    e.preventDefault();
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    processLogin(username, password);
  };

  const getToken = () => {
    if (localStorage.getItem("token")) {
      verifyToken();
    }
  };

  const processLogin = async (username, password) => {
    setLoading(true);

    try {
      const result = await LoginValidation(username, password);
      if (result) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      setLoginError(true);
    }
  };

  return (
    <div className="bg-hero-pattern fill-cust-blue bg-cust-beige bg-cover h-[100vh] w-[100vw]">
      <div className="relative cust-outer-container font-poppins">
        {loading && <ModalLoading />}
        <div className="cust-container text-[#f6f6f6] w-full pt-32">
          <div className="bg-cust-black p-5 rounded-xl flex justify-center align-middle flex-wrap w-[80%] sm:w-[60%] mx-auto">
            <div className="w-full flex justify-center p-5">
              <h1 className="text-4xl font-bold">Login</h1>
            </div>
            <div>
              <form id="form" action="#" onSubmit={handleLogin}>
                {loginError && (
                  <div className="bg-red-600 p-2 rounded-md w-full text-center">
                    <h3>Incorrect Username or Password</h3>
                  </div>
                )}
                <LoginputComp label="Username" svg={dataSVG.userSVG} />
                <LoginputComp label="Password" svg={dataSVG.passSVG} />
                <div className="w-4/5 mx-auto">
                  <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-800 font-bold rounded-md px-5 py-3 w-full transition-all duration-200"
                  >
                    LOGIN
                  </button>
                </div>
              </form>

              <div className="flex justify-center align-middle px-2 mt-1">
                <p className="font-light text-sm opacity-50">Not a Member??</p>
                <a
                  onClick={() => navigate("/auth/signup")}
                  className="cursor-pointer font-semibold ml-2 text-sm"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
