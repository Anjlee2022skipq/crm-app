import { useRoute } from "@react-navigation/native";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import CustomerCard from "../../../../components/CustomerCard";
import { useCustomersListByRegion } from "../../hooks";

const CustomerList = () => {
  const { params } = useRoute();
  const region = useSelector((s) =>
    s.customer.list.regions.find((r) => r.id === params.regionId)
  );
  const customerList = useCustomersListByRegion(region);

  return (
    <View>
      {customerList && customerList.length > 0 ? (
        <View>
          <Text>Viewing Customers in {region.name} Region </Text>
          <FlatList
            data={customerList}
            renderItem={(item) => <CustomerCard customer={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <View>
          <Text>Sorry! No Customers Found in this Region</Text>
        </View>
      )}
    </View>
  );
};

export default CustomerList;
