import React from "react";

import { Button, Img, Switch, Text } from "components";

const TrackTransferPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[47px] items-center justify-start mx-auto p-[77px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-row items-start justify-center p-[7px] w-[31%] md:w-full">
          <Button className="border border-blue_gray-100 border-solid flex h-[35px] items-center justify-center ml-[17px] p-[9px] rounded-[17px] w-[35px]">
            <Img
              className="h-4"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </Button>
          <div className="flex flex-col items-center justify-start ml-[63px] mt-[7px]">
            <Text
              className="text-black-900 text-lg"
              size="txtPoppinsSemiBold18"
            >
              Track Transfer
            </Text>
          </div>
          <Button className="flex h-[35px] items-center justify-center ml-[62px] mr-[17px] w-[35px]"></Button>
        </div>
        <div className="flex flex-col font-overpass items-center justify-start mb-[254px] w-[29%] md:w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-gray-900"
                size="txtOverpassBold16"
              >
                Transfer Status
              </Text>
            </div>
            <Switch
              onColor="#8982ff"
              offColor="#8982ff"
              onHandleColor="#ffffff"
              offHandleColor="#ffffff"
              value={true}
              className="w-[11%]"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-[61px] w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-gray-900"
                size="txtOverpassBold16"
              >
                Transfer Status
              </Text>
            </div>
            <Switch
              onColor="#8982ff"
              offColor="#8982ff"
              onHandleColor="#ffffff"
              offHandleColor="#ffffff"
              value={true}
              className="w-[11%]"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-[61px] w-[98%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-gray-900"
                size="txtOverpassBold16"
              >
                Transfer Status
              </Text>
            </div>
            <Switch
              onColor="#8982ff"
              offColor="#8982ff"
              onHandleColor="#ffffff"
              offHandleColor="#ffffff"
              value={true}
              className="w-[11%]"
            />
          </div>
          <div className="flex flex-row items-start justify-between mt-[61px] w-full">
            <div className="flex flex-col items-center justify-start mb-0.5">
              <Text
                className="text-base text-gray-900"
                size="txtOverpassBold16"
              >
                Transfer Status
              </Text>
            </div>
            <Switch
              onColor="#8982ff"
              offColor="#8982ff"
              onHandleColor="#ffffff"
              offHandleColor="#ffffff"
              value={true}
              className="w-[11%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackTransferPage;
