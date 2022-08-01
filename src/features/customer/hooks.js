import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";

export const useUpdateFields = (customerId = null) => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.customer.form.fields);

  useEffect(() => {
    if (customerId !== null) {
      dispatch(actions.setForm(customerId));
    } else if (customerId === null) {
      dispatch(actions.resetForm());
    }
  }, [customerId]);

  return {
    fields,
    setFormField: (field) => (value) => {
      console.log(`Updating field ${field} to ${value}`);

      return dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching CREATE_CUSTOMER action");
      dispatch(actions.createCustomer());
    },
  };
};

export const useClearCustomers = () => {
  const dispatch = useDispatch();

  return {
    onClear: () => {
      console.log("Dispatching CLEAR_CUSTOMERs action");
      dispatch(actions.clearCustomers());
    },
  };
};

export const useLoadCustomers = () => {
  const dispatch = useDispatch();
  return dispatch(actions.loadCustomers);
};
export const useCustomersListByRegion = (region) => {
  const customers = useSelector((state) => state.customer.list.customers);
  const customersList = customers.filter((c) => c.region === region.name);
  return customersList;
};

export const useEditCustomer = (customerId) => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching EDIT_CUSTOMER action");
      dispatch(actions.editCustomer(customerId));
    },
  };
};
