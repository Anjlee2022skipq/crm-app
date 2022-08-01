import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import PrimaryButton from "../../../components/PrimaryButton";
import SelectDropdown from "react-native-select-dropdown";
import { useNavigation } from "@react-navigation/native";
import { useUpdateFields } from "../hooks";

function Form({ onSubmit, customerId = null }) {
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateFields(customerId);
  const { firstName, lastName, region, active } = fields;
  const regions = useSelector((s) => s.customer.list.regions);
  const regionArr = regions.map((r) => r.name);

  const handleSubmit = () => {
    onSubmit();
    navigate("Welcome");
  };
  return (
    <View>
      <Text style={styles.text}>Enter First Name:</Text>
      <TextInput
        key={"firstName"}
        placeholder={firstName || "First Name"}
        value={firstName || ""}
        style={styles.input}
        onChangeText={setFormField("firstName")}
      />
      <Text style={styles.text}>Enter Last Name:</Text>
      <TextInput
        key={"lastName"}
        placeholder={lastName || "Last Name"}
        value={lastName || ""}
        style={styles.input}
        onChangeText={setFormField("lastName")}
      />
      <Text style={styles.text}>Active:</Text>
      <SelectDropdown
        data={["Active", "Inactive"]}
        defaultButtonText={active || "Select active status"}
        onSelect={setFormField("active")}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={{
          alignSelf: "stretch",
          justifyContent: "center",
          margin: 5,
          height: 30,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#3b5998",
        }}
        rowStyle={{
          alignSelf: "stretch",
          backgroundColor: "#b7c8ed",
        }}
        rowTextStyle={{
          alignSelf: "stretch",
          fontSize: 15,
          textAlign: "center",
          marginVertical: 5,
        }}
      />
      <View style={{ height: 50 }}></View>
      <Text style={styles.text}>Region:</Text>

      <SelectDropdown
        data={regionArr}
        defaultButtonText={region || "Select Region"}
        onSelect={setFormField("region")}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={{
          alignSelf: "stretch",
          justifyContent: "center",
          margin: 5,
          height: 30,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#3b5998",
        }}
        rowStyle={{
          alignSelf: "stretch",
          backgroundColor: "#b7c8ed",
        }}
        rowTextStyle={{
          alignSelf: "stretch",
          alignItems: "center",
          fontSize: 15,
          textAlign: "center",
          marginVertical: 5,
        }}
      />
      <View style={{ height: 150 }}></View>
      <PrimaryButton
        onPress={handleSubmit}
        text="Submit"
        disabled={firstName === null || lastName === null || region === null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#3b8989",
    borderRadius: 10,
    margin: 5,
    padding: 15,
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 5,
    alignContent: "center",
    color: "#3b5998",
  },
});

export default Form;
