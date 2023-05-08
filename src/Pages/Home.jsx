import Courses from "../Component/Courses";
import NavbarHome from "../Component/NavbarHome";
import Welcoming from "../Component/Welcoming";
import About from "./About";
import Contact from "./Contact";
import FooterHome from "../Component/FooterHome";


const Home = () => {
  return (
    <>
      <NavbarHome />
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
            <FooterHome />
        </div>
      </div>
    </>
  );
};

export default Home;
