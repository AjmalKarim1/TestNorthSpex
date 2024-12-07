import React, { useState } from "react";
const ToogleText = () => {
  const [showText, setShowText] = useState(false);
  const handleToggle = () => {
    setShowText((prev) => !prev);
  };
  return (
    <div
      className="flex flex-col items-center justify-center md:gap-[156px] 
       w-full bg-white py-[80px] max-sm:py-[50px] max-sm:px-[15px] shadow-sm"
    >
      <div className="md:w-[533px]">
        <h4 className="mb-[20px] max-sm:my-[15px] md:w-[580px] max-sm:text-[18px] text-[24px] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, natus?
        </h4>

        <button
          onClick={handleToggle}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Toggle Text
        </button>
        {showText && (
          <p className="mt-4 text-[#5E5E6F] text-[16px] font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur cupiditate aspernatur asperiores? Laborum laudantium
            culpa beatae consectetur mollitia, incidunt, assumenda dolores
            labore consequatur facilis quis ipsam reiciendis quo repellendus
            provident.
          </p>
        )}
      </div>
    </div>
  );
};
export default ToogleText;
