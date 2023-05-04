import { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function DestinationSearchScreen() {
  const [context, setContext] = useState({
    originPlace: null,
    destinationPlace: null,
  });

  const handleChange = (key, value) => {
    setContext({ ...context, [key]: value });

    const { originPlace, destinationPlace } = context;
    if (originPlace && destinationPlace) {
      // TODO: redirect to the next screen
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            handleChange("originPlace", { data, details });
          }}
          query={{
            key: "AIzaSyDVLeIyezNs3GmoqbQrKd3J1kWxt-ThQUc",
            language: "en",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Search"
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            handleChange("destinationPlace", { data, details });
          }}
          query={{
            key: "AIzaSyDVLeIyezNs3GmoqbQrKd3J1kWxt-ThQUc",
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
}

// AIzaSyDVLeIyezNs3GmoqbQrKd3J1kWxt-ThQUc

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "100%",
  },
  textInput: {
    padding: 10,
    backgroundColor: "#eee",
    marginVertical: 5,
  },
});
