import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="bg-amber-200 text-white font-mono font-bold w-full h-50 mt-20">
      <div className="xl:flex flex-col text-white tracking-wide xl:text-sm text-sm xl:text-lg text-center items-center px-2">
        <h1 className="py-16 xl:text-xl text-amber-900 shadow-transparent">
           Made with ❤️ by{" "} 
          <button className="-rotate-3 tracking-widest font-mono font-bold bg-black px-2 text-white border-2 border-white xl:text-lg text-sm m-2 p-1 rounded-md transition ease-in-out duration-200 hover:rotate-0 hover:scale-105">
            <a
              href="https://github.com/TUNKSTUN"
              className="px-5"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Prevents potential security risks
            >
              YAHYA
            </a>
          </button>{" "}
          © {currentYear} {/* Display the current year */}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
