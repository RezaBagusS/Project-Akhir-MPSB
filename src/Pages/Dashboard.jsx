import SidebarLeft from "../Component/DashboardComp/sidebarLeft";
import SecDashboard from "../Modules/Sec_Dashboard";

const Dashboard = () => {
  return (
    <>
      <div className="cust-outer-container overflow-hidden bg-cust-beige font-poppins flex">
        <SidebarLeft />
        <div className="bg-cust-yellow px-5 w-full">
          <SecDashboard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
