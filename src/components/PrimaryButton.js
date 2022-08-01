import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

function PrimaryButton({ text, onPress, disabled = false }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.BtnContainer}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.BtnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  BtnContainer: {
    flex: 1,
    width: 200,
    height: 50,
    padding: 10,
    margin: 15,
    alignSelf: "center",
    backgroundColor: "#3b5998",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  BtnText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default PrimaryButton;
