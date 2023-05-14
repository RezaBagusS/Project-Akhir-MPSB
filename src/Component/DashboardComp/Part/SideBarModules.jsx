import { useNavigate, useLocation } from "react-router-dom";

const SideBarModules = ({isClose}) => {

  const navigate = useNavigate();
  const location = useLocation();

  const styleIcon = `${isClose && 'mr-0'} w-6 h-6 fill-cust-beige`;

  const dataModules = [
    {
      id: 1,
      name: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={styleIcon}
        >
          <path d="M432 64H208c-8.8 0-16 7.2-16 16V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V320h16c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192zm64 32c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z" />
        </svg>
      ),
      link: "/dashboard",
    },
    {
      id: 2,
      name: "Courses",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className={styleIcon}
        >
          <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
        </svg>
      ),
      link: "/dashboard/courses",
    },
    {
      id: 3,
      name: "MyCourses",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className={styleIcon}
        >
          <path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
        </svg>
      ),
      link: "/dashboard/mycourses",
    },
    {
      id: 4,
      name: "Challanges",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className={styleIcon}
        >
          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
        </svg>
      ),
      link: "/dashboard/challanges",
    },
  ];

  return dataModules.map((module) => {
    return (
      <section 
        onClick={() => {
          navigate(module.link)
        }}
        className="w-full h-18 px-3 py-2" key={module.id}>
        <div className={`relative hover:bg-slate-500 cursor-pointer px-3 py-3 rounded-lg transition-all duration-300
          ${location.pathname === module.link ? 'bg-slate-500' : 'bg-slate-600'}
          `}>
          <div className={`flex items-center ${isClose ? 'justify-center' : 'justify-start'}`}>
            {module.icon}
            <p className={`${isClose ? 'absolute -right-40 hidden' : 'flex -right-0 ml-3 '} transition-all duration-700`}>{module.name}</p>
          </div>
        </div>
      </section>
    );
  });
};

export default SideBarModules;
