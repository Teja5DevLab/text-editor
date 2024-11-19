import React from "react";
import { BiBold, BiText, BiItalic } from "react-icons/bi";
import { PiTextUnderlineBold } from "react-icons/pi";

const fontList = [
  "Arial",
  "Verdana",
  "Helvetica",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Brush Script MT",
  "Comic Sans MS",
  "Lucida Sans",
  "Monaco",
  "Open Sans",
  "Roboto",
  "Montserrat",
  "Source Sans Pro",
];

const Footer = ({ handleAddText, handleStyleChange }) => {
  return (
    <div className="w-full border-t-2 bg-white py-4 shadow-2xl flex justify-center items-center gap-4">
      <button
        onClick={handleAddText}
        className="px-4 py-2 flex items-center rounded-full text-xs font-bold text-gray-600 shadow-md bg-gray-100 hover:bg-gray-200"
      >
        <span className="mr-2">
          <BiText size={20} />
        </span>
        Add Text
      </button>
      <div className="px-1 rounded-full text-xs font-bold text-gray-600 shadow-md bg-gray-100 hover:bg-gray-200">
        <select
          onChange={(e) => handleStyleChange("fontFamily", e.target.value)}
          className="bg-transparent px-4 py-2 outline-none"
        >
          {fontList.map((font) => (
            <option
              key={font}
              value={font}
              className="font-semibold bg-gray-200"
            >
              {font}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => handleStyleChange("isBold", (prevValue) => !prevValue)}
        className="rounded-full p-2 active:bg-gray-100 hover:bg-gray-100"
      >
        <BiBold />
      </button>
      <button
        onClick={() => handleStyleChange("isItalic", (prevValue) => !prevValue)}
        className="rounded-full active:bg-gray-100 p-2 hover:bg-gray-100"
      >
        <BiItalic />
      </button>
      <button
        onClick={() =>
          handleStyleChange("isUnderline", (prevValue) => !prevValue)
        }
        className="p-2 rounded-full active:bg-gray-100 hover:bg-gray-200"
      >
        <PiTextUnderlineBold />
      </button>
      <input
        type="number"
        defaultValue={16}
        onChange={(e) => handleStyleChange("fontSize", e.target.value)}
        className="px-4 py-[6px] text-sm font-bold text-gray-600 shadow-md bg-gray-100 hover:bg-gray-200 rounded-full w-16"
        min="10"
      />
      <input
        type="color"
        defaultValue="#000000"
        onChange={(e) => handleStyleChange("color", e.target.value)}
        className="p-1 h-8 w-12 block bg-white border border-gray-200 cursor-pointer rounded-lg"
        title="Change Text Color"
      />
    </div>
  );
};

export default Footer;
