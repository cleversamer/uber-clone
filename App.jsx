import { StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <>
      <StatusBar barStyle="default" />
      <HomeScreen />
    </>
  );
}
