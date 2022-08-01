import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import New from "../features/customer/components/New";

function NewScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <New />
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewScreen;
