import Svg, {Path} from 'react-native-svg';

const HomeIcon = ({color}) => (
  <Svg width="28" height="23" viewBox="0 0 28 23" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.66675 12H0.666748L14.0001 0L27.3334 12H23.3334V22.6667H15.3334V14.6667H12.6667V22.6667H4.66675V12ZM20.6667 9.58667L14.0001 3.58667L7.33341 9.58667V20H10.0001V12H18.0001V20H20.6667V9.58667Z"
      fill={color}
    />
  </Svg>
);

export default HomeIcon;
