import React from "react";

import { Button, Img, Text } from "components";

const LetsYouInPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-urbanist items-start justify-start mx-auto p-[50px] md:px-10 sm:px-5 w-full">
        <Text
          className="leading-[52.00px] md:ml-[0] ml-[506px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900_02 text-center"
          size="txtUrbanistBold48"
        >
          <>Transaction!</>
        </Text>
        <Button
          className="bg-blue_gray-900_02 border border-gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[328px] md:ml-[0] ml-[506px] mt-[35px] px-[34px] py-[18px] rounded-[16px]"
          leftIcon={
            <Img
              className="mr-2"
              src="images/img_frame_white_a700.svg"
              alt="Frame"
            />
          }
        >
          <div className="font-semibold sm:px-5 text-base text-left text-white-A700 tracking-[0.20px]">
            Continue with Jumia
          </div>
        </Button>
        <Button
          className="bg-blue_gray-900_02 border border-gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[328px] md:ml-[0] ml-[506px] mt-[35px] px-[34px] py-[18px] rounded-[16px]"
          leftIcon={
            <Img
              className="mr-2"
              src="images/img_frame_white_a700.svg"
              alt="Frame"
            />
          }
        >
          <div className="font-semibold sm:px-5 text-base text-left text-white-A700 tracking-[0.20px]">
            Continue with Jumia
          </div>
        </Button>
        <Button
          className="bg-blue_gray-900_02 border border-gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[328px] md:ml-[0] ml-[506px] mt-[35px] px-[34px] py-[18px] rounded-[16px]"
          leftIcon={
            <Img
              className="mr-2"
              src="images/img_frame_white_a700.svg"
              alt="Frame"
            />
          }
        >
          <div className="font-semibold sm:px-5 text-base text-left text-white-A700 tracking-[0.20px]">
            Continue with Jumia
          </div>
        </Button>
        <Img
          className="h-2.5 md:ml-[0] ml-[508px] mt-[59px]"
          src="images/img_group16.svg"
          alt="groupSixteen"
        />
        <Button className="bg-indigo-A100 border border-gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[328px] md:ml-[0] ml-[506px] mt-[35px] px-[34px] py-[18px] rounded-[16px]">
          <div className="font-semibold sm:px-5 text-base text-left text-white-A700 tracking-[0.20px]">
            Continue with Jumia
          </div>
        </Button>
      </div>
    </>
  );
};

export default LetsYouInPage;
