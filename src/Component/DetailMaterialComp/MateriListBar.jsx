import { useParams } from "react-router-dom";
import { getMaterial } from "../../data/dataMaterial";
import { useEffect, useState } from "react";

const MateriListBar = ({ sendValue, getProgress }) => {
  const [isDownMateri, setIsDownMateri] = useState(null);
  const [id, setId] = useState(1);
  const { courseId } = useParams();

  useEffect(() => {
    sendIdtoParent();
  }, [id]);

  const handleClickMateri = (id) => {
    if (isDownMateri === id) {
      setIsDownMateri(null);
    } else {
      setIsDownMateri(id);
    }
  };

  const handleId = (id) => {
    console.log("ID : ", id);
    setId(id);
  };

  const sendIdtoParent = () => {
    sendValue.getActiveJudul(id);
  };

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
          className={`flex flex-row relative overflow-hidden justify-between pl-3 pr-2 py-3 text-base font-medium rounded-md
            ${
              id === item.id
                ? "bg-blue-800 text-white"
                : "bg-gray-200 text-cust-blue"
            }
            ${
              getProgress == 0 && item.id === 1
                ? "cursor-pointer"
                : getProgress >= item.id
                ? "cursor-pointer"
                : "opacity-50 pointer-events-none"
            }
          `}
        >
          {getProgress >= item.id && (
            <>
              <span className="absolute right-0 -top-1/2 bg-cust-yellow -rotate-45 p-2 h-full rounded-r-md"></span>
            </>
          )}
          {item.judul}
          <span className="p-2">
            {getProgress == 0 && item.id === 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={`h-3 ${
                  isDownMateri === item.id && "-rotate-180"
                } transition-all duration-500`}
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            ) : getProgress < item.id ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="h-3"
              >
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={`h-3 ${
                  isDownMateri === item.id && "-rotate-180"
                } transition-all duration-500`}
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            )}
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
          {getSubJudul().map((title, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  sendValue.setActiveSubJudul(index + 1);
                }}
                className={`relative overflow-hidden w-11/12 mx-auto pl-3 pr-5 py-2 text-base font-medium rounded-md cursor-pointer transition-all duration-300
                  ${
                    index + 1 === sendValue.getActiveSubJudul()
                      ? "bg-blue-800 text-white fill-white"
                      : "bg-gray-300 text-cust-blue hover:bg-sky-400 fill-green-600"
                  }
                `}
              >
                {getProgress >= item.id && (
                  <>
                    <div className="absolute right-0 top-0 p-2 h-full rounded-r-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                      </svg>
                    </div>
                  </>
                )}
                {title}
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

export default MateriListBar;
