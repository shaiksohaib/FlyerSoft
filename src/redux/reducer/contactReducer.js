const initialState = [
    {
      id: 0,
      name: "Sohaib",
      date: "Tuesday July 20 2021",
      number: 123456789
    },
  ];
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK":
        state = [...state, action.payload];
        return state;
      default:
        return state;
    }
  };
  
  export default contactReducer;
  