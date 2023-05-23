import HeaderDashboard from "../Component/DashboardComp/HeaderDashboard";
import ChallangeCard from "../Component/ModulesComp/ChallangeCard";
import CheckboxChallange from "../Component/ModulesComp/CheckboxChallange";

const Challange = () => {
  return (
    <div className="w-full h-fit">
      <HeaderDashboard name={"Challanges"} />

      <div className="pb-14 mx-2 sm:mx-5">
        <div className="font-bold text-3xl text-cust-blue py-5">
          <h3>Challanges</h3>
        </div>
        <div className="pb-3 w-full font-medium text-cust-blue">
          <h4>Berikut Challange yang dapat diikuti :</h4>
        </div>
        <div className="grid sm:grid-cols-12">
          <div className="sm:col-span-9 flex flex-col gap-y-7 w-full p-2 pl-0 pr-5 sm:border-r-2">
            <ChallangeCard />
          </div>
          <div className="hidden sm:block col-span-3 w-full p-2 pl-5">
            <h1 className="opacity-50 text-base font-normal">FILTER</h1>
            <div className="flex flex-col gap-x-2">
              <CheckboxChallange />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challange;
