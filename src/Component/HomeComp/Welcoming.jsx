const Welcoming = () => {
  return (
    <section className="bg-white pt-24 pb-14">
      <div className="py-8 px-4 mx-auto lg:py-16 md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="md:hidden flex mb-5">
            <img
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1682938461/bg-student-learn.jpg"
              alt="MissingIMG"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-cust-black mb-4 text-xl sm:text-3xl font-extrabold tracking-tight leading-none lg:text-4xl">
              Unlock your potential and unleash the best version of yourself!
            </h1>
            <p className="mb-8 md:text-lg text-md font-normal lg:text-xl text-gray-400">
              Here at LearnByCode, we focus on human resource development related to web
              development technology.
            </p>
          </div>
          <div className="flex flex-col justify-center md:justify-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="/auth/login"
              className="group inline-flex font-bold justify-center items-center py-3 px-5 text-base text-center text-white rounded-lg bg-cust-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-900"
            >
              Login
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-5 h-5 group-hover:ml-5 transition-all duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
              </svg>
            </a>
            <a
              href="/auth/signup"
              className="mx-auto w-1/3 hover:underline inline-flex justify-center items-center py-3 px-5 text-base text-center font-semibold rounded-lg border-gray-700 hover:text-cust-purple transition-all duration-200"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="md:flex hidden ">
          <img
            className="object-fill"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1682938461/bg-student-learn.jpg"
            alt="MissingIMG"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcoming;
