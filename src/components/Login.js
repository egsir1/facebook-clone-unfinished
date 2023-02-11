import { Button } from "@mui/material";
import React from "react";
import { auth, provider } from "./FirebaseComp";
import "./Login.css";
import { actionTypes } from "./Reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  console.log(state);
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={require("./img/bro2.jpg")} alt="BroApp" />
      </div>
      <Button type="submit" onClick={signIn}>
        {" "}
        Sign In
      </Button>
    </div>
  );
}

export default Login;
