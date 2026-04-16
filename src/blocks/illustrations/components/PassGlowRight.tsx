import React, { FC } from "react";
import { IllustrationWrapper } from "../IllustrationWrapper";
import { IllustrationProps } from "../Illustrations.types";

const PassGlowRight: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="PassGlowRight"
      illustration={
        <svg xmlns="http://www.w3.org/2000/svg" width={restProps?.width ?? "341"} height={restProps?.height ?? "441"} viewBox="0 0 341 441" fill="none" {...props}>
          <g filter="url(#filter0_f_46918_2058)">
            <path d="M120.364 340.769C53.8772 340.769 171.479 286.871 171.479 220.384C171.479 153.898 53.8772 100 120.364 100C186.85 100 240.748 153.898 240.748 220.384C240.748 286.871 186.85 340.769 120.364 340.769Z" fill="#FFB167"/>
          </g>
          <defs>
            <filter id="filter0_f_46918_2058" x="0" y="0" width="340.748" height="440.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_46918_2058"/>
            </filter>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default PassGlowRight;
