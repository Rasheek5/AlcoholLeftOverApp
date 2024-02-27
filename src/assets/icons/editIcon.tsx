import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function EditIcon(props: SvgProps) {
  return (
    <Svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.121 2.707a3 3 0 00-4.242 0l-1.68 1.68-7.906 7.906a1 1 0 00-.263.464l-1 4a1 1 0 001.213 1.213l4-1a1 1 0 00.464-.263l7.849-7.848 1.737-1.738a3 3 0 000-4.242l-.172-.172zm-2.828 1.414a1 1 0 011.414 0l.172.172a1 1 0 010 1.414l-1.017 1.017-1.555-1.617.986-.986zm-2.4 2.4l1.555 1.617-6.96 6.959-2.114.529.529-2.115 6.99-6.99zM4 8a1 1 0 011-1h5a1 1 0 100-2H5a3 3 0 00-3 3v11a3 3 0 003 3h11a3 3 0 003-3v-5a1 1 0 00-2 0v5a1 1 0 01-1 1H5a1 1 0 01-1-1V8z"
        fill="white"
      />
    </Svg>
  );
}
