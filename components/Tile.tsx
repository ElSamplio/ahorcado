import { Text, View } from "react-native-ui-lib";

interface TileProps {
  isEmptySpace?: boolean;
  value?: string;
}

const Tile: React.FC<TileProps> = ({ isEmptySpace, value }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: 25,
        height: 35,
        borderColor: !isEmptySpace ? "black" : "#C0C0C0",
        borderWidth: 1,
        borderStyle: "solid",
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 5,
        paddingLeft: 5,
      }}
    >
      <Text>{value}</Text>
    </View>
  );
};

export default Tile;
