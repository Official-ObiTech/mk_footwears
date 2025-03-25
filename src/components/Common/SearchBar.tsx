import {useState } from "react";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import { IoSendOutline } from "react-icons/io5";

const Search = () => {
  // DECLEAR VARIABLES
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // DECLEAR FUNCTIONS
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ Search: search });
    setIsOpen(false);
  };

  return (
    <div
      className={`justify_flex transition-all duration-500 ${
        isOpen ? "search_container" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative justify_flex ">
          <button
            type="button"
            onClick={handleIsOpen}
            className="icons light_link right-6 -top-4 absolute "
          >
            <HiXMark />
          </button>
          <div className="relative w-1/2">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for footerwears"
              className="input shadow-sm"
            />
            <button className="input_btn absolute h-full ">
              <IoSendOutline />
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleIsOpen} className="icons light_link">
          <HiMagnifyingGlass />
        </button>
      )}
    </div>
  );
};

export default Search;
