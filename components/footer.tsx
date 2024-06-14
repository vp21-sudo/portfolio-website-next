import React from "react";
const Footer = () => {
  return (
    <>
      <div className=" hidden md:block">
        <div className=" flex justify-center items-center h-8 bg-slate-950 text-slate-100 ">
          <p className=" font-semibold text-md">2024 | Created by VP.</p>
        </div>
      </div>
      <div className=" md:hidden flex justify-center items-center h-8 bg-slate-950 text-slate-100 ">
        <p className=" font-semibold text-md">2024 | Created by VP.</p>
      </div>
    </>
  );
};

export default Footer;
