import { useState } from "react";

const NavbarHome = ({ moveTo }) => {

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="font-poppins">
      <nav className="bg-cust-blue fixed w-full z-20 top-0 left-0 border-gray-200">
        <div className="cust-outer-container">
          <div className="w-full cust-container flex flex-wrap items-center justify-between py-4">
            <a href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center hidden sm:block text-2xl font-semibold whitespace-nowrap text-white">
                Nama App
              </span>
            </a>
            <div className="flex md:order-2">
              <a
                href="/dashboard"
                className="text-white bg-purple-500 font-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-purple-800 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul className="bg-cust-blue flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 border-gray-700">
                <li>
                  <a
                    onClick={() => {
                      setIsOpen1(true);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(false);
                      handleClick(moveTo.toWelcoming);
                    }}
                    className={`block cursor-pointer py-2 pl-3 pr-4 rounded md:bg-transparent md:hover:text-blue-500 "text-blue-500"
                    ${
                      isOpen1 ? "text-blue-500" : "text-white"
                    }`}
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setIsOpen1(false);
                      setIsOpen2(true);
                      setIsOpen3(false);
                      setIsOpen4(false);
                      handleClick(moveTo.toCourses);
                    }}
                    className={`block cursor-pointer py-2 pl-3 pr-4 rounded md:hover:text-blue-500 md:hover:bg-transparent 
                    ${
                      isOpen2 ? "text-blue-500" : "text-white"
                    }`}
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setIsOpen1(false);
                      setIsOpen2(false);
                      setIsOpen3(true);
                      setIsOpen4(false);
                      handleClick(moveTo.toAbout);
                    }}
                    className={`block cursor-pointer py-2 pl-3 pr-4 rounded md:hover:text-blue-500  md:hover:bg-transparent
                    ${
                      isOpen3 ? "text-blue-500" : "text-white"
                    }`}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setIsOpen1(false);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(true);
                      handleClick(moveTo.toContact);
                    }}
                    className={`block cursor-pointer py-2 pl-3 pr-4 rounded md:hover:text-blue-500 md:hover:bg-transparent
                    ${
                      isOpen4 ? "text-blue-500" : "text-white"
                    }`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHome;
