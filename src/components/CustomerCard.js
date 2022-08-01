import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function CustomerCard({ customer }) {
  const { navigate } = useNavigation();
  const { id, firstName, lastName, active, region } = customer.item;
  return (
    <View style={styles.constainer}>
      <TouchableOpacity
        onPress={() => navigate("Edit Customer", { customerId: id })}
      >
        <Text>Id: {id}</Text>
        <Text>FirstName: {firstName}</Text>
        <Text>LastName: {lastName}</Text>
        <Text>Region: {region}</Text>
        <Text>Active: {active}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  constainer: {
    justifyContent: "flex-start",
    borderColor: "#000",
    borderWidth: 1,
    padding: 3,
    margin: 10,
  },
});

export default CustomerCard;
