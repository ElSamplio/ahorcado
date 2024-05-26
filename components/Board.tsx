import { ScrollView } from "react-native";
import { Button, TextField, View } from "react-native-ui-lib";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { styles } from "@/constants/Styles";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import Tile from "./Tile";
import LettersGrid from "./LettersGrid";
import AhorcadoDrawing from "./AhorcadoDrawing/AhorcadoDrawing";
import { HiddenLetter } from "@/assets/data/FixedData";

interface BoardProps {
  selectedSubject: string;
  finishGame: () => void;
}

const Board: React.FC<BoardProps> = ({ selectedSubject, finishGame }) => {
  const { dataSet } = useFetchData(selectedSubject);
  const [hiddenWord, setHiddenWord] = useState<HiddenLetter[]>([]);
  const [failedAttempts, setFailedAttempts] = useState<number[]>([]);
  const [pressedLetters, setPressedLetters] = useState<string[]>([]);

  useEffect(() => {
    const item = dataSet
      ? dataSet[Math.floor(Math.random() * dataSet?.length)]
      : null;
    if (item) {
      const splittedItem = [...item.toUpperCase().split("")];
      setHiddenWord(
        splittedItem.map((elem: string) => ({ letter: elem, hidden: true }))
      );
    }
  }, [dataSet]);

  const handleFinishGame = () => {
    setFailedAttempts([]);
    setHiddenWord([]);
    finishGame();
    console.log('hola')
    console.log('mundo')
  };

  const checkLetter = (letter: string) => {
    const ltrs = [...pressedLetters];
    ltrs.push(letter);
    setPressedLetters([...ltrs]);
    const foundIndexes = hiddenWord
      .map((elem, index) => elem.letter === letter && index)
      .filter((elem) => elem !== false);
    if (foundIndexes.length > 0) {
      foundIndexes.forEach((elem) => {
        const word = [...hiddenWord];
        const elemIndex = Number(elem);
        word[elemIndex].hidden = false;
        setHiddenWord([...word]);
      });
    } else {
      const failed = [...failedAttempts];
      failed.push(failedAttempts.length);
      setFailedAttempts([...failed]);
    }
  };

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
