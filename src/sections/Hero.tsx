import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" bg-[url('/pattern.svg')] pb-10 pt-5">
      <nav className="flex justify-between p-5 z-10">
        <a className="mt-2" href="/">
          LOGO
        </a>
        <button
          onClick={() => {
            setShowMenu(true);
          }}
          className="rounded-lg text-white bg-gray-900 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900 duration-125 hover:bg-gray-700 px-6 py-3 transition-all"
        >
          <Bars3Icon className="w-5 " />
        </button>
      </nav>
      {/* ---------nav------------ */}
      <div className={"relative z-10 " + (showMenu ? "block" : "hidden")}>
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
          onClick={() => {
            setShowMenu(false);
          }}
        ></div>
        <div className="fixed right-0 top-0 h-full">
          <div className="flex bg-white dark:bg-gray-800 dark:text-white flex-col h-full py-6 shadow-xl">
            <div className="flex px-4 gap-1 sm:px-6">
              <h2
                className="dark:text-white text-gray-900 text-lg"
                id="slide-over-title"
              >
                DiamondCDN
              </h2>
            </div>
            <div className="relative flex-1 mt-10 px-4 sm:px-6">
              <nav className="grid gap-y-8 ml-4">
                <a
                  className="flex items-center rounded-md -m-3 dark:hover:bg-gray-700 hover:bg-gray-50 p-3"
                  href="/"
                >
                  <span className="font-medium text-base ml-3">Home</span>
                </a>
                <a
                  className="flex items-center rounded-md -m-3 dark:hover:bg-gray-700 hover:bg-gray-50 p-3"
                  href="/"
                >
                  <span className="font-medium text-base ml-3">Features</span>
                </a>
                <a
                  className="flex items-center rounded-md -m-3 dark:hover:bg-gray-700 hover:bg-gray-50 p-3"
                  href="/"
                >
                  <span className="font-medium text-base ml-3">Pricing</span>
                </a>
                <a
                  className="flex items-center rounded-md -m-3 dark:hover:bg-gray-700 hover:bg-gray-50 p-3"
                  href="/"
                >
                  <span className="font-medium text-base ml-3">FAQ</span>
                </a>
                <a
                  className="flex items-center rounded-md -m-3 dark:hover:bg-gray-700 hover:bg-gray-50 p-3"
                  href="/"
                >
                  <span className="font-medium text-base ml-3">About us</span>
                </a>
              </nav>
              <div className="px-5 mt-16 py-6 space-y-6">
                <div className="grid gap-x-8 gap-y-4 grid-cols-2">
                  <a
                    className="font-medium text-base dark:hover:text-gray-300 dark:text-white hover:text-gray-700 text-gray-900"
                    href="/"
                  >
                    Blog
                  </a>
                  <a
                    className="font-medium text-base dark:hover:text-gray-300 dark:text-white hover:text-gray-700 text-gray-900"
                    href="/"
                  >
                    System status
                  </a>
                  <a
                    className="font-medium text-base dark:hover:text-gray-300 dark:text-white hover:text-gray-700 text-gray-900"
                    href="/"
                  >
                    Help Center
                  </a>
                  <a
                    className="font-medium text-base dark:hover:text-gray-300 dark:text-white hover:text-gray-700 text-gray-900"
                    href="/"
                  >
                    Discord
                  </a>
                  <a
                    className="font-medium text-base dark:hover:text-gray-300 dark:text-white hover:text-gray-700 text-gray-900"
                    href="/"
                  >
                    Team
                  </a>
                  <a
                    className="font-medium text-base dark:hover:text-gray-300 dark:text-white hover:text-gray-700 text-gray-900"
                    href="/"
                  >
                    Contact
                  </a>
                </div>
                <div>
                  <a
                    className="flex items-center rounded-md bg-indigo-600 border border-transparent font-medium hover:bg-indigo-700 justify-center px-4 py-2 shadow-sm text-base text-white w-full"
                    href="/"
                  >
                    Sign up
                  </a>
                  <p className="font-medium text-base dark:text-gray-300 mt-6 text-center text-gray-500">
                    Existing client?{" "}
                    <a
                      className="text-indigo-600 hover:text-indigo-500"
                      href="/"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ssssssssssss */}
      <div className="flex flex-col items-center">
        <div className="dark:text-white bg-gray-100 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 mb-16 px-6 py-1 rounded-full shadow-sm text-gray-800">
          <b className="mr-2">🚀</b> Private beta open now
        </div>
        <h1 className="text-center mb-10 md:text-7xl text-5xl">
          <b>Protect your</b>
          <br></br>
          <b className="text-indigo-600">online presence</b>
        </h1>
        <div className="dark:text-gray-300 text-center md:w-1/2 text-gray-700 w-3/4 md:text-xl text-lg">
          Really fast. Immensely secure. Besdivoke customer accommodation. This
          is DiamondCDN.
        </div>
        <div className="center mt-6">
          <a
            className="rounded-lg text-white bg-gray-900 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900 duration-125 hover:bg-gray-700 px-6 py-3 transition-all"
            href="#"
          >
            Join us
          </a>
        </div>
        <div className="p-4">
          <img
            alt=""
            className="rounded-lg border border-gray-300 md:w-1/2 mt-10 aspect-video mx-auto"
            src="https://cdn.camp/dash-domains.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
