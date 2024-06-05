import LeftTrunk from "./LeftTrunk";
import RightTrunk from "./RightTunk";
import TreeCrown from "./TreeCrown";
import TreeBranch from "./TreeBranch";
import PersonHead from "./PersonHead";
import PersonBody from "./PersonBody";
import RightLeg from "./RightLeg";
import LeftLeg from "./LeftLeg";
import Arms from "./Arms";
import DeadFace from "./DeadFace";

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

export default elements;
