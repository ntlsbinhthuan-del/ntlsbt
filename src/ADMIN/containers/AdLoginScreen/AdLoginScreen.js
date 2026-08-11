import React, { useEffect } from "react";
import { fireBaseStore } from "../../../STORES/firebase.store.js";

export const AdLoginScreen = props => {
  useEffect(() => {
    const authUserStream = fireBaseStore.authUserSubject.subscribe(user => {
      if (user) {
        console.log("authUser at LoginScreen", user);
        props.LoginorLogout("login");
      }
    });
    return () => {
      authUserStream.unsubscribe();
    };
  }, []);

  function login() {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fireBaseStore
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        props.LoginorLogout("login");
      })
      .catch(err => {
        alert("Đăng nhập thất bại");
      });
  }

  function inputEnter(event) {
    if (event.key === "Enter") {
      login();
    }
  }

  return (
    <article className="br3 ba b--black-10 mv5 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
      <main className="pa4 black-80">
        <div className="measure">
          <form id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw7 ph0 mh0 tc red">Đăng Nhập</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Tên đăng nhập:
              </label>
              <input
                id="username"
                className="pa2 input-reset ba bg-transparent hover-bg-black-30 hover-white"
                autoComplete="username"
                onKeyPress={inputEnter}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Mật khẩu:
              </label>
              <input
                id="password"
                className="b pa2 input-reset ba bg-transparent hover-bg-black-30 hover-white"
                type="password"
                autoComplete="current-password"
                onKeyPress={inputEnter}
              />
            </div>
          </form>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--red bg-red white br2 grow pointer f6 dib"
              type="submit"
              value="Đăng Nhập"
              onClick={() => login()}
            />
          </div>
        </div>
      </main>
    </article>
  );
};
