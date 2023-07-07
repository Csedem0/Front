import React from "react";

import { Button, Img, Input, Text } from "components";

const AccountDetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-urbanist items-start justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-row gap-[43px] items-start justify-end md:ml-[0] ml-[504px] p-[9px] md:px-5 w-[29%] md:w-full">
          <Img className="h-7 w-7" src="images/img_globe.svg" alt="globe" />
          <Text
            className="mr-[102px] mt-0.5 text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
            size="txtUrbanistBold24"
          >
            Account Details
          </Text>
        </div>
        <div className="flex flex-row items-center justify-end md:ml-[0] ml-[525px] mt-6 md:px-5 w-[26%] md:w-full">
          <Text
            className="bg-cyan-600 h-[38px] justify-center sm:px-5 px-[34px] py-2 rounded-[19px] text-base text-center text-white-A700 tracking-[0.20px] w-[106px]"
            size="txtUrbanistSemiBold16"
          >
            Mr.
          </Text>
          <Text
            className="border-2 border-cyan-600 border-solid ml-[7px] pl-[35px] pr-[29px] sm:px-5 py-2 rounded-[19px] text-base text-center text-cyan-600 tracking-[0.20px]"
            size="txtUrbanistSemiBold16Cyan600"
          >
            Mrs.
          </Text>
          <Text
            className="border-2 border-cyan-600 border-solid ml-[7px] pl-[35px] pr-8 sm:px-5 py-2 rounded-[19px] text-base text-center text-cyan-600 tracking-[0.20px]"
            size="txtUrbanistSemiBold16Cyan600"
          >
            Ms.
          </Text>
        </div>
        <div className="flex flex-col gap-6 items-center justify-start md:ml-[0] ml-[525px] mt-6 md:px-5 w-[26%] md:w-full">
          <Input
            name="statusfilltyped"
            placeholder="Daniel Austin"
            className="font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-left text-sm text-white-A700 tracking-[0.20px] w-full"
            wrapClassName="bg-indigo-A100 pl-5 pr-[35px] py-[19px] rounded-[12px] w-full"
          ></Input>
          <Input
            name="firstname"
            placeholder="Daniel"
            className="font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-left text-sm text-white-A700 tracking-[0.20px] w-full"
            wrapClassName="bg-indigo-A100 pl-5 pr-[35px] py-[19px] rounded-[12px] w-full"
          ></Input>
          <Input
            name="dob"
            placeholder="12/27/1995"
            className="font-semibold p-0 placeholder:text-white-A700 text-left text-sm text-white-A700 tracking-[0.20px] w-full"
            wrapClassName="bg-indigo-A100 flex pl-5 pr-[15px] py-[18px] rounded-[12px] w-full"
            suffix={
              <div className="mb-px ml-[35px] sm:w-full sm:mx-0 w-[5%] outline-black-900 outline-[0.5px] outline bg-cyan-600_01">
                <Img
                  className="my-auto"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
              </div>
            }
          ></Input>
          <Input
            name="email"
            placeholder="user@domain.com"
            className="font-semibold p-0 placeholder:text-white-A700 text-left text-sm text-white-A700 tracking-[0.20px] w-full"
            wrapClassName="bg-indigo-A100 flex pl-5 pr-[13px] py-[19px] rounded-[12px] w-full"
            type="email"
            suffix={
              <div className="mt-px ml-[35px] w-[17px] outline-black-900 outline-[0.5px] outline bg-cyan-600_01">
                <Img
                  className="my-auto"
                  src="images/img_clock_cyan_600_01.svg"
                  alt="clock"
                />
              </div>
            }
          ></Input>
          <Input
            name="phonenumber"
            placeholder="+1 123 456 789 000"
            className="font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-left text-sm text-white-A700 tracking-[0.20px] w-full"
            wrapClassName="bg-indigo-A100 pb-4 pl-[26px] pr-[35px] pt-[22px] rounded-[12px] w-full"
          ></Input>
        </div>
        <Button className="bg-cyan-600 cursor-pointer font-bold mb-24 min-w-[380px] sm:min-w-full md:ml-[0] ml-[502px] mt-[49px] py-[17px] rounded-[27px] shadow-bs text-base text-center text-white-A700 tracking-[0.20px]">
          Continue
        </Button>
      </div>
    </>
  );
};

export default AccountDetailsPage;
