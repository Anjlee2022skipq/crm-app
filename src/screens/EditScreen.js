import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Edit from "../features/customer/components/Edit";

function EditScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Edit />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EditScreen;
