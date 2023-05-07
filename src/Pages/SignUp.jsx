import SigninputComp from "../Component/SigninputComp";
import { dataSVG } from "../data/dataSVG.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../data/dataUser";

const SignUp = () => {
  const navigate = useNavigate();

  const [signError, setSignError] = useState(false);
  const [msgError, setMsgError] = useState(" ");
  const [dataDB, setDataDB] = useState([]);

  useEffect(() => {
    fetchDB();
  }, []);

  const fetchDB = async () => {
    const { data } = await supabase.from("dataUser").select();
    console.log(data);
    setDataDB(data);
  };

  const handleSign = (e) => {
    e.preventDefault();
    SignupValidation() ? navigate("/login") : setSignError(true);
  };

  function isUsernameTaken(username) {
    return dataDB.some((user) => user.username === username);
  }

  function isEmailTaken(email) {
    return dataDB.some((user) => user.email === email);
  }

  function isPasswordValid(password) {
    return password.length >= 8;
  }

  const SignupValidation = () => {
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    let email = document.getElementById("Email").value;

    if (isUsernameTaken(username)) {
      setSignError(true);
      setMsgError("Username already taken!");
      return false;
    }

    if (isEmailTaken(email)) {
      setSignError(true);
      setMsgError("Email already taken!");
      return false;
    }

    if (!isPasswordValid(password)) {
      setSignError(true);
      setMsgError("Password must be at least 8 characters!");
      return false;
    }

    console.log("Sign Up Success !!");
    addUser(username, email, password);

    return true;
  };

  const addUser = async (username, email, password) => {
    const { error } = await supabase
      .from("dataUser")
      .insert([{ username: username, email: email, password: password }]);

    if (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-hero-pattern bg-cust-beige bg-cover h-[100vh] w-[100vw]">
      <div className="cust-outer-container font-poppins">
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
                  onClick={() => navigate("/login")}
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
