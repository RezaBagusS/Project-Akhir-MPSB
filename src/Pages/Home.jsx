import Courses from "../Component/HomeComp/Courses";
import NavbarHome from "../Component/HomeComp/NavbarHome";
import Welcoming from "../Component/HomeComp/Welcoming";
import About from "../Component/HomeComp/About";
import Contact from "../Component/HomeComp/Contact";
import FooterHome from "../Component/HomeComp/FooterHome";


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
