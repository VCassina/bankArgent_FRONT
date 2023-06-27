import tokenChecking from "./tokenInfoRequest";
import  { saveUserNickname } from "../store";

const uploadUsername = async (username, token, dispatch) => {
    const requestBody = {
      userName: username,
    };
    try {
      const response = await fetch("http://127.0.0.1:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });
  
      const data = await response.json();
      if (response.status === 200) {
        dispatch(saveUserNickname(data.body.userName));
        // Refresh the informations in global statement.
        await tokenChecking(token, dispatch);
      }
      return data;
    } catch (error) {
      console.log("Error updating user profile:", error);
      throw error;
    }
  };
  
  export default uploadUsername;
  