import * as React from "react";
import { Line } from "react-native-svg";

const RightTrunk: React.FC = () => {
  return (
    <>
      <Line x1="50" y1="50" x2="50" y2="100" stroke="red" strokeWidth="2" />
      <Line x1="49" y1="100" x2="65" y2="100" stroke="red" strokeWidth="2" />
    </>
  );
};

export default RightTrunk;
