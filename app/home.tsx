import { StyleSheet, ScrollView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Picker } from "react-native-ui-lib";
import { useState } from "react";
import { subjectOptions } from "@/assets/data/FixedData";

const HomeScreen: React.FC = () => {
  const [subject, setSubject] = useState<string>();

  const getSelectedSubject = (value: string = "") => {
    console.log(value);
    const found = subjectOptions.filter((elem) => elem.key === value);
    console.log({ found });
    return "lugares";
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
          value={getSelectedSubject(subject)}
          placeholder="Elige un tema"
          onChange={(item) => {
            console.log(item);
            setSubject(item?.toString());
          }}
          style={{ backgroundColor: "white" }}
        >
          {subjectOptions.map((option) => (
            <Picker.Item
              key={option.key}
              label={option.value}
              value={option.key}
            />
          ))}
        </Picker>
      </ThemedView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
