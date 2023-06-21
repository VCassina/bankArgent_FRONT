import { createStore } from "redux";

// Declaration of global states.
const loginBehavior = {
  isLoggedUser: false,
  loggedUserToken: "TOKEN EXAMPLE",
};

// Declaration of actions.
export const loginAction = {
  type: "LOGIN",
};

export const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};

export const setUserToken = (token) => {
  return {
    type: "SET_USER_TOKEN",
    payload: token,
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
    case "SET_USER_TOKEN":
      return {
        ...state,
        loggedUserToken: action.payload,
      };
    default:
      return state;
  }
};

// Declaration of the store.
const store = createStore(loginReducer);

export default store;
