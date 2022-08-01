import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import RegionList from "../features/customer/components/RegionList";

function ListofRegions() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <PrimaryButton
          text="Create Customer"
          onPress={() => {
            navigate("Add Customer");
          }}
        />
        <Text>List of Regions</Text>
        <Text>Select a Region: </Text>
        <RegionList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListofRegions;
