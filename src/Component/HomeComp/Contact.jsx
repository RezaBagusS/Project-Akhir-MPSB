const Contact = () => {
  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-2 gap-x-10 py-5">
        <form action="#" 
          className="mx-auto w-10/12 p-5"  
        >
          <h2 className="text-center lg:text-start mb-5 lg:mb-0 text-4xl font-bold pt-5 pb-2">Contact</h2>
          <p className="text-center lg:text-start opacity-50 italic mb-5">
            Fill out the form below to get in touch with us or simply send us an email.
          </p>
          <div className="grid grid-cols-2 gap-x-5 py-5 overflow-hidden">
            <div className="flex flex-wrap justify-start relative group overflow-x-clip">
              <p className="font-semibold absolute -top-5 pointer-events-none left-2 transition-all duration-500">
                Name
              </p>
              <input type="text" 
                className="w-full border-b-2 border-cust-blue border-solid rounded-lg p-2 outline-none"
              />
            </div>
            <div className="flex flex-wrap justify-start relative group overflow-x-clip">
              <p className="font-semibold absolute -top-5 pointer-events-none left-2 transition-all duration-500">
                Email
              </p>
              <input type="text" 
                className="w-full border-b-2 border-cust-blue border-solid rounded-lg p-2 outline-none"
              />
            </div>
            <div className="flex flex-wrap col-span-2 justify-start mt-4">
              <p className="font-semibold px-2 pointer-events-none">
                Your Message
              </p>
              <textarea
                className="w-full border-b-2 border-cust-blue border-solid rounded-lg px-2 outline-none resize-none"
              ></textarea>
            </div>
            <div className="flex justify-end w-full col-span-2">
              <button type="submit"
                className="bg-cust-blue text-white font-semibold rounded-lg px-5 py-2 mt-5 hover:bg-sky-600 hover:scale-95 transition-all duration-500"
              >SUBMIT</button>
            </div>
          </div>
        </form>
        <div
          className="bg-[url('https://res.cloudinary.com/dr0lbokc5/image/upload/v1683199758/Contact_tupztu.svg')]
                    bg-no-repeat bg-cover bg-center h-96 w-10/12 my-auto ml-16 hidden lg:flex
                    "
        ></div>
      </div>
    </div>
  );
};

export default Contact;
