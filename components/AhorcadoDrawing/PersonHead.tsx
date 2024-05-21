import * as React from "react";
import { Ellipse } from "react-native-svg";

const PersonHead: React.FC = () => {
  return (
    <>
      <Ellipse
        cx="110"
        cy="48"
        rx="10"
        ry="10"
        stroke="blue"
        strokeWidth="2"
        fill="yellow"
      />
    </>
  );
};

export default PersonHead;
