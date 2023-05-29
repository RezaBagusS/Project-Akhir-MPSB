import { dataSVG } from "../data/dataSVG.jsx";
import { useNavigate } from "react-router-dom";
import SigninputComp from "../Component/SigninputComp";
import { SignupValidation } from "../Helpers/AuthHelpers";
import ModalLoading from "../Component/ModalLoading.jsx";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();

  const [signError, setSignError] = useState(false);
  const [msgError, setMsgError] = useState("Account Already Exist!");
  const [loading, setLoading] = useState(false);

  const handleSign = (e) => {
    e.preventDefault();
    SignupProcess();
  };

  const SignupProcess = async () => {
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    let email = document.getElementById("Email").value;
    setLoading(true);

    try {
      const result = await SignupValidation(username, email, password);
      if (result) {
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      } else {
        setSignError(true);
      }
    } catch (error) {
      setSignError(true);
      console.log(error);
    }
    // console.log("Sign Up Success !!");
  };

  return (
    <div className="bg-hero-pattern bg-cust-beige bg-cover h-[100vh] w-[100vw]">
      <div className="cust-outer-container font-poppins">
        {loading && <ModalLoading />}
        <div className="cust-container text-[#f6f6f6] w-full pt-20">
          <div className="bg-cust-black p-5 rounded-xl flex justify-center align-middle flex-wrap w-[80%] sm:w-[60%] mx-auto">
            <div className="w-full flex justify-center p-5">
              <h1 className="text-4xl font-bold">Sign Up</h1>
            </div>
            <div>
              <form action="" method="post" onSubmit={handleSign}>
                {signError && (
                  <div className="bg-red-600 p-2 rounded-md w-full text-center">
                    <h3>{msgError}</h3>
                  </div>
                )}
                <SigninputComp
                  label="Username"
                  sample="e.g. John Doe"
                  type="text"
                  svg={dataSVG.userSVG}
                />
                <SigninputComp
                  label="Email"
                  sample="xxx@gmail.com"
                  type="email"
                  svg={dataSVG.emailSVG}
                />
                <SigninputComp
                  label="Password"
                  sample="password"
                  type="password"
                  svg={dataSVG.passSVG}
                />

                <div className="w-4/5 mx-auto">
                  <button
                    type="submit"
                    className="bg-cust-purple w-full font-bold rounded-md px-5 py-3 hover:bg-purple-800 transition-all duration-200"
                  >
                    SIGN UP
                  </button>
                </div>
              </form>
              <div className="flex justify-center align-middle px-2 mt-1">
                <p className="font-light text-sm opacity-50">
                  Do you have account??
                </p>
                <a
                  onClick={() => navigate("/auth/login")}
                  className="cursor-pointer font-semibold ml-2 text-sm"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
