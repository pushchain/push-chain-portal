import { FC } from 'react';
import styled from 'styled-components';
import { BlocksSpaceType, TransformedHTMLAttributes } from '../Blocks.types';
import { getBlocksBorderRadius } from '../Blocks.utils';
import {
  IconColors,
  SurfaceColors,
  ThemeBorderRadius,
} from '../theme/Theme.types';

export type HoverableSVGProps = {
  /* Icon component */
  icon: React.ReactNode;
  /* Sets the initial color for SVG */
  defaultColor?: IconColors | string;
  /* Sets button as disabled */
  disabled?: boolean;
  /* Sets the hover color for SVG */
  hoverColor?: IconColors | string;
  /* Sets the initial background color for SVG */
  defaultBackground?: SurfaceColors | string;
  /* Sets the initial background color for SVG */
  hoverBackground?: SurfaceColors | string;
  /* Sets the padding for SVG button container */
  padding?: BlocksSpaceType;
  /* Sets the margin for SVG button container */
  margin?: BlocksSpaceType;
  /* Sets the margin for SVG button container */
  borderRadius?: ThemeBorderRadius;
} & TransformedHTMLAttributes<HTMLButtonElement>;

const isRawColor = (value?: string) =>
  value != null && (value.startsWith('#') || value.startsWith('rgb'));

const resolveColor = (value?: string, fallback?: string) =>
  isRawColor(value) ? value : `var(--${value || fallback})`;

const StyledButton = styled.button<Omit<HoverableSVGProps, 'icon'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--${(props) => props.padding || 'spacing-none'});
  margin: var(--${(props) => props.margin || 'spacing-none'});
  border-radius: ${(props) => getBlocksBorderRadius(props.borderRadius)};
  background-color: ${({ defaultBackground }) =>
    resolveColor(defaultBackground, 'surface-transparent')};
  color: ${({ defaultColor }) =>
    defaultColor ? resolveColor(defaultColor) : 'inherit'};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition:
    background-color 0.3s,
    color 0.3s;
  height: fit-content;
  &:hover {
    background-color: ${({ hoverBackground }) =>
      resolveColor(hoverBackground, 'surface-transparent')};
    color: ${({ hoverColor }) =>
      hoverColor ? resolveColor(hoverColor) : 'inherit'};
  }
  &:disabled {
    color: var(--icon-state-disabled);
  }
`;
const HoverableSVG: FC<HoverableSVGProps> = ({
  icon,
  defaultColor,
  disabled,
  hoverColor,
  defaultBackground,
  hoverBackground,
  padding,
  margin,
  borderRadius,
  ...props
}) => {
  return (
    <StyledButton
      defaultColor={defaultColor}
      hoverColor={hoverColor}
      defaultBackground={defaultBackground}
      disabled={disabled}
      hoverBackground={hoverBackground}
      padding={padding}
      margin={margin}
      borderRadius={borderRadius}
      {...props}
    >
      {icon}
    </StyledButton>
  );
};
export { HoverableSVG };
