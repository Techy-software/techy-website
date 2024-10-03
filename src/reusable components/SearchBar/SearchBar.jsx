import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1.5 w-full max-w-md">
      <AiOutlineSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent focus:outline-none text-gray-600 w-full"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default SearchBar;
