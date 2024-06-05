import Svg from "react-native-svg";
import elements from "./elements";

interface AhorcadoDrawingProps {
  failures: number[];
}

const AhorcadoDrawing: React.FC<AhorcadoDrawingProps> = ({ failures }) => {
  
  return (
    <Svg height="200" width="100%" viewBox="10 10 100 100">
      {failures.map((elem) => elements[elem])}
    </Svg>
  );
};

export default AhorcadoDrawing;
