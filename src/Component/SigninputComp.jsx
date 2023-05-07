const SigninputComp = ({label, sample, svg, type}) => {
  return (
    <div className="group">
      <div className="flex justify-center w-full mt-10 mb-5 group-focus-within:border-2 group-focus-within:mt-10 rounded-md">
        <div className="bg-zinc-700 p-5 rounded-s-md">
          { svg }
        </div>
        <div className="relative">
          <div className="absolute font-medium transition-all duration-300 -top-8 -translate-y-0 -left-14 opacity-100">
            { label }
          </div>
          <input
            type={ type }
            id={ label }
            placeholder={ sample }
            required
            autoComplete="off"
            className="bg-zinc-600 rounded-e-md px-5 h-full w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SigninputComp;
