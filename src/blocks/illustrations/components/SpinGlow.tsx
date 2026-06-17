import React, { FC } from "react";
import { IllustrationWrapper } from "../IllustrationWrapper";
import { IllustrationProps } from "../Illustrations.types";

const SpinGlow: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="SpinGlow"
      illustration={
        <svg xmlns="http://www.w3.org/2000/svg" width={restProps?.width ?? "452"} height={restProps?.height ?? "348"} viewBox="0 0 452 348" fill="none" {...props}>
          <g filter="url(#filter0_f_46918_2110)" style={{ mixBlendMode: 'plus-lighter' }}>
            <path d="M352 226C352 295.588 295.588 172.5 226 172.5C156.412 172.5 100 295.588 100 226C100 156.412 156.412 100 226 100C295.588 100 352 156.412 352 226Z" fill="#FF67F5"/>
          </g>
          <defs>
            <filter id="filter0_f_46918_2110" x="0" y="0" width="452" height="347.314" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_46918_2110"/>
            </filter>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default SpinGlow;
