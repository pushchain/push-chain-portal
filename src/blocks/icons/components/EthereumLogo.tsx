import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const EthereumLogo: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName='EthereumLogo'
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" viewBox="0 0 8 14" fill="none" {...props}>
          <path d="M-0.00958264 6.83762L3.98891 0.753326V9.00437L-0.00958264 6.83762Z" fill="currentColor"/>
          <path d="M3.98891 0.753326L7.98802 6.83762L3.98891 9.00437V0.753326Z" fill="currentColor"/>
          <path d="M3.9885 10.2459V13.2467L-0.0100098 8.07916L3.9885 10.2459Z" fill="currentColor"/>
          <path d="M3.9885 13.2467V10.2459L7.99 8.07916L3.9885 13.2467Z" fill="currentColor"/>
        </svg>
      }
      {...restProps}
    />
  );
};

export default EthereumLogo;
