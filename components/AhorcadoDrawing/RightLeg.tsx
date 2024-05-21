import * as React from "react";
import { Line } from "react-native-svg";

const RightLeg: React.FC = () => {
  return (
    <>
      <Line x1="110" y1="90" x2="120" y2="100" stroke="blue" strokeWidth="2" />
      <Line x1="120" y1="100" x2="125" y2="100" stroke="blue" strokeWidth="2" />
    </>
  );
};

export default RightLeg;
