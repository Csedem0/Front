import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const jan1998OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const unitedStatesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SignUpPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto p-[54px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[25px] justify-start mb-[17px] md:ml-[0] ml-[168px] w-[55%] md:w-full">
          <div className="flex flex-row sm:gap-10 items-start justify-between mr-[121px] w-[83%] md:w-full">
            <Button className="border border-blue_gray-100 border-solid flex h-[35px] items-center justify-center mt-3.5 p-[9px] rounded-[17px] w-[35px]">
              <Img
                className="h-4"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
            </Button>
            <div className="flex flex-row gap-[19px] items-center justify-between mb-[9px] w-[29%]">
              <a href="javascript:" className="text-base text-gray-500">
                <Text size="txtPoppinsMedium16">Login</Text>
              </a>
              <Button className="bg-indigo-A100 cursor-pointer font-semibold leading-[normal] min-w-[100px] py-2 rounded-[10px] text-base text-center text-white-A700">
                Sign Up
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[33px] items-start justify-start md:ml-[0] ml-[361px] w-[48%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-500"
                    size="txtPoppinsMedium16"
                  >
                    Email
                  </Text>
                  <Input
                    name="language"
                    placeholder="Write your name"
                    className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-black-900 text-left text-sm w-full"
                    wrapClassName="border-b border-blue_gray-100 pb-1 pr-[35px] w-full"
                    type="email"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-500"
                    size="txtPoppinsMedium16"
                  >
                    Email
                  </Text>
                  <Input
                    name="email_One"
                    placeholder="xyz@gmail.com"
                    className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-black-900 text-left text-sm w-full"
                    wrapClassName="border-b border-blue_gray-100 pb-1 pr-[35px] w-full"
                    type="email"
                  ></Input>
                </div>
                <div className="md:h-7 h-[51px] relative w-full">
                  <Text
                    className="absolute left-[0] text-base text-gray-500 top-[0]"
                    size="txtPoppinsMedium16"
                  >
                    Phone
                  </Text>
                  <Input
                    name="frame212"
                    placeholder="+1-123-456-7890"
                    className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-black-900 text-left text-sm w-full"
                    wrapClassName="absolute border-b border-blue_gray-100 bottom-[0] inset-x-[0] mx-auto pb-[7px] pr-[35px] w-full"
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
                    name="frame213"
                    placeholder="xyz123"
                    className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-black-900 text-left text-sm w-full"
                    wrapClassName="border-b border-blue_gray-100 pb-1 pr-[35px] w-full"
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-500"
                    size="txtPoppinsMedium16"
                  >
                    Confirm Password
                  </Text>
                  <Input
                    name="frame214"
                    placeholder="xyz123"
                    className="leading-[normal] p-0 placeholder:text-black-900 sm:pr-5 text-black-900 text-left text-sm w-full"
                    wrapClassName="border-b border-blue_gray-100 pb-1 pr-[35px] w-full"
                  ></Input>
                </div>
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start w-[48%]">
                    <Text
                      className="text-base text-gray-500"
                      size="txtPoppinsMedium16"
                    >
                      Country/Region
                    </Text>
                    <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                      <SelectBox
                        className="leading-[normal] text-black-900 text-left text-sm w-[94%] sm:w-full"
                        placeholderClassName="text-black-900"
                        indicator={
                          <Img
                            className="h-[5px] mr-[0] outline-black-900 outline-[0.5px] outline w-[9px]"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="groupSeven"
                        options={unitedStatesOptionsList}
                        isSearchable={false}
                        placeholder="United States"
                      />
                      <Line className="bg-blue_gray-100 h-px w-[99%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-indigo-A100 cursor-pointer font-semibold leading-[normal] min-w-[327px] py-[13px] rounded-[13px] text-base text-center text-white-A700">
              Login
            </Button>
            <div className="flex flex-row gap-[5px] items-start justify-start md:ml-[0] ml-[21px] w-auto">
              <a
                href="javascript:"
                className="text-base text-blue_gray-400 w-auto"
              >
                <Text size="txtPoppinsMedium16Bluegray400">
                  Already have an account?
                </Text>
              </a>
              <a
                href="javascript:"
                className="text-base text-indigo-A100 w-auto"
              >
                <Text size="txtPoppinsSemiBold16">Sign In</Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPagePage;
