import { useParams } from "react-router-dom";
import { getMaterial } from "../../data/dataMaterial";
import { useEffect, useState } from "react";

const MateriListBar = ({ sendValue }) => {
  const [isDownMateri, setIsDownMateri] = useState(null);
  const [id, setId] = useState(1);
  const { courseId } = useParams();

  useEffect(() => {
    sendIdtoParent();
  },[id]);

  const handleClickMateri = (id) => {
    if (isDownMateri === id) {
      setIsDownMateri(null);
    } else{
        setIsDownMateri(id);
    }
  };

  const handleId = (id) => {
    console.log("ID : ", id);
    setId(id);
  }

  const sendIdtoParent = () => {
    sendValue.getActiveJudul(id);
  }

  const getSubJudul = () => {
    let subJudul = [];
    getMaterial(courseId).forEach((item) => {
      if (item.id === id) {
        subJudul = item.subJudul;
      }
    });
    return subJudul;
  };

  return getMaterial(courseId).map((item) => {
    return (
      <div key={item.id} className="transition-all duration-150">
        <div
          onClick={() => {
            handleId(item.id);
            handleClickMateri(item.id);
          }}
          className={`flex flex-row justify-between cursor-pointer pl-3 pr-2 py-3 text-base font-medium rounded-md
            ${id === item.id ? "bg-blue-800 text-white" : "bg-gray-200 text-cust-blue"}
          `}
        >
          {item.judul}
          <span className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={`h-3 ${
                isDownMateri === item.id && "-rotate-180"
              } transition-all duration-500`}
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </span>
        </div>
        <div
          className={`flex flex-col gap-y-1 justify-center overflow-hidden
                ${
                  isDownMateri === item.id
                    ? "max-h-full my-2 transition-all duration-500"
                    : "max-h-0 mb-0 mt-0 transition-all duration-150"
                }
              `}
        >
          {getSubJudul().map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  sendValue.setActiveSubJudul(index + 1);
                }}
                className={`w-11/12 mx-auto pl-3 pr-3 py-2 text-base font-medium rounded-md cursor-pointer transition-all duration-300
                  ${index + 1 === sendValue.getActiveSubJudul() ? "bg-blue-800 text-white" : "bg-gray-300 text-cust-blue hover:bg-sky-400"}
                `}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

export default MateriListBar;
