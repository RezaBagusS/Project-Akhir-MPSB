import Courses from "../Component/Courses";
import NavbarDash from "../Component/NavbarDash";
import Welcoming from "../Component/Welcoming";
import About from "./About";
import Contact from "./Contact";
import FooterDash from "./FooterDash";


const Home = () => {
  return (
    <>
      <NavbarDash />
      <div className="cust-outer-container bg-white w-full">
        <div className="cust-container font-medium text-cust-blue">
            <Welcoming />
        </div>
      </div>
      <div className="cust-outer-container bg-cust-beige w-full">
        <div className="cust-container font-medium text-cust-blue">
            <Courses />
        </div>
      </div>
      <div className="cust-outer-container bg-white w-full">
        <div className="cust-container font-medium text-cust-blue">
            <About />
        </div>
      </div>
      <div className="cust-outer-container bg-white w-full">
        <div className="cust-container font-medium text-cust-blue">
            <Contact />
        </div>
      </div>
      <div className="cust-outer-container bg-white w-full">
        <div className="cust-container font-medium text-cust-blue">
            <FooterDash />
        </div>
      </div>
    </>
  );
};

export default Home;
