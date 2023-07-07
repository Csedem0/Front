import React from "react";

const sizeClasses = {
  txtPoppinsMedium8: "font-medium font-poppins",
  txtPoppinsMedium9: "font-medium font-poppins",
  txtUrbanistBold48: "font-bold font-urbanist",
  txtOverpassBold20: "font-bold font-overpass",
  txtOverpassBold26: "font-bold font-overpass",
  txtPoppinsMedium13: "font-medium font-poppins",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsMedium11: "font-medium font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsMedium16Black900: "font-medium font-poppins",
  txtPoppinsSemiBold16Black900: "font-poppins font-semibold",
  txtPoppinsSemiBold16Gray500: "font-poppins font-semibold",
  txtUrbanistSemiBold16: "font-semibold font-urbanist",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtOverpassRegular14: "font-normal font-overpass",
  txtPoppinsRegular16Black900: "font-normal font-poppins",
  txtUrbanistBold24: "font-bold font-urbanist",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtUrbanistSemiBold16Cyan600: "font-semibold font-urbanist",
  txtPoppinsMedium15: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtUrbanistRomanBlack96: "font-black font-urbanist",
  txtUrbanistBold16: "font-bold font-urbanist",
  txtOverpassBold16: "font-bold font-overpass",
  txtPoppinsMedium14Black900: "font-medium font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsMedium16Bluegray400: "font-medium font-poppins",
  txtPoppinsMedium16WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular14IndigoA100: "font-normal font-poppins",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
  txtPoppinsSemiBold16WhiteA700: "font-poppins font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
