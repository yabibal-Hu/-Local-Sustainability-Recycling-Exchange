/* eslint-disable no-unused-vars */
const userAuthHeader = async () => {
  try {
    const token = sessionStorage.getItem("token");

    if (token) {
      // const decodedToken = decodeTokenPayload(token);

      // const { role, username, email } = decodedToken; // Destructure for clarity

      return token; // Return the token as the Authorization header value
    }
   else {
      console.warn("No token found in localStorage.");
      return {}; // No token available
    }
  } catch (error) {
    console.error("Error in userAuthHeader:", error);
    return {}; // Return an empty object in case of errors
  }
};

// const decodeTokenPayload = (token :string) => {
//   try {
//     const base64Url = token.split(".")[1];
//     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//     const jsonPayload = decodeURIComponent(
//       atob(base64)
//         .split("")
//         .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
//         .join("")
//     );
//     return JSON.parse(jsonPayload);
//   } catch (error) {
//     console.error("Error decoding token payload:", error);
//     throw new Error("Invalid token format.");
//   }
// };

export default userAuthHeader;
