import { View, Text } from "react-native";
import Form from "../Form";
import { useNewCustomer } from "../../hooks";

const New = () => {
  const { onSubmit } = useNewCustomer();
  return (
    <View>
      <Form onSubmit={onSubmit} />
    </View>
  );
};
export default New;
