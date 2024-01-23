const Wrapper = ({ children }) => {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-2xl px-4 py-9 sm:px-6 sm:py-11 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Wrapper;
