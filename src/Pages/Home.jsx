import Courses from "../Component/HomeComp/Courses";
import NavbarHome from "../Component/HomeComp/NavbarHome";
import Welcoming from "../Component/HomeComp/Welcoming";
import About from "../Component/HomeComp/About";
import Contact from "../Component/HomeComp/Contact";
import FooterHome from "../Component/HomeComp/FooterHome";
import { useRef } from "react";


const Home = () => {

  const toWelcoming = useRef(null);
  const toCourses = useRef(null);
  const toAbout = useRef(null);
  const toContact = useRef(null);

  return (
    <>
      <NavbarHome 
        moveTo={{toWelcoming, toCourses, toAbout, toContact}} 
      />
      <div 
        ref={toWelcoming}
        className="cust-outer-container bg-white w-full">
        <div className="cust-container font-medium text-cust-blue">
            <Welcoming />
        </div>
      </div>
      <div 
        ref={toCourses}
        className="cust-outer-container bg-cust-beige w-full">
        <div className="cust-container font-medium text-cust-blue">
            <Courses />
        </div>
      </div>
      <div 
        ref={toAbout}
        className="cust-outer-container bg-white w-full">
        <div className="cust-container font-medium text-cust-blue">
            <About />
        </div>
      </div>
      <div 
        ref={toContact}
        className="cust-outer-container bg-white w-full">
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
