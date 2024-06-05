import { ScrollView, Alert } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, Picker } from "react-native-ui-lib";
import { useState } from "react";
import { GAME_STATUS, subjectOptions } from "@/assets/data/FixedData";
import Board from "@/components/Board";
import { styles } from "@/constants/Styles";

const HomeScreen: React.FC = () => {
  const [subject, setSubject] = useState<string>();
  const [startGame, setStartGame] = useState<boolean>(false);

  const handleFinishGame = (status: GAME_STATUS, hiddenWord?: string) => {
    switch (status) {
      case GAME_STATUS.FAILED:
        Alert.alert("Perdiste! :(", `La palabra era ${hiddenWord}`, [
          {
            text: "OK",
            onPress: () => setStartGame(false),
          },
        ]);
        break;
      case GAME_STATUS.SUCCESS:
        Alert.alert("Ganaste! :)", `Encontraste la palabra ${hiddenWord}`, [
          {
            text: "OK",
            onPress: () => setStartGame(false),
          },
        ]);
      default:
        setStartGame(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Juego del ahorcado</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Elige el tema</ThemedText>
        <Picker
          value={subject}
          placeholder="Elige un tema"
          onChange={(item) => setSubject(item?.toString())}
          style={{ backgroundColor: "white" }}
        >
          {subjectOptions.map((option) => (
            <Picker.Item
              key={option.key}
              label={option.value}
              value={option.key}
              disabled={startGame}
            />
          ))}
        </Picker>
        {!startGame && (
          <Button
            label={"Jugar"}
            size={Button.sizes.medium}
            disabled={!subject}
            onPress={() => setStartGame(true)}
          />
        )}
        {startGame && (
          <Board
            selectedSubject={subject || ""}
            finishGame={handleFinishGame}
          />
        )}
      </ThemedView>
    </ScrollView>
  );
};

export default HomeScreen;
