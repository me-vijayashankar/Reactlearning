export default function CounterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      const result = action.payload ? state + action.payload : state + 1;
      return result;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
