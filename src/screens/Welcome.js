import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {
  useClearCustomers,
  useLoadCustomers,
} from "../features/customer/hooks";

function Welcome() {
  const customers = useLoadCustomers();
  const { onClear } = useClearCustomers();
  const { navigate } = useNavigation();

  const handleClearStorage = () => {
    onClear();
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.text}>Welcome to customer Management App</Text>
        <PrimaryButton
          text="Click to Continue"
          onPress={() => {
            navigate("ListRegions");
          }}
        />
        <PrimaryButton text="Clear Storage" onPress={handleClearStorage} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {
    marginVertical: 7,
    marginHorizontal: 4,
    color: "#263036",
    fontSize: 18,
  },
});
export default Welcome;
