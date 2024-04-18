import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "./common/logo";

import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { MdExitToApp } from "react-icons/md";

import { header_items } from "../lib/data";

function NavbarItem() {
  return (
    <div className="drawer block lg:hidden z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-outline drawer-button">
          <RxHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="flex justify-end">
            <label className="btn btn-ghost" htmlFor="my-drawer">
              <MdOutlineClose size={30} />
            </label>
          </div>

          {header_items.map((item) => (
            <li
              className="py-3 px-2 hover:bg-primary transition-colors duration-200 rounded-xl"
              key={"mobile-" + item.url}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  const headerRef = useRef();

  useEffect(() => {
    // Define the scroll event handler function
    function handleScroll(event) {
      const { scrollY } = window;
      scrollY > 10
        ? headerRef.current?.classList.add("active")
        : headerRef.current?.classList.remove("active");
    }

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once (on mount)

  return (
    <header ref={headerRef} className="fixed top-0 z-30 w-full">
      <div className="container py-3 flex items-center justify-between">
        <nav className="flex gap-0 lg:gap-3 items-center justify-center">
          <NavbarItem />

          <Logo />
          <ul className="gap-3 hidden lg:flex">
            {header_items.map((item) => (
              <li key={"laptop-" + item.url}>{item.title}</li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-1 items-center">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 rounded-md text-lg btn-ghost"
            >
              <GrLanguage size={24} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-18"
            >
              <li className="hover:bg-base-300 transition-all duration-200 p-2 cursor-pointer rounded-lg">
                O'zbekcha
              </li>
              <li className="hover:bg-base-300 transition-all duration-200 p-2 cursor-pointer rounded-lg">
                Русский
              </li>
              <li className="hover:bg-base-300 transition-all duration-200 p-2 cursor-pointer rounded-lg">
                English
              </li>
            </ul>
          </div>
          <Link
            to={"/search"}
            className="btn m-1 rounded-md text-lg btn-circle btn-ghost"
          >
            <CiSearch size={25} strokeWidth="2" />
          </Link>
          <Link
            to={"/search"}
            className="btn m-1 rounded-md text-lg btn-circle btn-ghost"
          >
            <MdExitToApp size={28} />
          </Link>
        </div>
      </div>
    </header>
  );
}
