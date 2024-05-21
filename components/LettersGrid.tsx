import { View } from "react-native";
import { alphabet } from "@/assets/data/FixedData";
import { useMemo } from "react";
import { Button } from "react-native";

interface LettersGridProps {
  onLetterPress: (letter: string) => void;
  pressedLetters: string[];
}

const LettersGrid: React.FC<LettersGridProps> = ({
  onLetterPress,
  pressedLetters,
}) => {
  const COLUMNS = 9;
  const alphabetGrid = useMemo(() => {
    const grid: string[][] = [];
    let row: string[] = [];
    alphabet.forEach((elem, index) => {
      row.push(elem);
      if ((index + 1) % COLUMNS === 0) {
        grid.push([...row]);
        row = [];
      }
    });
    grid.push([...row]);
    return grid;
  }, []);
  return (
    <>
      {alphabetGrid.map((elem, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            marginBottom: 10,
          }}
        >
          {elem.map((letter, index) => (
            <View key={index} style={{ margin: 5 }}>
              <Button
                title={letter}
                onPress={() => onLetterPress(letter)}
                disabled={pressedLetters.includes(letter)}
              />
            </View>
          ))}
        </View>
      ))}
    </>
  );
};

export default LettersGrid;
