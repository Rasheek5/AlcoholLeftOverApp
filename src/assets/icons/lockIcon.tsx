import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export function LockIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M13.333 10H6.667m6.666 0H14.5a.5.5 0 01.5.5v5.667a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V10.5a.5.5 0 01.5-.5h7.833zm0 0V6.667c0-1.111-.666-3.334-3.333-3.334-2.667 0-3.333 2.223-3.333 3.334V10h6.666z"
        stroke="#252B5C"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
