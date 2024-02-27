import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function ExpiryIcon(props: SvgProps) {
  return (
    <Svg width="20px" height="20px" viewBox="0 0 16 16" {...props}>
      <Path d="M12.144 1.157a8 8 0 10-.709 14.068 1 1 0 00-.858-1.806 6 6 0 112.86-7.955 1 1 0 001.814-.845 8 8 0 00-3.107-3.462z" />
      <Path d="M7 5a1 1 0 112 0v4a1 1 0 01-.553.894l-2 1a1 1 0 11-.894-1.788L7 8.382V5zm9 10a1 1 0 11-2 0 1 1 0 012 0zm-1-7a1 1 0 00-1 1v3a1 1 0 102 0V9a1 1 0 00-1-1z" />
    </Svg>
  );
}
