import React from "react";

import { Button, Img, Input, Text } from "components";

const ForgotPasswordPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto p-[63px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[75px] justify-start mb-[132px] md:ml-[0] ml-[149px] w-[61%] md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
            <Button className="border border-blue_gray-100 border-solid flex h-[35px] items-center justify-center sm:mt-0 mt-[9px] p-[9px] rounded-[17px] w-[35px]">
              <Img
                className="h-4"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
            </Button>
            <Img
              className="h-[198px]"
              src="images/img_illustration.svg"
              alt="illustration"
            />
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[322px] w-[44%] md:w-full">
            <Text
              className="text-black-900 text-xl"
              size="txtPoppinsSemiBold20"
            >
              Forget Password
            </Text>
            <Text
              className="mt-5 text-blue_gray-400 text-center text-sm"
              size="txtPoppinsMedium14"
            >
              <span className="text-blue_gray-400 font-poppins font-medium">
                <>
                  Please enter your email address to
                  <br />
                  receive a{" "}
                </>
              </span>
              <span className="text-indigo-A100 font-poppins font-medium">
                verification code.
              </span>
            </Text>
            <div className="flex flex-col gap-5 items-center justify-start mt-6 w-full">
              <Input
                name="email"
                placeholder="xyz@gmail.com"
                className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-black-900 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-100 border-solid pb-3 pl-5 pr-[35px] pt-4 rounded-[13px] w-full"
                type="email"
              ></Input>
              <Button className="bg-indigo-A100 cursor-pointer font-semibold leading-[normal] min-w-[327px] py-[13px] rounded-[13px] text-base text-center text-white-A700">
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
