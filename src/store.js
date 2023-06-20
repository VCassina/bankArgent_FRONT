import { createStore } from "redux";

// Declaration of global states.
const loginBehavior = {
  isLoggedUser: false,
};

// Declaration of actions.
export const loginAction = {
  type: "LOGIN",
};

// Is a function to being called later. I choose to make an actionCreator for this.
export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};

// Declaration of the reducer.
const loginReducer = (state = loginBehavior, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedUser: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedUser: false,
      };
    default:
      return state;
  }
};

// Declaration of the store.
const store = createStore(loginReducer);

export default store;
