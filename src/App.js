import React, { useState, useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { UserInterface } from "./FRONT/containers/UserInterface.js";
import { fireBaseStore } from "./STORES/firebase.store.js";
import { AdLoading } from "./ADMIN/components/AdLoading/AdLoading.js";
import { AdInterface } from "./ADMIN/containers/AdInterface";
import styles from "./App.css";

export const App = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    //listen to Auth change event
    const listener = fireBaseStore.auth.onAuthStateChanged((authUser) => {
      authUser
        ? (fireBaseStore.authUser = authUser)
        : (fireBaseStore.authUser = null);
    });
    //get database
    let ref = fireBaseStore.db.ref();
    ref.on("value", (snapshot) => {
      fireBaseStore.danhSachLietSiFull = snapshot.val();
      fireBaseStore.danhSachLietSiFullSubject.next(snapshot.val());
      setisLoading(false);
    });

    return () => {
      listener();
    };
  }, []);

  if (isLoading) {
    return <AdLoading />;
  } else {
    return (
      <BrowserRouter>
        <div className={"vh-100"} >
          <Route path="/quantri" exact={true} component={AdInterface} />
          <Route path="/" exact={true} component={UserInterface} />
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
