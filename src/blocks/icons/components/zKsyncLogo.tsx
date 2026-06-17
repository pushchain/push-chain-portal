import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const zKsyncLogo: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="zKsyncLogo"
      icon={
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M0 4.00001L4.00001 0V2.00001H8.00001L4.00001 5V8.00003L0 4.00001Z" fill="#202124"/>
        <path d="M14 4.00001L10 8.00003V6H6.00003L10 3.00001V0L14 4.00001Z" fill="#202124"/>
        </svg>
      }
      {...restProps}
    />
  );
};

export default zKsyncLogo;
