import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import RegionItem from "./RegionItem";

const RegionList = () => {
  const regions = useSelector((state) => state.customer.list.regions);

  return (
    <View style={styles.constainer}>
      <FlatList
        vertical
        data={regions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RegionItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    marginTop: 9,
    marginBottom: 30,
  },
});
export default RegionList;
