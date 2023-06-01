import React from "react";

const Setting = () => {
  return (
    <div className="dark:bg-gray-700 bg-gray-200 pt-12 md:pt-32 pb-12 md:px-24 p-4">
      <div className="flex flex-wrap justify-between w-full max-w-[700px]">
        <div className="w-full max-w-[500px]">
          <h1 className="text-4xl font-bold">
            Manage your settings on the go, with a simple click
          </h1>
          <p className="dark:text-gray-400 mt-2">
            Our integrated dashboard allows you to view everything about your
            domain including analytics, notifications and configuration,
            instantly.
          </p>
        </div>

        <img
          alt=""
          className="rounded-lg border border-gray-300 aspect-video mt-8"
          src="https://cdn.camp/dash-security.webp"
        />
      </div>
    </div>
  );
};

export default Setting;
