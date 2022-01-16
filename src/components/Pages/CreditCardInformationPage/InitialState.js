const initialState = {
  creditCardNumber: {
    label: "Card Number",
    name: "cardNumber",
    value: "",
    error: "",
    validator: (value) => true,
    mask: (value) => value,
  },
};

export { initialState };
