import * as React from "react";
import { Line, Polyline } from "react-native-svg";

const DeadFace: React.FC = () => {
  return (
    <>
      <Line x1="105" y1="43" x2="109" y2="48" stroke="blue" strokeWidth="1" />
      <Line x1="109" y1="43" x2="105" y2="48" stroke="blue" strokeWidth="1" />

      <Line x1="112" y1="43" x2="116" y2="48" stroke="blue" strokeWidth="1" />
      <Line x1="116" y1="43" x2="112" y2="48" stroke="blue" strokeWidth="1" />

      <Polyline
        points="104,54 106,50 106,50 108,54 108,54 110,50 110,50 112,54 112,54 114,50 114,50 116,54"
        fill="none"
        stroke="blue"
        strokeWidth="1"
      />
    </>
  );
};

export default DeadFace;
