import { Svg, Path, Circle } from "react-native-svg";

export const Search = ({ color }: any) => {
  return (
    <Svg width="35" height="35" viewBox="0 0 28 28" fill="none">
      <Circle
        cx="13.7279"
        cy="13.7276"
        r="10.4867"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.0215 21.5659L25.1329 25.6666"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
