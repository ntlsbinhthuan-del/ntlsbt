import React from "react";
import "./AdEditorCreate.css";
import Popup from "reactjs-popup";
import Icon from "react-icons-kit";
import { ic_delete } from "react-icons-kit/md/ic_delete";
import { fireBaseStore } from "../../../STORES/firebase.store.js";

const contentStyle = {
  maxWidth: "650px",
  width: "100%",
  borderRadius: "15px",
  border: "0",
  boxShadow:
    "0 40px 80px 0 rgba(0, 0, 0, 0.2), 0 40px 80px 0 rgba(0, 0, 0, 0.19)"
};
const AdDelete = ({ LietSi }) => {
  return (
    <Popup
      trigger={
        <div className="dib width3per bg-gray br3 light-blue  pointer grow-large">
          <Icon size={15} icon={ic_delete} />
        </div>
      }
      modal
      contentStyle={contentStyle}
    >
      {close => (
        <div className="modal">
          <div className="header blue">
            {" "}
            Bạn có chắc chắn muốn xóa liệt sĩ có mã hồ sơ{" "}
            <div className="red dib">{LietSi.mahoso}</div> không?
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              HỦY THAO TÁC
            </button>
            <button
              className="button"
              onClick={() => {
                fireBaseStore.doDeleteLietsi(LietSi);
                close();
              }}
            >
              TÔI CHẮC CHẮN
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AdDelete;
