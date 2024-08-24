"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const TopNav = () => {
  const path = usePathname();

  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <div className=" w-screen">
      <nav className=" hidden fixed inset-0 w-screen h-20 md:flex justify-between items-center z-50 bg-slate-950 px-4 shadow-md shadow-slate-400">
        <Image
          src="/logo.jpeg"
          alt="logo"
          width={80}
          height={80}
          className=" w-fit h-full p-2 rounded-full me-4 hover:cursor-pointer"
        />
        <div className=" flex justify-center items-center ">
          <Link href="/">
            <h1
              className={` text-2xl font-bold text-slate-400 mx-4 px-8 py-2 hover:bg-slate-200 rounded-lg hover:text-slate-900 transition-colors ease-in-out duration-300 ${path === "/" && " bg-slate-300 text-slate-950"} `}
            >
              Home
            </h1>
          </Link>
          <Link href="/blog">
            <h1
              className={`text-2xl font-bold text-slate-400 mx-4 px-8 py-2 hover:bg-slate-200 rounded-lg hover:text-slate-900 transition-colors ease-in-out duration-300 ${path === "/blog" && " bg-slate-300 text-slate-950"}`}
            >
              Blog
            </h1>
          </Link>
          <Link href="https://github.com/vp21-sudo" target="_blank">
            <h1 className=" text-2xl font-bold text-slate-400 mx-4 px-8 py-2 hover:bg-slate-200 rounded-lg hover:text-slate-900 transition-colors ease-in-out duration-300">
              Github
              <ArrowOutwardIcon fontSize="small" />
            </h1>
          </Link>
        </div>
      </nav>
      <nav className=" md:hidden fixed inset-0 w-screen h-16 z-50 flex justify-between items-center bg-slate-800 px-2 shadow-sm shadow-slate-400">
        <Image
          src={"/logo.jpeg"}
          alt="logo"
          width={60}
          height={60}
          className=" w-fit rounded-full h-full p-1 me-4 hover:cursor-pointer"
        />
        <button
          className="md:hidden"
          onClick={() => settoggleMenu(!toggleMenu)}
        >
          {toggleMenu ? (
            <CloseIcon className=" text-slate-100" fontSize="large" />
          ) : (
            <MenuIcon className=" text-slate-100" fontSize="large" />
          )}
        </button>
        <div
          className={
            " md:hidden fixed left-0 top-16 z-10  w-screen h-screen overflow-hidden bg-slate-800 flex flex-col justify-start items-center  gap-5 transition-all ease-in-out duration-300" +
            (toggleMenu ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <Link
            href="/"
            onClick={(e) => {
              settoggleMenu(false);
            }}
          >
            <h1
              className={` mt-12 text-2xl font-bold text-slate-300 mx-4 px-8 py-2 hover:bg-slate-700 rounded-lg hover:text-slate-300 transition-colors ease-in-out duration-300 ${path === "/" && " bg-slate-700 text-slate-100"} `}
            >
              Home
            </h1>
          </Link>
          <Link
            href="/blog"
            onClick={(e) => {
              settoggleMenu(false);
            }}
          >
            <h1
              className={` text-2xl font-bold text-slate-300 mx-4 px-8 py-2 hover:bg-slate-700 rounded-lg hover:text-slate-300 transition-colors ease-in-out duration-300 ${path === "/blog" && " bg-slate-700 text-slate-100"} `}
            >
              Blog
            </h1>
          </Link>
          <Link
            href="https://github.com/vp21-sudo"
            target="_blank"
            onClick={(e) => {
              settoggleMenu(false);
            }}
          >
            <h1 className=" text-2xl font-bold text-slate-300 mx-4 px-8 py-2 hover:bg-slate-700 rounded-lg hover:text-slate-300 transition-colors ease-in-out duration-300">
              Github
              <ArrowOutwardIcon fontSize="small" />
            </h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
