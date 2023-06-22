import { createStore } from "redux";

// Declaration of global states.
const loginBehavior = {
  loggedUserToken: "",
  loggedUserTokenStatus: false,
  informationUsername: "",
  informationFirstname: "",
  informationLastname: "",
};

// Declaration of actions.
export const setUserToken = (token) => {
  return {
    type: "SET_USER_TOKEN",
    payload: token,
  };
};
export const resetUserToken = () => ({
  type: "RESET_USER_TOKEN",
});
export const setLoggedUserTokenStatus = () => {
  return {
    type: "SET_LOGGED_USER_TOKEN_STATUS",
  };
};
export const resetLoggedUserTokenStatus = () => {
  return {
    type: "RESET_LOGGED_USER_TOKEN_STATUS",
  };
};
export const setUserInformation = (username, firstname, lastname) => {
  return {
    type: "SET_USER_INFORMATION",
    payload: {
      username,
      firstname,
      lastname,
    },
  };
};

// Declaration of the reducer.
const loginReducer = (state = loginBehavior, action) => {
  switch (action.type) {
    case "SET_USER_TOKEN":
      return {
        ...state,
        loggedUserToken: action.payload,
      };
    case "RESET_USER_TOKEN":
      return {
        ...state,
        loggedUserToken: "",
      };
      case "SET_LOGGED_USER_TOKEN_STATUS":
        return {
          ...state,
          loggedUserTokenStatus: true,
        };
      case "RESET_LOGGED_USER_TOKEN_STATUS":
        return {
          ...state,
          loggedUserTokenStatus: false,
        };
        case "SET_USER_INFORMATION":
          return {
            ...state,
            informationUsername: action.payload.username,
            informationFirstname: action.payload.firstname,
            informationLastname: action.payload.lastname,
          };
    default:
      return state;
  }
};

// Declaration of the store.
const store = createStore(loginReducer);

export default store;
