import {
  resetUserToken,
  setLoggedUserTokenStatus,
  setUserInformation,
} from "../store";

async function tokenInfoRequest(token, dispatch, navigate) {
  try {
    const response = await fetch("http://127.0.0.1:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });

    // Manage of the answer.
    const realToken = await response.json();
    if (realToken.status === 200) {
      // Token is still valid, dispatch users informations to refresh.
      console.log("Token is valid.");
      dispatch(
        setUserInformation(
          realToken.body.userName,
          realToken.body.firstName,
          realToken.body.lastName
        )
      );
    } else {
      // Token is expired or invalid, redirect to "/sign-in" and reinitialize user token.
      console.log("Token is invalid.");
      dispatch(resetUserToken());
      dispatch(setLoggedUserTokenStatus(false));
      navigate("/sign-in");
    }
  } catch (error) {
    console.error(error);
  }
}

export default tokenInfoRequest;