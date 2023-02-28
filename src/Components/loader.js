import React, { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const disableScroll = () => {
        // disable scrolling by setting overflow to hidden
        document.body.style.overflow = 'hidden';
        // re-enable scrolling after 4 seconds
        setTimeout(() => {
          document.body.style.overflow = 'auto';
        }, 4800);
      };
      disableScroll();
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    //write a function to remove scrolling events for 4 seconds here please

  }, []);

  return (
    <div className={`font-mono p-10  text-center text-xl text-teal-300 bg-black flex flex-col w-full h-screen z-20 fixed top-0 left-0  justify-center items-center ${loading ? "block" : " transition ease-in-out duration-700 -translate-y-full "}`}>
      <InfinitySpin color="	#AFEEEE" height={150} width={150} className="bg-white"/>
    </div>
  );
};

export default Loader;
