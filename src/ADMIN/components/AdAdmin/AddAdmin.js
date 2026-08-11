import React from "react";
import "./AddAdmin.css";
import Popup from "reactjs-popup";
import Icon from "react-icons-kit";
import { ic_people } from "react-icons-kit/md/ic_people";
import { fireBaseStore } from "../../../STORES/firebase.store.js";

const contentStyle = {
  maxWidth: "650px",
  width: "100%",
  borderRadius: "15px",
  border: "0px",
  boxShadow:
    "0 40px 80px 0 rgba(0, 0, 0, 0.2), 0 40px 80px 0 rgba(0, 0, 0, 0.19)"
};
export const AddAdmin = () => {
  function CreateAdmin(ThongTin) {
    fireBaseStore.doCreateUserWithEmailAndPassword(
      ThongTin.email,
      ThongTin.password
    );
  }
  const SaveClick = () => {
    //tong hop thong tin can tim vao 1 object
    let ThongTin;
    ThongTin = { email: "", password: "" };
    ThongTin.email = document.getElementById("email").value;
    ThongTin.password = document.getElementById("password").value;
    CreateAdmin(ThongTin);
  };
  return (
    <Popup
      trigger={
        <div className="w-100  pa2 mt1  hover-blue grow-large light-blue pointer tc">
          <Icon size={45} icon={ic_people} />
        </div>
      }
      modal
      contentStyle={contentStyle}
    >
      {close => (
        <div className="modal">
          <div className="header blue"> Thêm Quản Trị Viên </div>
          <div className="tc pa3 ">
            <div className="pb2">
              <div className="dib SearchBarfontsize b w4">Tên Đăng Nhập: </div>
              <input
                id="email"
                minLength="4"
                maxLength="30"
                className="SearchBarfontsize outline-0 tc input-reset hover-bg-light-gray br2 b--black-05  ma1 dib w4"
                type="text"
              />
            </div>
            <div className="pb2">
              <div className="dib SearchBarfontsize b w4">Mật Khẩu: </div>
              <input
                id="password"
                minLength="4"
                maxLength="20"
                className="SearchBarfontsize outline-0 tc input-reset hover-bg-light-gray br2 b--black-05  ma1 dib w4"
                type="password"
              />
            </div>
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              HỦY
            </button>
            <button
              className="button"
              onClick={() => {
                SaveClick();
                close();
              }}
            >
              THÊM
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
