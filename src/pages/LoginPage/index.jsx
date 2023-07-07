import React from "react";

import { Button, CheckBox, Img, Input, Text } from "components";

const LoginPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto p-[52px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col justify-start mb-[50px] md:ml-[0] ml-[226px] w-[52%] md:w-full">
          <div className="flex flex-row sm:gap-10 items-start justify-between mr-[108px] w-[84%] md:w-full">
            <Button className="border border-blue_gray-100 border-solid flex h-[35px] items-center justify-center p-[9px] rounded-[17px] w-[35px]">
              <Img
                className="h-4"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
            </Button>
            <div className="flex flex-row gap-[19px] items-center justify-between mt-1.5 w-[30%]">
              <div className="bg-indigo-A100 flex flex-col items-center justify-end p-[5px] rounded-[10px]">
                <a
                  href="javascript:"
                  className="mt-1 text-base text-white-A700"
                >
                  <Text size="txtPoppinsMedium16WhiteA700">Login</Text>
                </a>
              </div>
              <a href="javascript:" className="text-base text-gray-500">
                <Text size="txtPoppinsSemiBold16Gray500">Sign Up</Text>
              </a>
            </div>
          </div>
          <Img
            className="h-[212px] md:ml-[0] ml-[230px]"
            src="images/img_illustration_blue_gray_900_01.svg"
            alt="illustration"
          />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[270px] mt-[5px] w-[53%] md:w-full">
            <div className="flex flex-col gap-6 items-center justify-start ml-1 md:ml-[0] w-[96%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-base text-gray-500"
                  size="txtPoppinsMedium16"
                >
                  Email
                </Text>
                <Input
                  name="emailaddress"
                  placeholder="xyz@gmail.com"
                  className="leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-sm w-full"
                  wrapClassName="border-b border-blue_gray-100 flex pb-1 w-full"
                  type="email"
                  suffix={
                    <div className="h-3.5 ml-[35px] w-3.5 outline-black-900 outline-[0.5px] outline bg-indigo-A100 my-[3px]">
                      <Img
                        className="h-3.5 my-auto"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                  }
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-base text-gray-500"
                  size="txtPoppinsMedium16"
                >
                  Password
                </Text>
                <Input
                  name="passwordvalue"
                  placeholder="xyz123"
                  className="leading-[normal] p-0 placeholder:text-black-900 text-black-900 text-left text-sm w-full"
                  wrapClassName="border-b border-blue_gray-100 flex pb-1 w-full"
                  suffix={
                    <div className="h-3.5 mt-0.5 mb-1 ml-[35px] w-3.5 outline-black-900 outline-[0.5px] outline bg-indigo-A100">
                      <Img
                        className="h-3.5 my-auto"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                  }
                ></Input>
              </div>
            </div>
            <div className="flex flex-row items-start justify-between ml-2 md:ml-[0] mt-9 w-[98%] md:w-full">
              <CheckBox
                className="leading-[normal] mb-1.5 text-[13px] text-gray-500 text-left"
                inputClassName="border border-blue_gray-100 border-solid h-[13px] mr-[5px] rounded-[3px] w-[13px]"
                name="remebermeforget"
                id="remebermeforget"
                label="Remember me"
              ></CheckBox>
              <Text
                className="mt-1.5 text-[13px] text-indigo-A100"
                size="txtPoppinsMedium13"
              >
                Forget password?
              </Text>
            </div>
            <Button className="bg-indigo-A100 cursor-pointer font-semibold leading-[normal] min-w-[327px] mt-[39px] py-[13px] rounded-[13px] text-base text-center text-white-A700">
              Login
            </Button>
            <div className="flex flex-row gap-[5px] items-start justify-start ml-9 md:ml-[0] mt-[46px] w-auto">
              <a
                href="javascript:"
                className="text-base text-blue_gray-400 text-center w-auto"
              >
                <Text size="txtPoppinsMedium16Bluegray400">
                  Don’t have an account?
                </Text>
              </a>
              <a
                href="javascript:"
                className="text-base text-indigo-A100 w-auto"
              >
                <Text size="txtPoppinsSemiBold16">Sign Up</Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
