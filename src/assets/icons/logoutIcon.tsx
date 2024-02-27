import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function LogoutIcon(props: SvgProps) {
  return (
    <Svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 20a8 8 0 110-16"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M10 12h10m0 0l-3-3m3 3l-3 3"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
