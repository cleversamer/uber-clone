import { StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import DestinationSearchScreen from "./src/screens/DestinationSearchScreen";

export default function App() {
  return (
    <>
      <StatusBar barStyle="default" />
      {/* <HomeScreen /> */}
      <DestinationSearchScreen />
    </>
  );
}
