import React from "react";

import { Button, Img, Text } from "components";

const ConfirmationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins justify-start mx-auto p-[55px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center md:ml-[0] ml-[200px] mr-[427px] md:px-10 sm:px-5 px-[53px] w-3/5 md:w-full">
          <div className="flex flex-col md:gap-10 gap-16 justify-start w-[47%] md:w-full">
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[111px]">
              <Text
                className="text-black-900 text-lg"
                size="txtPoppinsSemiBold18"
              >
                Confirmation!!
              </Text>
            </div>
            <Img
              className="h-[189px]"
              src="images/img_illustration_gray_100.svg"
              alt="illustration"
            />
          </div>
        </div>
        <div className="flex flex-col items-end md:ml-[0] ml-[85px] mr-[427px] mt-[162px] md:pl-10 sm:pl-5 pl-[415px] w-3/5 md:w-full">
          <Button className="bg-indigo-A100 cursor-pointer font-semibold leading-[normal] min-w-[327px] py-[13px] rounded-[9px] text-base text-center text-white-A700">
            Back Home
          </Button>
        </div>
        <div className="flex flex-col items-center justify-start mb-[110px] md:ml-[0] ml-[85px] mt-[29px]">
          <Text
            className="text-base text-white-A700"
            size="txtPoppinsSemiBold16WhiteA700"
          >
            Back Home
          </Text>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
