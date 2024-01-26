import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

export const Save = () => {
  return (
    <Svg width={25} height={25} viewBox="0 0 14 19" fill="none">
      <G
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M4.12 7.182h5.712" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.975 1.583c-5.322 0-6.221.777-6.221 7.025 0 6.994-.131 8.809 1.199 8.809 1.329 0 3.5-3.07 5.022-3.07 1.523 0 3.694 3.07 5.023 3.07 1.33 0 1.199-1.815 1.199-8.81 0-6.247-.9-7.023-6.222-7.023z"
        />
      </G>
    </Svg>
  );
};
