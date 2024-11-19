import React from "react";
import logo from "../assets/logo.png";
import { BiUndo, BiRedo } from "react-icons/bi";

const Header = ({ undo, redo, canUndo, canRedo }) => {
  return (
    <div className="w-full border-b-2 relative h-20 bg-white py-4 shadow-2xl flex items-center px-8">
      <img className="w-16 absolute top-1 left-5" src={logo} alt="Logo" />
      <div className="flex mx-auto gap-4">
        <button
          onClick={undo}
          disabled={!canUndo}
          className={`px-4 py-2 flex flex-col items-center ${
            !canUndo ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <BiUndo size={40} color="gray" />
          <span className="ml-2 font-semibold text-gray-500">Undo</span>
        </button>
        <button
          onClick={redo}
          disabled={!canRedo}
          className={`px-4 py-2 flex flex-col items-center ${
            !canRedo ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <BiRedo size={40} color="gray" />
          <span className="ml-2 font-semibold text-gray-500">Redo</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
