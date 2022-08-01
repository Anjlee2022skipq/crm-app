import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import PrimaryButton from "../../../../components/PrimaryButton";

function RegionItem({ item }) {
  const { navigate } = useNavigation();
  return (
    <View>
      <PrimaryButton
        text={item.name}
        onPress={() => navigate("ListByRegions", { regionId: item.id })}
      />
    </View>
  );
}

export default RegionItem;
