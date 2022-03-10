import React from "react";
import { FaCloud } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-4 shadow-md">
      <div className="container flex items-center text-indigo-500">
        <FaCloud size={26} />
        <h1 className="text-2xl">Weatherapp</h1>
      </div>
    </header>
  );
};

export default Header;
