import React from "react";

import { Button, Img, Text } from "components";

const TermsAndConditionsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-end mx-auto pt-[13px] px-[13px] w-full">
        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[336px] md:px-5 w-[42%] md:w-full">
          <div className="flex flex-col gap-14 items-start justify-start">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_a2"
              size="txtPoppinsSemiBold28"
            >
              Terms and Conditions
            </Text>
            <Text
              className="leading-[24.00px] md:ml-[0] ml-[22px] text-base text-gray-900_a2 tracking-[0.24px]"
              size="txtPoppinsRegular16"
            >
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fermentum netus amet risus commodo amet vulputate tellus. Et
                quis ornare sed diam in. Id nibh mattis quis fermentum non
                malesuada. Vel ullamcorper lacus, mollis pellentesque egestas
                aliquet aliquam. Risus lorem velit, nunc id ornare diam. Odio
                diam egestas vulputate tristique mi aliquam eget. Feugiat mi sed
                semper faucibus tellus aliquam nulla ullamcorper arcu. Est in
                risus pulvinar arcu pretium dui eget pretium. Nunc, sed
                scelerisque id varius.
                <br />
                Vulputate vel aliquam suscipit vitae, nullam pretium. Ut sed
                elementum eget id pellentesque. Odio placerat faucibus purus
                rhoncus, pharetra commodo. Augue a duis vitae tempor lobortis.
                Aliquam nunc amet fermentum, aliquet elementum ac neque,
                convallis. Fames nulla ornare diam odio enim. Enim, pellentesque{" "}
              </>
            </Text>
            <Text
              className="bg-indigo-A100 h-[50px] gap-14 text-center justify-center md:ml-[0] ml-[5px] pb-2.5 pt-[15px] sm:px-5 px-[35px] rounded-[9px] text-base text-white-A700 w-[327px]"
              size="txtPoppinsSemiBold16WhiteA700"
            >
              Accept
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
