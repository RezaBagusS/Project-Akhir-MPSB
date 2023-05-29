import axios from "axios";

export const LoginValidation = async (username, password) => {
  try {
    const storedUsername = localStorage.getItem("username");

    if (storedUsername && storedUsername !== username) {
      // Hapus data akun yang lama jika ada perubahan akun
      localStorage.removeItem("username");
      localStorage.removeItem("token");
    }

    if (storedUsername === username) {
      return true;
    }

    const response = await axios.post(
      "https://project-akhir-mpsb.vercel.app/api/auth/login",
      {
        username: username,
        password: password,
      }
    );

    // console.log(response.data);
    const token = response.data.token;
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
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

export const isLogin = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
}

export const getDataFromToken = async (token) => {

  try {
    const response = await axios.post(
      "https://vercel.com/rezabaguss/project-akhir-mpsb-back-end/api/data", {token : token}
    );

    // console.log(response.data.data);
    localStorage.setItem("data", response.data.data);

  } catch (error) {
    console.error("Error:", error);
  }

}


