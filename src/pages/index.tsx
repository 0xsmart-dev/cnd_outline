import React from "react";
import Hero from "@/sections/Hero";
import Futures from "@/sections/Futures";
import Setting from "@/sections/Setting";
import Try from "@/sections/Try";
import Footer from "@/sections/Footer";
const index = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <Hero></Hero>
      <Futures></Futures>
      <Setting></Setting>
      <Try></Try>
      <Footer></Footer>
    </div>
  );
};

export default index;
