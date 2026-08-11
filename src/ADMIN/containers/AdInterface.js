import React, { useState } from "react";
import { AdLoginScreen } from "./AdLoginScreen/AdLoginScreen.js";
import { AdHomeScreen } from "./AdHomeScreen/AdHomeScreen.js";
import "./AdInterface.css";
import { fireBaseStore } from "../../STORES/firebase.store.js";
export const AdInterface = () => {
  const [LoginorHome, setLoginorHome] = useState("logout");
  function LoginorLogout(value) {
    if (value === "login") {
      setLoginorHome(value);
    } else {
      console.log("signout clicked");
      fireBaseStore.doSignOut();
      setLoginorHome(value);
    }
  }
  return (
    <div>
      {LoginorHome === "logout" ? (
        <AdLoginScreen LoginorLogout={LoginorLogout} />
      ) : (
        <AdHomeScreen LoginorLogout={LoginorLogout} />
      )}
    </div>
  );
};
