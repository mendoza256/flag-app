import React, { useState, useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import useDarkMode from "../hooks/useDarkMode";

const Topbar = () => {
  // DARK MODE
  const [darkMode, setDarkMode] = useDarkMode();

  // DEFAULT: Dark Mode off
  useEffect(() => {
    setDarkMode(false);
  }, []);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="sticky top-0 h-20
                bg-veryLightGreyBg shadow-lg text-veryDarkBlueText
                dark:bg-darkBlueEl dark:text-whiteTextEl
                flex justify-center"
    >
      <div className="container mx-auto flex flex-row items-center justify-between">
        <h1 className="font-bold text-3xl">Where in the world?</h1>

        <div id="toggle-theme" className="select-none" onClick={handleClick}>
          <TopbarIcon icon={<IoMoonOutline />} />
        </div>
      </div>
    </div>
  );
};

const TopbarIcon = ({ icon, text = "Dark Mode" }) => {
  return (
    <div className="topbar-icon group cursor-pointer flex flex-row group">
      <div className="mr-2">{icon}</div>
      <span className="topbar-tooltip text-sm group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};

export default Topbar;
