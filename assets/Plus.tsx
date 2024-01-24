import Svg, { Path } from "react-native-svg";

export const Plus = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 16 16" fill="none">
      <Path
        d="M12.666 7.333h-4v-4H7.333v4h-4v1.334h4v4h1.333v-4h4V7.333z"
        fill="#fff"
      />
    </Svg>
  );
};

export default Plus;
