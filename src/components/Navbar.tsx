import React from "react";
import Search from "./Search";

interface HandleWizard {
  wizard: boolean,
  handleClick: (wizard:boolean) => void,
}

const Navbar:React.FC<HandleWizard> = ({ handleClick, wizard }) => {
  function handleThisClick() {
    handleClick(wizard);
  }

  return (
    <div className='flex p-4 border-b-2 mb-4'>
      <Search />
      <button
        onClick={handleThisClick}
        className='ml-auto border-2 border-blue-500 px-4 py-2 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200 focus:brightness-75'
      >
        Új projekt
      </button>
    </div>
  );
};

export default Navbar;
