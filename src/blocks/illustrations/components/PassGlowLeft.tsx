import React, { FC } from "react";
import { IllustrationWrapper } from "../IllustrationWrapper";
import { IllustrationProps } from "../Illustrations.types";

const PassGlowLeft: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="PassGlowLeft"
      illustration={
        <svg xmlns="http://www.w3.org/2000/svg" width={restProps?.width ?? "341"} height={restProps?.height ?? "441"} viewBox="-100 -100 541 641" fill="none" {...props}>
          <g filter="url(#filter0_f_46918_2044)">
            <path d="M220.384 100C286.871 100 169.269 153.898 169.269 220.384C169.269 286.871 286.871 340.769 220.384 340.769C153.898 340.769 100 286.871 100 220.384C100 153.898 153.898 100 220.384 100Z" fill="#FFCF8A"/>
          </g>
          <defs>
            <filter id="filter0_f_46918_2044" x="-100" y="-100" width="541" height="641" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_46918_2044"/>
            </filter>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default PassGlowLeft;
