import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

const StudentNavbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav((x) => !x);
    console.log(nav);
  };

  return (
    <div className="flex flex-row left-0 top-0 w-full ease-in duration-300 bg-blue-500">
      {/* Overlay*/}
      <Link
        href="/"
        className="max-w-[1240px] m-auto flex justify-between items-end p-4 px-7 text-2xl hover:text-blue-300"
      >
        hr site
      </Link>

      <div className="max-w-[1240px] m-auto flex justify-between items-end p-4 text-white basis-1/2">
        <Link href="/"></Link>
        <ul className="hidden sm:flex">
          <li className="px-7 py-1 text-2xl hover:text-blue-300">
            <Link href="/">Home</Link>
          </li>
          <li className="px-7 py-1 text-2xl hover:text-blue-300">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="px-7 py-1 text-2xl hover:text-blue-300">
            <Link href="/">Mailbox</Link>
          </li>
          {false ? (
            <li className="px-4 text-2xl hover:text-blue-300">
              <a href="/logout">
                <div className="bg-blue-400 px-3 py-1 rounded-md">Logout</div>
              </a>
            </li>
          ) : (
            <li className="px-4 text-2xl hover:text-blue-300">
              <a href="/signin">
                <div className="bg-blue-400 px-3 py-1 rounded-md">
                  signin/signup
                </div>
              </a>
            </li>
          )}
        </ul>
        <button className="block sm:hidden z-10" onClick={handleNav}>
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </button>

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full bg-blue-500 text-center ease-in-out duration-300 h-screen transition-all"
              : "sm:hidden absolute top-[-1900%] left-0 right-0 bottom-0 flex justify-center items-center w-full bg-blue-500 text-center ease-in-out duration-300 h-screen transition-all"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-blue-300">
              <Link href="/" onClick={handleNav}>
                Home
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-blue-300">
              <Link href="/profile" onClick={handleNav}>
                Profile
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-blue-300">
              <Link href="/" onClick={handleNav}>
                Mailbox
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-blue-300">
              <Link href="/" onClick={handleNav}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentNavbar;
