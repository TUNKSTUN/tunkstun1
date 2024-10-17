import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="bg-amber-200 text-white font-mono h-[50px] p-10 font-bold w-full h-50 mt-20 justify-center items-start">
      <div className="xl:flex flex-col text-white tracking-wide xl:text-sm text-sm xl:text-lg text-center items-center px-2">
        <h1 className=" xl:text-xl text-lg text-amber-900 shadow-transparent text-wrap">
           Made with ❤️ by{" "} 
          <button className="font-[QS] font-bold  px-2 text-amber-900  p-1  transition ease-in-out duration-200 hover:rotate-0 hover:scale-105">
            <a
              href="https://github.com/TUNKSTUN"
              className="px-5 xl:text-xl text-md"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Prevents potential security risks
            >
              Tunkstun
            </a>
          </button>{" "}
          © {currentYear} {/* Display the current year */}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
