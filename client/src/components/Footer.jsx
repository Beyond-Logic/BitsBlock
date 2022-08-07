/** @format */

import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-center items-center my-4">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-sm text-center">About | Contact Us | Privacy</p>
        <p className="text-white text-sm text-center">© BitsBlock 2022 | a <b>Edema Ero </b>Test Project</p>
      </div>
    </div>
  );
};

export default Footer;
