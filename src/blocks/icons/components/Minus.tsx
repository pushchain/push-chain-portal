import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const Minus: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Minus"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" viewBox="0 0 28 28" fill="none" {...props}>
          <path d="M24.2437 14.6186C24.4078 14.4545 24.5 14.2319 24.5 13.9999C24.5 13.7678 24.4078 13.5453 24.2437 13.3812C24.0796 13.2171 23.8571 13.1249 23.625 13.1249H14.875H13.125H4.375C4.14294 13.1249 3.92038 13.2171 3.75628 13.3812C3.59219 13.5453 3.5 13.7678 3.5 13.9999C3.5 14.2319 3.59219 14.4545 3.75628 14.6186C3.92038 14.7827 4.14294 14.8749 4.375 14.8749H13.125H14.875H23.625C23.8571 14.8749 24.0796 14.7827 24.2437 14.6186Z" fill="#B0B3B9"/>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Minus;
