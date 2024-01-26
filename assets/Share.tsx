import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

export const Share = () => {
  return (
    <Svg width={25} height={25} viewBox="0 0 18 17" fill="none">
      <G
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.577 8.865S-1.403 6.801 2.065 4.8C4.992 3.109 15.08.204 16.488.955c.75 1.41-2.154 11.496-3.844 14.423-2.002 3.468-4.067-6.513-4.067-6.513z"
        />
        <Path d="M8.577 8.865l7.91-7.91" />
      </G>
    </Svg>
  );
};
