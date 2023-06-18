import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    // console.log(msg);

    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
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
      localStorage.removeItem("data");
      localStorage.removeItem("css");
      localStorage.removeItem("html");
      localStorage.removeItem("js");
      localStorage.removeItem("newDataCourses");
      localStorage.removeItem("oldDataCourses");
      return window.location.replace("/auth/login");
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export const sendClaimClass = async (tag) => {
  try{
    const response = await axios.post(
      "https://project-akhir-mpsb-back-end.vercel.app/api/claimClass",
      // "http://localhost:3000/api/claimClass",
      {
        tag: tag,
        token: localStorage.getItem("token"),
      }
    );
    // console.log(response.data.message);
  } catch (error) {
    console.error("Error",error);
  }
}

export const getDataCoursesModule = async () => {
  try {
    
    const response = await axios.post(
      "https://project-akhir-mpsb-back-end.vercel.app/api/dataClass",
      // "http://localhost:3000/api/dataClass",
      {
        token: localStorage.getItem("token"),
      }
    );

    return response.data.data;

  } catch (error) {
    console.log("Error:", error);
  }
}

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
