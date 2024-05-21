import * as React from "react";
import { Line } from "react-native-svg";

const LeftTrunk: React.FC = () => {
  return (
    <>
      <Line x1="20" y1="50" x2="20" y2="100" stroke="red" strokeWidth="2" />
      <Line x1="5" y1="100" x2="21" y2="100" stroke="red" strokeWidth="2" />
    </>
  );
};

export default LeftTrunk;
