import { View, Text, StyleSheet } from "react-native";

export default function HomeMap() {
  return (
    <View style={styles.container}>
      <Text>I'm a Map</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: "#a0abff",
    justifyContent: "center",
    alignItems: "center",
  },
});
