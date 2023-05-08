import { useNavigate } from "react-router-dom";

const NavbarDash = () => {
  const navigate = useNavigate();

  return (
    <div className="font-poppins">
      <nav className="bg-cust-blue fixed w-full z-20 top-0 left-0 border-gray-200">
        <div className="cust-outer-container">
          <div className="w-full cust-container flex flex-wrap items-center justify-between py-4">
            <a href="/dashboard" className="flex items-center">
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
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-purple-500 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-purple-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-purple-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:bg-purple-500 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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

export default NavbarDash;
