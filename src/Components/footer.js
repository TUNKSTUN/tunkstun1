import React from "react";

function footer() {
  return (
    <div className="bg-teal-200 text-white font-mono font-bold xl:text-10xl w-full h-full mt-28 ">
      <div className="xl:flex flex-col text-white tracking-wide xl:text-sm text-lg text-center items-center px-2">
        <h1 className="py-16 xl:text-xl text-teal-900 shadow-transparent">All Rights Reserved | Made with ❤️ by <button className="-rotate-3 tracking-widest font-mono font-bold bg-black px-2 text-white border-2 border-white text-xl m-2 p-1 rounded-md transition ease-in-out duration-200 hover:rotate-0 hover:scale-105"><a href="https://github.com/TUNKSTUN" className="px-5">YAHYA</a></button></h1>
      </div>
    </div>
  );
}

export default footer;
