import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditScreen from "../screens/EditScreen";
import ListByRegions from "../screens/ListByRegions";
import ListofRegions from "../screens/ListofRegions";
import NewScreen from "../screens/NewScreen";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Add Customer" component={NewScreen} />
        <Stack.Screen name="Edit Customer" component={EditScreen} />
        <Stack.Screen name="ListByRegions" component={ListByRegions} />
        <Stack.Screen name="ListRegions" component={ListofRegions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
