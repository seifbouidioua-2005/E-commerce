

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
     <h1 className="text-2xl italic font-bold text-gray-500">FERZA</h1>
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white px-5 py-5 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
