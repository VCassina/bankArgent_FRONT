import { setLoggedUserTokenStatus } from "../store";

async function callAPI(email, password, dispatch) {
  try {
    const response = await fetch("http://127.0.0.1:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Manage of the answer.
    const data = await response.json();
    if (data.status === 200) {
      dispatch(setLoggedUserTokenStatus());
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export default callAPI;
