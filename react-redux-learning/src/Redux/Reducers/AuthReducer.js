export default function AuthReducer(state = false, action) {
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    case "INCREMENT":
      return !state;
    default:
      return false;
  }
}
