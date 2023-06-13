import axios from "axios";

export const LoginValidation = async (username, password) => {
  try {
    const storedUsername = localStorage.getItem("username");

    if (storedUsername && storedUsername !== username) {
      localStorage.removeItem("username");
      localStorage.removeItem("token");
    }

    if (storedUsername === username) {
      return true;
    }

    const response = await axios.post(
      "https://project-akhir-mpsb-back-end.vercel.app/api/auth/login",
      // "http://localhost:3000/api/auth/login",
      {
        username: username,
        password: password,
      }
    );
    const token = response.data.token;
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
    return true;
  } catch (error) {
    // console.error("Error:", error);
    return response.data.message;
  }
};

export const SignupValidation = async (username, email, password) => {
  try {
    const response = await axios.post(
      "https://project-akhir-mpsb-back-end.vercel.app/api/auth/signup",
      // "http://localhost:3000/api/auth/signup",
      {
        username: username,
        password: password,
        email: email,
      }
    );

    const msg = response.data.message;
    console.log(msg);

    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export const Logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

export const verifyToken = async () => {
  try {
    const response = await axios.post(
      "https://project-akhir-mpsb-back-end.vercel.app/api/verifyToken",
      {
        token: localStorage.getItem("token"),
      }
    );

    if (response.data.status === "success") {
      return true;
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      return window.location.replace("/auth/login");
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export const getDataFromToken = async (token) => {
  try {
    const response = await axios.post(
      "https://vercel.com/rezabaguss/project-akhir-mpsb-back-end/api/data",
      { token: token }
    );

    localStorage.setItem("data", response.data.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
