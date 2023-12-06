import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MyListIcon = ({color}) => (
  <Svg width="26" height="24" viewBox="0 0 26 24" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      fill={color}
      d="M20.6666 0H0.666626V3.33333H20.6666V0ZM20.6666 6.66667H0.666626V10H20.6666V6.66667ZM0.666626 13.3333H14V16.6667H0.666626V13.3333ZM25.6666 18.3333L17.3333 23.3333V13.3333L25.6666 18.3333Z"
    />
  </Svg>
);

export default MyListIcon;
