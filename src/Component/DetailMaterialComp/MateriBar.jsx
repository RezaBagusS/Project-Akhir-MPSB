import { useState, useEffect } from "react";
import MateriListBar from "./MateriListBar";
import { getMaterial } from "../../data/dataMaterial";
import { useParams } from "react-router-dom";

const MateriBar = ({ sendValue }) => {
  const [activeComponent, setActiveComponent] = useState(1);
  const [idJudul, setIdJudul] = useState(1);
  let { courseId } = useParams();

  useEffect(() => {
    setActiveComponent(1);
    sendValue.handleActiveComponent(1);
  },[idJudul]);

  const subJudulLength = getMaterial(courseId)[idJudul - 1].subJudul.length;

  const handlePrev = () => {
    if (activeComponent > 1) {
      sendValue.handleActiveComponent(activeComponent - 1);
      setActiveComponent(activeComponent - 1);
    }
  };

  const handleNext = () => {
    if (activeComponent === subJudulLength) {
      sendValue.handleModalConfirmisShow(true);
    }

    if (activeComponent < subJudulLength) {
      sendValue.handleActiveComponent(activeComponent + 1);
      setActiveComponent(activeComponent + 1);
    }
  };

  const getActiveJudul = (id) => {
    setIdJudul(id);
    sendValue.getIdJudul(id);
  };

  const getActiveSubJudul = () => {
    return activeComponent;
  };

  const setActiveSubJudul = (id) => {
    sendValue.handleActiveComponent(id);
    setActiveComponent(id);
  }

  return (
    <>
      <div className="col-span-4 flex flex-col gap-y-3 px-4 pr-5 bg-white">
        <div className="flex flex-col gap-y-1">
          <MateriListBar sendValue={{getActiveJudul, getActiveSubJudul, setActiveSubJudul}} />
        </div>
        <div className="flex flex-row justify-between mt-5 pb-5">
          <button
            type="button"
            onClick={handlePrev}
            className={`text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2
                ${
                  activeComponent === 1 &&
                  "opacity-50 focus:ring-0 cursor-default"
                }
              `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-3 mt-0.5 mr-2 fill-white rotate-180"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
            Prev
          </button>
          <button
            type="button"
            onClick={handleNext}
            className={`text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2
                  ${
                    activeComponent === subJudulLength
                      ? "bg-green-500 hover:bg-green-700"
                      : ""
                  }
              `}
          >
            {activeComponent === subJudulLength ? (
              <>
                Finish
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-3 mt-0.5 ml-2 fill-white"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </>
            ) : (
              <>
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-3 mt-0.5 ml-2 fill-white"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default MateriBar;
