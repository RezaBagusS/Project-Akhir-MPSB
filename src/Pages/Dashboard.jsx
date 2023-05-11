import SidebarLeft from "../Component/DashboardComp/sidebarLeft";
import SecDashboard from "../Modules/Sec_Dashboard";

const Dashboard = () => {
  return (
    <>
      <div className="cust-outer-container overflow-hidden bg-slate-600 font-poppins flex">
        <SidebarLeft />
        <div className="bg-slate-100 w-full pb-10">
          <SecDashboard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
