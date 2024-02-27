import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

export function SeacrhIcon(props: SvgProps) {
  return (
    <Svg
      fill="none"
      height={24}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      color={'black'}
      width={24}
      {...props}>
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21L16.65 16.65" />
    </Svg>
  );
}
