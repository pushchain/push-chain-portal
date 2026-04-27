import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const BnbLogo: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="BnbLogo"
      icon={
        <svg width="inherit" height="inherit" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3.82737 5.25946L6.25814 2.8287L8.69007 5.26049L10.1044 3.84614L6.25814 0L2.41316 3.84503L3.82737 5.25946ZM0 6.25814L1.41439 4.84356L2.8287 6.25787L1.41429 7.67222L0 6.25814ZM3.82737 7.25699L6.25814 9.68762L8.69003 7.25587L10.1051 8.66946L10.1044 8.67018L6.25814 12.5163L2.41316 8.67129L2.41115 8.66928L3.82737 7.25699ZM9.68763 6.25876L11.102 4.84437L12.5163 6.25863L11.102 7.67302L9.68763 6.25876Z" fill="#202124"/>
        <path d="M7.86331 6.25796H7.86401L6.25881 4.65271L5.07236 5.83881L4.93606 5.97516L4.65491 6.25636L4.65271 6.25856L4.65491 6.26086L6.25881 7.86496L7.86411 6.25966L7.86491 6.25876L7.86331 6.25796Z" fill="#202124"/>
        </svg>
      }
      {...restProps}
    />
  );
};

export default BnbLogo;
