import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const BaseLogo: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="BaseLogo"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 11 11" fill="none" {...props}>
          <g clip-path="url(#clip0_30855_12523)">
            <path d="M5.49032 11C8.53336 11 11 8.53776 11 5.5C11 2.46224 8.53336 0 5.49032 0C2.60348 0 0.2354 2.21672 0 5.03756H7.28244V5.96244H0C0.2354 8.78328 2.60348 11 5.49032 11Z" fill="#202124"/>
          </g>
          <defs>
            <clipPath id="clip0_30855_12523">
              <rect width="11" height="11" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default BaseLogo;
