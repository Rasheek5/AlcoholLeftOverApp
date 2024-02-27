import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function NextIcon(props: SvgProps) {
  return (
    <Svg fill="#000" height="20px" width="20px" viewBox="0 0 24 24" {...props}>
      <Path d="M6.8 23.7L5.4 22.3 15.7 12 5.4 1.7 6.8 0.3 18.5 12z" />
    </Svg>
  );
}
