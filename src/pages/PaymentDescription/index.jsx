import React from "react";

import { Button, Img, Text, Input } from "components";

const PaymentDescriptionPage = () => {
  return (
    <>
      <div className="bg-gray-100_03 flex flex-col font-overpass items-center justify-start mx-auto p-16 md:px-10 sm:px-5 w-full">
        <div className="flex flex-row gap-[82px] items-start justify-center p-1.5 w-[31%] md:w-full">
          <Img
            className="h-7 ml-7 mt-1 w-7"
            src="images/img_globe.svg"
            alt="globe"
          />
          <Text
            className="mr-[100px] mt-0.5 text-center text-gray-900 text-xl"
            size="txtOverpassBold20"
          >
            Safe Transfer
          </Text>
        </div>
        <div className="flex flex-col gap-[35px] items-center max-w-[1055px] mt-[38px] mx-auto md:px-10 sm:px-5 px-[364px] w-full">
          <Text
            className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
            size="txtOverpassBold26"
          >
            Payment Description
          </Text>
          <Text
            className="mr-7 text-blue_gray-700_01 text-sm"
            size="txtOverpassRegular14"
          >
            Enter your payment description
          </Text>
        </div>
        <div className="flex flex-col gap-[49px] items-center justify-start max-w-[1055px] mb-[270px] mt-[46px] mx-auto w-full">
          <Input
            className="h-[55px]"
            placeholder="Write description"
            alt="ammount"
          />
          <Button className="bg-indigo-A100 cursor-pointer font-bold min-w-[1055px] md:min-w-full py-[11px] text-center text-white-A700 text-xl tracking-[1.00px]">
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default PaymentDescriptionPage;
