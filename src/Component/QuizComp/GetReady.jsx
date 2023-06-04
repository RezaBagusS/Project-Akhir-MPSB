import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const GetReady = ({ getVisible }) => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [isClicked, setIsClicked] = useState(true);

  useEffect(() => {
    setIsClicked(true);
    getVisible(!isClicked);
  },[]);

  const handleClicked = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    isClicked && (
      <>
        <h1 className="mx-auto text-2xl font-semibold">
          Hi, {localStorage.getItem("username")}
        </h1>
        <p className="mx-auto text-xl font-medium">
          Apakah kamu sudah siap untuk mengerjakan quiz ??
        </p>
        <div className="flex flex-row justify-evenly mt-10">
          <button
            onClick={() => {
              navigate(`/dashboard/mycourses/${courseId}/material`);
            }}
            className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 active:ring-2 active:ring-red-600"
          >
            Tidak, Kembali
          </button>
          <button
            onClick={() => {
                handleClicked();
                getVisible(true);
            }}
            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 active:ring-2 active:ring-blue-600"
          >
            Mulai Quiz
          </button>
        </div>
      </>
    )
  );
};

export default GetReady;
