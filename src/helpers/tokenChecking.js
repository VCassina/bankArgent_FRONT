import {
  resetUserToken,
  setLoggedUserTokenStatus,
  setUserInformation,
} from "../store";

async function tokenChecking(token, dispatch, navigate) {
  // On purpose fake token to test the disconnection.
  // const outdatedToken = token+"1";
  // Call of the API by sending our actual token.
  try {
    const response = await fetch("http://127.0.0.1:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${outdatedToken}`,
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });

    // Manage of the answer.
    const realToken = await response.json();
    if (realToken.status === 200) {
      // Token is still valid, dispatch users informations to refresh.
      dispatch(
        setUserInformation(
          realToken.body.userName,
          realToken.body.firstName,
          realToken.body.lastName
        )
      );
    } else {
      // Token is expired or invalid, redirect to "/sign-in" and reinitialize user token.
      dispatch(resetUserToken());
      dispatch(setLoggedUserTokenStatus(false));
      navigate("/sign-in");
    }
  } catch (error) {
    console.error(error);
  }
}

export default tokenChecking;