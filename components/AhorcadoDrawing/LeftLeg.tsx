import * as React from "react";
import { Line } from "react-native-svg";

const LeftLeg: React.FC = () => {
  return (
    <>
      <Line x1="110" y1="90" x2="100" y2="100" stroke="blue" strokeWidth="2" />
      <Line x1="100" y1="100" x2="95" y2="100" stroke="blue" strokeWidth="2" />
    </>
  );
};

export default LeftLeg;
