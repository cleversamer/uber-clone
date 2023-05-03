import { View, Text, StyleSheet } from "react-native";

export default function CovidMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>

      <Text style={styles.text}>
        Upgrading this package often requires the font files linked to your
        projects to be updated as well. If the automatic linking works for you,
        running this again should update the fonts.
      </Text>

      <Text style={styles.learnMore}>Learn more.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1065E9",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    color: "#bed9ff",
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
