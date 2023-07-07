import React from "react";

import { Button, Img, Text } from "components";

const SendMoneyPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[45px] justify-start mx-auto p-[51px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-end md:ml-[0] ml-[487px] mr-[402px] p-[7px] w-[30%] md:w-full">
          <Button className="border border-blue_gray-100 border-solid flex h-[35px] items-center justify-center p-[9px] rounded-[17px] w-[35px]">
            <Img
              className="h-4"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </Button>
          <div className="flex flex-col items-center justify-start md:mt-0 mt-1.5">
            <Text
              className="text-black-900 text-lg"
              size="txtPoppinsSemiBold18"
            >
              Send Money
            </Text>
          </div>
          <Button className="flex h-[35px] items-center justify-center mr-[17px] w-[35px]"></Button>
        </div>
        <div className="flex flex-col md:gap-10 gap-[126px] items-center justify-start mb-[219px] md:ml-[0] ml-[505px] w-[26%] md:w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[15px] w-full"
              style={{ backgroundImage: "url('images/img_group44.svg')" }}
            >
              <div className="flex flex-row items-center justify-start w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_ellipse311.png"
                  alt="ellipse311"
                />
                <div className="flex flex-col items-start justify-start ml-3.5 w-[31%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-[15px] text-black-900"
                      size="txtPoppinsMedium15"
                    >
                      Alex Dordan
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[9px] text-gray-500"
                      size="txtPoppinsMedium9"
                    >
                      Web Developer
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_purple-50 h-[30px] ml-[110px] my-2.5 rounded-[50%] w-[30px]"></div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[15px] w-full"
              style={{ backgroundImage: "url('images/img_group44.svg')" }}
            >
              <div className="flex flex-row items-center justify-start w-full">
                <Img
                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                  src="images/img_ellipse311.png"
                  alt="ellipse311"
                />
                <div className="flex flex-col items-start justify-start ml-3.5 w-[31%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-[15px] text-black-900"
                      size="txtPoppinsMedium15"
                    >
                      Alex Dordan
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[9px] text-gray-500"
                      size="txtPoppinsMedium9"
                    >
                      Web Developer
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_purple-50 h-[30px] ml-[110px] my-2.5 rounded-[50%] w-[30px]"></div>
              </div>
            </div>
          </div>
          <Button className="bg-indigo-A100 cursor-pointer font-semibold leading-[normal] min-w-[327px] py-[13px] rounded-[9px] text-base text-center text-white-A700">
            Send Money{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default SendMoneyPage;
