import React from "react";

import { Text } from "components";

const NotFound = () => {
  return (
    <>
      <div className="bg-indigo-A100 flex flex-col font-urbanist items-center justify-start mx-auto p-[250px] md:px-20 sm:px-75">
        <Text
          className="mb-[67px] md:text-5xl text-8xl text-white-A700 tracking-[0.20px]"
          size="txtUrbanistRomanBlack96"
        >
          Page Not Found
        </Text>
      </div>
    </>
  );
};

export default NotFound;
