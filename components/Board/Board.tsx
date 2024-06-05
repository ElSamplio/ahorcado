import { ScrollView } from "react-native";
import { Button, View } from "react-native-ui-lib";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { styles } from "@/constants/Styles";
import Tile from "../Tile";
import LettersGrid from "../LettersGrid";
import AhorcadoDrawing from "../AhorcadoDrawing/AhorcadoDrawing";
import {
  GAME_STATUS,
} from "@/assets/data/FixedData";
import useBoard from "./hooks/useBoard";

interface BoardProps {
  selectedSubject: string;
  finishGame: (status: GAME_STATUS, hiddenWord?: string) => void;
}

const Board: React.FC<BoardProps> = ({ selectedSubject, finishGame }) => {
  const {
    hiddenWord,
    failedAttempts,
    pressedLetters,
    handleFinishGame,
    checkLetter,
  } = useBoard(selectedSubject, finishGame);

  return (
    <ScrollView>
      <ThemedView style={styles.hiddenWordGrid}>
        {hiddenWord?.map((item, index) => (
          <Tile
            key={index}
            isEmptySpace={item.letter === " "}
            value={item.hidden ? "" : item.letter}
          />
        ))}
      </ThemedView>
      <View style={{ alignItems: "center" }}>
        <ThemedText type="subtitle">Elige tu letra</ThemedText>
        <LettersGrid
          pressedLetters={pressedLetters}
          onLetterPress={checkLetter}
        />
      </View>
      <AhorcadoDrawing failures={failedAttempts} />
      <Button label="Terminar" onPress={handleFinishGame} />
    </ScrollView>
  );
};

export default Board;
