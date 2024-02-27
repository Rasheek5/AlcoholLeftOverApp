import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function OptionIcon(props: SvgProps) {
  return (
    <Svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M10 12a2 2 0 104 0 2 2 0 00-4 0zm0-6a2 2 0 104 0 2 2 0 00-4 0zm0 12a2 2 0 104 0 2 2 0 00-4 0z"
        fill="#0D0D0D"
      />
    </Svg>
  );
}
