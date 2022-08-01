import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import React from "react";
import { useEditCustomer } from "../../hooks";
import Form from "../Form";

const Edit = () => {
  const { params } = useRoute();
  const { customerId } = params;
  const { onSubmit } = useEditCustomer(customerId);
  return (
    <View>
      <Form onSubmit={onSubmit} customerId={customerId} />
    </View>
  );
};
export default Edit;
