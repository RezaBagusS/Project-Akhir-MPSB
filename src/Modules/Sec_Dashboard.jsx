const SecDashboard = () => {
  return (
    <>
      {/* Header */}
      <div className="relative flex items-center h-[15vh] px-5 bg-cust-orange">
        <h3 className="font-bold text-3xl">Dashboard</h3>
        <div className="absolute flex items-center right-0 mx-2">
          <p className="text-xl px-2">Anonymous</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-5"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-3"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-wrap items-center justify-center text-center h-[15vh] p-2 bg-lime-400">
        <div className="bg-cyan-600">
          <h3 className="w-full font-bold text-3xl">Hi, Anonymous 👋</h3>
          <p className="w-full font-medium text-lg py-2">
            Bagaimana kabarmu? senang bisa berjumpa kembali !!
          </p>
        </div>
      </div>
    </>
  );
};

export default SecDashboard;
