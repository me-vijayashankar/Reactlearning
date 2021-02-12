const AuthReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return false;
  }
};

export default AuthReducer;
