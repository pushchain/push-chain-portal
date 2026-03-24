import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const Cult: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Cult"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" viewBox="0 0 32 32" fill="none" {...props}>
          <mask id="mask0_44568_20317" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
            <path d="M0 0H32V32H0V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_44568_20317)">
            <path d="M10.3198 15.5471C13.4573 12.4101 18.5435 12.4101 21.681 15.5471C23.5437 17.4103 25.1453 19.012 25.1453 19.012C25.1453 19.012 23.5437 20.6136 21.681 22.4768C18.5435 25.6138 13.4573 25.6138 10.3198 22.4768C8.45709 20.6136 6.85547 19.012 6.85547 19.012C6.85547 19.012 8.45709 17.4103 10.3198 15.5471Z" stroke="#D548EC" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 1.94148L31.0625 30.0581H0.9375L16 1.94148Z" stroke="#D548EC" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.0005 17.0038C17.1091 17.0038 18.0089 17.9036 18.0089 19.0121C18.0089 20.1208 17.1091 21.0205 16.0005 21.0205C14.8919 21.0205 13.9922 20.1208 13.9922 19.0121C13.9922 17.9036 14.8919 17.0038 16.0005 17.0038Z" stroke="#D548EC" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Cult;
