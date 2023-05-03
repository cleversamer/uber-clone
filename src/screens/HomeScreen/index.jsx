import { View, StyleSheet } from "react-native";
import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage";
import HomeSearch from "../../components/HomeSearch";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
