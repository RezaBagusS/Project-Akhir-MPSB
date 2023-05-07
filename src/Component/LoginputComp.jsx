import { useState } from "react";

const LoginputComp = ({ label, svg }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleOnChange = (e) => {
    label === "Username" ? setUser(e.target.value) : setPass(e.target.value);
  };

  const handleState = () => {
    return label === "Username" ? user : pass;
  };

  return (
    <div className="group">
      <div
        className={
          handleState()
            ? "flex justify-center w-full group-focus-within:border-2 mt-10 mb-5 transition-all duration-100 rounded-md"
            : "flex justify-center w-full my-5 group-focus-within:border-2 group-focus-within:mt-10 transition-all duration-100 rounded-md"
        }
      >
        <div className="bg-zinc-700 p-5 rounded-s-md">{svg}</div>
        <div className="relative">
          <div
            className={
              handleState()
                ? "absolute font-medium transition-all duration-300 -top-8 -translate-y-0 -left-14 opacity-100"
                : "absolute pointer-events-none opacity-50 font-medium left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-focus-within:-top-8 group-focus-within:-translate-y-0 group-focus-within:-left-14 group-focus-within:opacity-100"
            }
          >
            {label}
          </div>
          <input
            type={label === "Username" ? "text" : "password"}
            name={label}
            id={label}
            required
            autoComplete="off"
            onChange={(e) => handleOnChange(e)}
            value={handleState()}
            className="bg-zinc-600 rounded-e-md px-5 h-full w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginputComp;
