import * as React from "react";
import { Line } from "react-native-svg";

const Arms: React.FC = () => {
  return (
    <>
      <Line x1="100" y1="70" x2="120" y2="70" stroke="blue" strokeWidth="2" />
      <Line x1="100" y1="70" x2="95" y2="75" stroke="blue" strokeWidth="1" />
      <Line x1="100" y1="70" x2="95" y2="65" stroke="blue" strokeWidth="1" />
      <Line x1="100" y1="70" x2="95" y2="70" stroke="blue" strokeWidth="1" />

      <Line x1="120" y1="70" x2="125" y2="75" stroke="blue" strokeWidth="1" />
      <Line x1="120" y1="70" x2="125" y2="65" stroke="blue" strokeWidth="1" />
      <Line x1="120" y1="70" x2="125" y2="70" stroke="blue" strokeWidth="1" />
    </>
  );
};

export default Arms;
