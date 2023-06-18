import HeaderDashboard from "../Component/DashboardComp/HeaderDashboard";
import ChallangeCard from "../Component/ModulesComp/ChallangeCard";
import CheckboxChallange from "../Component/ModulesComp/CheckboxChallange";
import { getChallenge } from "../Helpers/AuthHelpers";
import { useEffect, useState } from "react";

const SecChallenge = () => {
  const [isChecked, setIsChecked] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataIdChallenge, setDataIdChallenge] = useState([]);

  useEffect(() => {
    handleProcessGetChallenges();
  }, []);

  const handleProcessGetChallenges = async () => {
    try {
      let storedData = localStorage.getItem("oldDataIdChallenge");

      if (!storedData) {
        let result = await getChallenge();

        setDataIdChallenge(result);
        result = JSON.stringify(result);
        localStorage.setItem("oldDataChallenges", result);
        localStorage.setItem("newDataChallenges", result);
      }

      if (localStorage.getItem("oldDataChallenges") !== localStorage.getItem("newDataChallenges")) {
        let result = await getChallenge();

        setDataIdChallenge(result);
        result = JSON.stringify(result);
        localStorage.setItem("oldDataChallenges", result);
        localStorage.setItem("newDataChallenges", result);
      }

      setDataIdChallenge(JSON.parse(localStorage.getItem("oldDataChallenges")));
      setLoading(false);
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = (e) => {
    setIsChecked(e);
  };

  const handleFilterOpen = () => {
    setFilterOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-fit">
      <HeaderDashboard name={"Challanges"} />

      <div className="pb-14 mx-2 sm:mx-5">
        <div className="font-bold text-3xl text-cust-blue py-5">
          <h3>Challanges</h3>
        </div>
        <div className="flex items-center justify-between pb-3 w-full font-medium text-cust-blue">
          <h4>Berikut Challange yang dapat diikuti :</h4>
          <button
            onClick={handleFilterOpen}
            className={`sm:hidden hover:bg-slate-300 rounded-md transition-all duration-300
            ${filterOpen && "bg-slate-300"}
            `}
          >
            <svg
              className="w-10 h-10 p-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
            </svg>
          </button>
        </div>
        <div className="relative grid sm:grid-cols-12">
          <div className="sm:col-span-9 flex flex-col gap-y-7 w-full p-2 pl-0 pr-5 sm:border-r-2">
            {
              loading ? (
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[10%] mx-auto animate-spin my-28"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>Loading . . . </p>
                </div>
              ) : (
                <ChallangeCard filter={isChecked} dataIdChallenge={dataIdChallenge} />
              )
            }
          </div>
          <div
            className={`absolute sm:relative sm:block sm:right-0 col-span-3 w-1/2 sm:w-full py-5 sm:p-2 pl-5 rounded-l-md bg-sky-300 sm:bg-slate-100 transition-all duration-300
            ${filterOpen ? "-right-10 top-0" : "-right-full top-0"}
          `}
          >
            <h1 className="opacity-50 text-base font-normal">FILTER</h1>
            <div className="flex flex-col gap-x-2">
              <CheckboxChallange getCheck={handleCheck} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecChallenge;
