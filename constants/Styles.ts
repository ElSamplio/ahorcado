import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      marginTop: 15,
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
    hiddenWordGrid:{
      flexDirection: "column",
      gap: 5, 
      backgroundColor: 'white'
    }
  });