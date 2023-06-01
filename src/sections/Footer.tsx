import React from "react";

const Footer = () => {
  return (
    <div className="lg:mx-24 md:mx-12 mt-12 mx-5 py-4 sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a
            className="flex items-center"
            href="/"
            rel="prefetch"
            target="_blank"
          >
            <span className="dark:text-white font-semibold self-center text-xl whitespace-nowrap">
              DiamondCDN
            </span>
          </a>
        </div>
        <div className="flex justify-evenly">
          <div></div>
          <div>
            <p className="dark:text-white text-gray-900 font-bold mb-6 text-sm uppercase">
              Follow us
            </p>
            <ul>
              <li className="mb-4">
                <a
                  className="dark:text-gray-400 hover:underline text-gray-600"
                  href="#"
                  rel="prefetch"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="dark:text-gray-400 hover:underline text-gray-600"
                  href="#"
                  rel="prefetch"
                  target="_blank"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="dark:text-white text-gray-900 font-bold mb-6 text-sm uppercase">
              Legal
            </p>
            <ul>
              <li className="mb-4">
                <a
                  className="dark:text-gray-400 hover:underline text-gray-600"
                  href="#"
                  rel="prefetch"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="dark:text-gray-400 hover:underline text-gray-600"
                  href="#"
                  rel="prefetch"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 dark:border-gray-700 lg:my-8 my-6 sm:mx-auto"></hr>
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="dark:text-gray-400 sm:text-center text-gray-500 text-sm">
          DiamondCDN LLC © 2022, a Connecticut company
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-6">
          <a
            className="text-gray-500 dark:hover:text-white hover:text-gray-900"
            href="#"
          >
            {" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
