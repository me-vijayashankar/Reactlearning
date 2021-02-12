const CounterReducer = (state = 1, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "IncrementByVal":
      return state + action.payload.value;
    default:
      return state;
  }
};
export default CounterReducer;
