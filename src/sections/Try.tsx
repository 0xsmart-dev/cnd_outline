import React from "react";

const Try = () => {
  return (
    <div className="px-4 md:px-10 py-10 md:py-32">
      <div className="text-center bg-gradient-to-r from-indigo-500 rounded-xl shadow-lg px-4 text-white to-indigo-800 w-full max-w-[800px] mx-auto py-20">
        <h1 className="text-3xl font-bold">Try us on</h1>

        <p className="text-center lg:w-1/2 text-gray-200 mx-auto my-4">
          We've built applications on all of the other options, and we found
          their features lackluster. We tried to reach out to get them to
          improve their products: they wouldn't listen. That is why DiamondCDN
          was founded—we want to influence change for anyone with an Internet
          app.
        </p>
        <div className="center mt-8">
          <a
            className="rounded-lg duration-125 px-6 py-3 transition-all bg-white hover:bg-gray-200 text-gray-900"
            href="#"
          >
            Join the revolution
          </a>
        </div>
      </div>
    </div>
  );
};

export default Try;
