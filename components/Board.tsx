import { ScrollView } from "react-native";
import { Button, TextField, View } from "react-native-ui-lib";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { styles } from "@/constants/Styles";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import Tile from "./Tile";

interface BoardProps {
  selectedSubject: string;
  finishGame: () => void;
}

const Board: React.FC<BoardProps> = ({ selectedSubject, finishGame }) => {
  const { dataSet } = useFetchData(selectedSubject);
  const [hiddenWord, setHiddenWord] = useState<string[]>([]);

  useEffect(() => {
    const item = dataSet
      ? dataSet[Math.floor(Math.random() * dataSet?.length)]
      : null;
    if (item) {
      console.log(item);
      setHiddenWord([...item.split("")]);
    }
  }, [dataSet]);

  return (
    <ScrollView>
      <ThemedView style={styles.hiddenWordGrid}>
        {hiddenWord?.map((item, index) => (
          <Tile key={index} isEmptySpace={item === " "} value={item} />
        ))}
      </ThemedView>
      <View style={{ alignItems: "center" }}>
        <ThemedText type="subtitle">Elige tu letra</ThemedText>
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
          <TextField
            style={{
              backgroundColor: "white",
              width: 25,
              marginTop: 5,
              marginBottom: 15,
            }}
            maxLength={1}
          />
          <Button label="->" style={{ maxWidth: 20 }} />
        </View>
      </View>
      <Button label="Terminar" onPress={finishGame} />
    </ScrollView>
  );
};

export default Board;
