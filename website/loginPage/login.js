import { signInWithGoogle } from "../../users/firebase_client";

const GoogleLogin = async () => {
  try {
    // result should probably be a cookie from the server which we want to store somehow..?
    const result = await signInWithGoogle();
    //window.location.href = "/app";
  } catch (error) {}
};

document
  .getElementById("googleLoginButton")
  .addEventListener("click", GoogleLogin);
