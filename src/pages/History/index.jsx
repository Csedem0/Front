import React from "react";

import { Button, Img, List, Text } from "components";

const HistoryPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[11px] items-center justify-end mx-auto w-full">
        <div className="flex flex-row gap-24 items-start justify-end mt-[23px] p-[7px] md:px-5 w-[28%] md:w-full">
          <Button className="border border-blue_gray-100 border-solid flex h-[35px] items-center justify-center p-[9px] rounded-[17px] w-[35px]">
            <Img
              className="h-4"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </Button>
          <Text
            className="mt-[5px] text-black-900 text-center text-lg"
            size="txtPoppinsSemiBold18"
          >
            History
          </Text>
          <Button className="border border-blue_gray-100 border-solid flex h-[35px] items-center justify-center mr-[17px] p-2.5 rounded-[17px] w-[35px]">
            <Img
              className="h-3"
              src="images/img_search_black_900.svg"
              alt="search"
            />
          </Button>
        </div>
        <div className="flex flex-col gap-[23px] items-center justify-start md:px-5 w-[24%] md:w-full">
          <div className="flex flex-col gap-[17px] items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-[10px] text-center text-gray-500"
                size="txtPoppinsMedium10"
              >
                Today, 25 June
              </Text>
            </div>
            <List
              className="flex flex-col gap-[15px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-end justify-between w-[46%]">
                  <div className="bg-gray-100_02 h-[50px] rounded-[13px] w-[50px]"></div>
                  <div className="flex flex-col items-start justify-start mb-[3px] mt-1.5">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        Apple Store
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-1">
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtPoppinsMedium10"
                      >
                        21 June, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[17%]">
                  <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]">
                    <Text
                      className="text-[11px] text-black-900"
                      size="txtPoppinsMedium11"
                    >
                      -$220.00
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsMedium10"
                    >
                      Debit Card
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-center justify-between w-[42%]">
                  <div className="bg-red-A700_26 h-[50px] rounded-[13px] w-[50px]"></div>
                  <div className="flex flex-col gap-1.5 items-start justify-start">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        Netflix
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtPoppinsMedium10"
                      >
                        20 June, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start w-[17%]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[11px] text-black-900"
                      size="txtPoppinsMedium11"
                    >
                      -$170.00
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsMedium10"
                    >
                      Debit Card
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-end justify-between w-[42%]">
                  <Button className="bg-green-A700_26 flex h-[50px] items-center justify-center p-3 rounded-[13px] w-[50px]">
                    <Img
                      className="h-[25px]"
                      src="images/img_icon_50x50.png"
                      alt="icon"
                    />
                  </Button>
                  <div className="flex flex-col items-start justify-start my-1">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        Spotify
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-1 w-full">
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtPoppinsMedium10"
                      >
                        20 June, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start w-[19%]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[11px] text-black-900"
                      size="txtPoppinsMedium11"
                    >
                      -$54.00
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsMedium10"
                    >
                      Credit Card
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-center justify-between w-[41%]">
                  <div className="bg-pink-400_26 h-[50px] rounded-[13px] w-[50px]"></div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        Dribbble
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-0.5 w-full">
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtPoppinsMedium10"
                      >
                        18 June, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start w-[17%]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[11px] text-black-900"
                      size="txtPoppinsMedium11"
                    >
                      -$107.00
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsMedium10"
                    >
                      Debit Card
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[17px] items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-[10px] text-center text-gray-500"
                size="txtPoppinsMedium10"
              >
                Yesterday
              </Text>
            </div>
            <List
              className="flex flex-col gap-[15px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-center justify-between w-[41%]">
                  <div className="bg-blue-A700_26 h-[50px] rounded-[13px] w-[50px]"></div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        Behance
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-0.5 w-full">
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtPoppinsMedium10"
                      >
                        18 June, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start w-[19%]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[11px] text-black-900"
                      size="txtPoppinsMedium11"
                    >
                      -$27.00
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsMedium10"
                    >
                      Credit Card
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-center justify-between w-[41%]">
                  <div className="bg-light_blue-800_26 h-[50px] rounded-[13px] w-[50px]"></div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        LinkedIn
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-0.5 w-full">
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtPoppinsMedium10"
                      >
                        18 June, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start w-[17%]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[11px] text-black-900"
                      size="txtPoppinsMedium11"
                    >
                      -$27.00
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsMedium10"
                    >
                      Debit Card
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-end justify-between w-[51%]">
                  <div className="bg-amber-600_26 h-[50px] rounded-[13px] w-[50px]"></div>
                  <div className="flex flex-col items-start justify-start mb-[3px] mt-1.5">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsMedium14Black900"
                    >
                      Snapchat Ads
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-1">
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtPoppinsMedium10"
                      >
                        21 June, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[17%]">
                  <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]">
                    <Text
                      className="text-[11px] text-black-900"
                      size="txtPoppinsMedium11"
                    >
                      +$130.00
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsMedium10"
                    >
                      Debit Card
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[17px] items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-[10px] text-center text-gray-500"
                size="txtPoppinsMedium10"
              >
                20 June, 2022
              </Text>
            </div>
            <List
              className="flex flex-col gap-[15px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-end justify-between w-[55%]">
                  <div className="bg-light_blue-500_26 h-[50px] rounded-[13px] w-[50px]"></div>
                  <div className="flex flex-col items-start justify-start my-1">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-sm"
                        size="txtPoppinsMedium14Black900"
                      >
                        Skype Premium
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-1">
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtPoppinsMedium10"
                      >
                        20 June, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start w-[17%]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[11px] text-black-900"
                      size="txtPoppinsMedium11"
                    >
                      -$56.00
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                    <Text
                      className="text-[10px] text-gray-500"
                      size="txtPoppinsMedium10"
                    >
                      Debit Card
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
