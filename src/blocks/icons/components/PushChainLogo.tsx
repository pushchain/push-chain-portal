import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const PushChainLogo: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="PushChainLogo"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" viewBox="0 0 10 13" fill="none" {...props}>
          <g clip-path="url(#clip0_27355_7648)">
            <path d="M0.780206 12.5C0.465452 12.5 0.209961 12.2289 0.209961 11.8964V4.31552C0.209961 3.98234 0.465452 3.7119 0.780206 3.7119H2.56667C2.93015 3.7119 3.22515 3.39963 3.22515 3.01487V1.10362C3.22515 0.771143 3.48064 0.5 3.79539 0.5H8.95525C9.42672 0.5 9.81062 0.906366 9.81062 1.40544V5.94726C9.81062 6.27974 9.55513 6.55088 9.24037 6.55088H7.45391C7.09043 6.55088 6.79543 6.86315 6.79543 7.24791V9.13894C6.79543 9.47142 6.53994 9.74256 6.22519 9.74256H3.88363C3.52015 9.74256 3.22515 10.0548 3.22515 10.4396V11.8971C3.22515 12.2296 2.96966 12.5007 2.6549 12.5007H0.780206V12.5ZM3.88363 3.69168C3.52015 3.69168 3.22515 4.00395 3.22515 4.38871V5.85386C3.22515 6.23861 3.52015 6.55088 3.88363 6.55088H6.13695C6.50043 6.55088 6.79543 6.23861 6.79543 5.85386V4.38871C6.79543 4.00395 6.50043 3.69168 6.13695 3.69168H3.88363Z" fill="currentColor"/>
          </g>
          <defs>
            <clipPath id="clip0_27355_7648">
              <rect width="9.6" height="12" fill="white" transform="translate(0.209961 0.5)"/>
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default PushChainLogo;
