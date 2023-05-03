import { useState } from "react";
import { View, StyleSheet, TextInput, SafeAreaView } from "react-native";

export default function DestinationSearchScreen() {
  const [context, setContext] = useState({ from: "", to: "" });

  const handleChange = (key) => (text) =>
    setContext({ ...context, [key]: text });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="From"
          value={context.from}
          onChangeText={handleChange("from")}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Where to?"
          value={context.to}
          onChangeText={handleChange("to")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    padding: 10,
    backgroundColor: "#eee",
    marginVertical: 5,
  },
});
