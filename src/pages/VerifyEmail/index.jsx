import React from "react";

import { Button, Img, Text } from "components";

const VerifyEmailPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto p-[59px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col justify-start mb-[125px] md:ml-[0] ml-[168px] w-3/5 md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Button className="border border-blue_gray-100 border-solid flex h-[35px] items-center justify-center md:mt-0 mt-2 p-[9px] rounded-[17px] w-[35px]">
              <Img
                className="h-4"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
            </Button>
            <Img
              className="h-[145px]"
              src="images/img_illustration_indigo_a100.svg"
              alt="illustration"
            />
          </div>
          <div className="flex flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[346px] mt-[89px] w-[31%] md:w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtPoppinsSemiBold20"
            >
              Verify Your Email
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-blue_gray-400 text-center text-sm"
                size="txtPoppinsMedium14"
              >
                <span className="text-blue_gray-400 font-poppins font-medium">
                  <>
                    Please enter 4 digit code sent to
                    <br />
                  </>
                </span>
                <span className="text-indigo-A100 font-inter font-normal">
                  xyz@gmail.com
                </span>
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-between mt-[34px] w-full">
                <Text
                  className="border border-blue_gray-100 border-solid flex h-[50px] items-center justify-center rounded-[50%] text-black-900 text-center text-lg w-[50px]"
                  size="txtPoppinsRegular18"
                >
                  5
                </Text>
                <Text
                  className="border border-blue_gray-100 border-solid flex h-[50px] items-center justify-center rounded-[50%] text-black-900 text-center text-lg w-[50px]"
                  size="txtPoppinsRegular18"
                >
                  0
                </Text>
                <Text
                  className="border border-blue_gray-100 border-solid flex h-[50px] items-center justify-center rounded-[50%] text-black-900 text-center text-lg w-[50px]"
                  size="txtPoppinsRegular18"
                >
                  3
                </Text>
                <Text
                  className="border border-blue_gray-100 border-solid flex h-[50px] items-center justify-center rounded-[50%] text-black-900 text-center text-lg w-[50px]"
                  size="txtPoppinsRegular18"
                >
                  8
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-3.5">
                <Text
                  className="text-center text-indigo-A100 text-sm"
                  size="txtPoppinsRegular14IndigoA100"
                >
                  Resend Code
                </Text>
              </div>
              <Img className="h-px" src="images/img_elment.svg" alt="elment" />
            </div>
          </div>
          <Button className="bg-indigo-A100 cursor-pointer font-semibold leading-[normal] min-w-[327px] md:ml-[0] ml-[296px] mr-[120px] mt-[31px] py-[13px] rounded-[13px] text-base text-center text-white-A700">
            Verify Code
          </Button>
        </div>
      </div>
    </>
  );
};

export default VerifyEmailPage;
