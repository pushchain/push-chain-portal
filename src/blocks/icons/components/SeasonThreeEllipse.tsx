import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const SeasonThreeEllipse: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName='SeasonThreeEllipse'
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" viewBox="0 0 4 4" fill="none" {...props}>
          <circle cx="2" cy="2" r="2" fill="currentColor"/>
        </svg>
      }
      {...restProps}
    />
  );
};

export default SeasonThreeEllipse;
