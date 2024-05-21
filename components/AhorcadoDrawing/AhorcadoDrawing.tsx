import LeftTrunk from "./LeftTrunk";
import Svg from "react-native-svg";
import RightTrunk from "./RightTunk";
import TreeCrown from "./TreeCrown";
import TreeBranch from "./TreeBranch";
import PersonHead from "./PersonHead";
import PersonBody from "./PersonBody";
import RightLeg from "./RightLeg";
import LeftLeg from "./LeftLeg";
import Arms from "./Arms";
import DeadFace from "./DeadFace";

interface AhorcadoDrawingProps {
  failures: number[];
}

const AhorcadoDrawing: React.FC<AhorcadoDrawingProps> = ({ failures }) => {
  const elements: React.ReactNode[] = [
    <LeftTrunk key={1} />,
    <RightTrunk key={2} />,
    <TreeCrown key={3} />,
    <TreeBranch key={4} />,
    <PersonHead key={5} />,
    <PersonBody key={6} />,
    <RightLeg key={7} />,
    <LeftLeg key={8} />,
    <Arms key={9} />,
    <DeadFace key={10} />,
  ];
  return (
    <Svg height="200" width="100%" viewBox="10 10 100 100">
      {failures.map((elem) => elements[elem])}
    </Svg>
  );
};

export default AhorcadoDrawing;
