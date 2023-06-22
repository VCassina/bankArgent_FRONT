import {
  resetUserToken,
  resetLoggedUserTokenStatus,
  setUserInformation,
} from "../store";

async function tokenChecking(token, dispatch, navigate) {
  // On purpose fake token to test the disconnection.
  // const outdatedToken = token+"1";

  // Call of the API.
  try {
    const response = await fetch("http://127.0.0.1:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${outdatedToken}`,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });

    // Manage of the answer.
    const realToken = await response.json();

    // Behavior to apply depending the answer.
    switch (realToken.status) {
      case 200:
        // Token is valid, dispatch users informations.
        console.log("I'm authorized. CASE 200.");
        dispatch(
          setUserInformation(
            realToken.body.userName,
            realToken.body.firstName,
            realToken.body.lastName
          )
        );
        break;
      case 401:
        // Token is expired or invalid, redirect to "/sign-in" and reset user token.
        console.log("I'm unauthorized. CASE 401.");
        dispatch(resetUserToken());
        dispatch(resetLoggedUserTokenStatus());
        navigate("/sign-in");
        break;
      default:
        // Handle other statuses if needed - could be removed later.
        break;
    }
  } catch (error) {
    console.error(error);
  }
}

export default tokenChecking;