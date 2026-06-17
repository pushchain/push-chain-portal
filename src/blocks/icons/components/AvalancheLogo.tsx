import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const AvalancheLogo: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="AvalancheLogo"
      icon={
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8.65899 6.01196C8.83556 5.71118 9.27408 5.71118 9.44873 6.01196L11.3251 9.21753C11.5017 9.51831 11.2805 9.89278 10.9293 9.89278H7.17651C6.82526 9.89278 6.60602 9.51831 6.78066 9.21753L8.65702 6.01196H8.65899Z" fill="#202124"/>
        <path d="M7.52564 3.87744C7.69638 3.57861 7.69638 3.20993 7.52564 2.90917L5.98687 0.225573C5.8142 -0.0751911 5.38343 -0.0751911 5.21072 0.225573L0.0608526 9.21554C-0.111845 9.51627 0.103542 9.89272 0.448936 9.89272H3.5245C3.86795 9.89272 4.18424 9.70839 4.35499 9.40959L7.52372 3.87744H7.52564Z" fill="#202124"/>
        </svg>
      }
      {...restProps}
    />
  );
};

export default AvalancheLogo;
