import React from "react";

import { Button, Img, List, Text, Input } from "components";

const TransferRequestPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[33px] items-center justify-start mx-auto p-[31px] sm:px-5 w-full">
        <div className="flex flex-row items-start justify-end p-[7px] md:px-5 w-[29%] md:w-full">
          <Button className="border border-blue_gray-100 border-solid flex h-[35px] items-center justify-center p-[9px] rounded-[17px] w-[35px]">
            <Img
              className="h-4"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </Button>
          <Text
            className="ml-[50px] mt-[5px] text-black-900 text-center text-lg"
            size="txtPoppinsSemiBold18"
          >
            Transfer Request
          </Text>
          <Button className="border border-blue_gray-100 border-solid flex h-[35px] items-center justify-center ml-[51px] mr-[17px] p-[9px] rounded-[17px] w-[35px]">
            <Img src="images/img_volume_black_900.svg" alt="volume" />
          </Button>
        </div>
        <div className="flex flex-row items-center justify-end md:px-5 w-[26%] md:w-full">
          <Button
            className="bg-deep_purple-300 cursor-pointer flex items-center justify-center min-w-[125px] px-[22px] py-[9px] rounded-[7px]"
            leftIcon={
              <Img
                className="h-[15px] mt-1 mb-px mr-2"
                src="images/img_frame244.svg"
                alt="frame244"
              />
            }
          >
            <div className="font-medium leading-[normal] sm:px-5 text-left text-sm text-white-A700">
              Transfer
            </div>
          </Button>
          <Button
            className="bg-teal-300 cursor-pointer flex items-center justify-center min-w-[125px] ml-[18px] px-[22px] py-[9px] rounded-[7px]"
            leftIcon={
              <Img
                className="h-[15px] mt-0.5 mb-[3px] mr-[7px]"
                src="images/img_frame245.svg"
                alt="frame245"
              />
            }
          >
            <div className="font-medium leading-[normal] sm:px-5 text-left text-sm text-white-A700">
              Request
            </div>
          </Button>
          <Button className="bg-gray-50_01 flex h-10 items-center justify-center ml-[19px] p-2.5 rounded-[7px] w-10">
            <Img src="images/img_more.svg" alt="more" />
          </Button>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[50px] items-start justify-end p-3 md:px-5 w-[26%] md:w-full"
          style={{ backgroundImage: "url('images/img_searchbar.svg')" }}
        >
          <div className="flex flex-row gap-[9px] items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[48%] md:w-full">
            <Img
              className="h-[12px] mt-3"
              src="images/img_search.svg"
              alt="search"
            />
            <div className="flex flex-row items-center justify-start">
              <Input
                className="text-gray-500 text-sm"
                size="txtPoppinsRegular14"
                placeholder="Search People..."
              ></Input>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start mb-[113px] md:px-5 w-[26%] md:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-base text-black-900"
              size="txtPoppinsSemiBold16Black900"
            >
              Beneficiaries
            </Text>
          </div>
          <List
            className="flex flex-col gap-4 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-3.5 items-center justify-between w-[47%]">
                <Img
                  className="h-[50px] md:h-auto object-cover rounded w-[50px]"
                  src="images/img_rectangle63.png"
                  alt="rectangleSixtyThree"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsMedium14Black900"
                    >
                      Zander Wiza
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-0.5">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsRegular10"
                    >
                      UI/UX Designer
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-deep_purple-50 flex h-[25px] items-center justify-center my-3 p-2 rounded-[5px] w-[25px]">
                <Img className="h-2" src="images/img_plus.svg" alt="plus" />
              </Button>
            </div>
            <div className="flex flex-1 flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-3.5 items-center justify-between w-[47%]">
                <Img
                  className="h-[50px] md:h-auto object-cover rounded w-[50px]"
                  src="images/img_rectangle64.png"
                  alt="rectangleSixtyFour"
                />
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsMedium14Black900"
                    >
                      Devon Jerde
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px]">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsRegular10"
                    >
                      Product Designer
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-deep_purple-50 flex h-[25px] items-center justify-center my-3 p-2 rounded-[5px] w-[25px]">
                <Img className="h-2" src="images/img_plus.svg" alt="plus" />
              </Button>
            </div>
            <div className="flex flex-1 flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-3.5 items-center justify-between w-[47%]">
                <Img
                  className="h-[50px] md:h-auto object-cover rounded w-[50px]"
                  src="images/img_rectangle65.png"
                  alt="rectangleSixtyFive"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsMedium14Black900"
                    >
                      Alvis Blick
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsRegular10"
                    >
                      Graphic Designer
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-deep_purple-50 flex h-[25px] items-center justify-center my-3 p-2 rounded-[5px] w-[25px]">
                <Img className="h-2" src="images/img_plus.svg" alt="plus" />
              </Button>
            </div>
            <div className="flex flex-1 flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-3.5 items-center justify-between w-[47%]">
                <Img
                  className="h-[50px] md:h-auto object-cover rounded w-[50px]"
                  src="images/img_rectangle66.png"
                  alt="rectangleSixtySix"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsMedium14Black900"
                    >
                      Kira Kulas
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsRegular10"
                    >
                      Graphic Designer
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-deep_purple-50 flex h-[25px] items-center justify-center my-3 p-2 rounded-[5px] w-[25px]">
                <Img className="h-2" src="images/img_plus.svg" alt="plus" />
              </Button>
            </div>
            <div className="flex flex-1 flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-3.5 items-center justify-between w-[53%]">
                <Img
                  className="h-[50px] md:h-auto object-cover rounded w-[50px]"
                  src="images/img_rectangle67.png"
                  alt="rectangleSixtySeven"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsMedium14Black900"
                    >
                      Mara Wilkinson
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px]">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsRegular10"
                    >
                      Project Manager
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-deep_purple-50 flex h-[25px] items-center justify-center my-3 p-2 rounded-[5px] w-[25px]">
                <Img className="h-2" src="images/img_plus.svg" alt="plus" />
              </Button>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default TransferRequestPage;
