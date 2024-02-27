import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

export function AddIcon(props: SvgProps) {
  return (
    <Svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" {...props}>
      <Circle
        cx={12}
        cy={12}
        r={10}
        stroke={props?.color ?? '#1C274C'}
        strokeWidth={1.5}
      />
      <Path
        d="M15 12h-3m0 0H9m3 0V9m0 3v3"
        stroke={props?.color ?? '#1C274C'}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
