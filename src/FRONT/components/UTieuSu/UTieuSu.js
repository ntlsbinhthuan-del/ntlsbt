import React, { useEffect } from "react";
import { useState } from "react";
import "./UTieuSu.css";
import Popup from "reactjs-popup";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, EditorState } from "draft-js";

export const UTieuSu = ({ lietSiDangHienThi }) => {
  const [editorState, seteditorState] = useState(null);
  useEffect(() => {
    if (lietSiDangHienThi.tieusu) {
      const rawContentFromStore = convertFromRaw(
        JSON.parse(lietSiDangHienThi.tieusu)
      );

      seteditorState(EditorState.createWithContent(rawContentFromStore));
    }
  }, [lietSiDangHienThi.tieusu]);

  function renderComponent() {
    if (lietSiDangHienThi.tieusu) {
      return (
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          wrapperStyle={{ height: "100%", width: "100%" }}
          editorStyle={{
            height: "300px",
            width: "100%",
            overflowY: "scroll"
          }}
          toolbarStyle={{ display: "none" }}
        />
      );
    } else {
      return (
        <div
          style={{
            height: "100px",
            width: "100%",
            overflowY: "scroll",
            fontSize: "20px"
          }}
        >
          <p>Không có thông tin nào, vui lòng chờ cập nhật</p>
        </div>
      );
    }
  }

  return (
    <Popup
      trigger={
        <div className={" UTieusuButton w-100 dim pointer"}>Tiểu sử</div>
      }
      modal
      contentStyle={contentStyle}
    >
      {close => (
        <div className="modal">
          <div className="header gold">{"Tiểu Sử"}</div>
          <div className="w-100 h-100 pa3 black">{renderComponent()}</div>
          <div className="actions">
            {/* <button
              className="button"
              onClick={() => {
                window.open("https://forms.gle/hXkkwDsr29oh1ND79");
                close();
              }}
            >
              Cung cấp thông tin
            </button> */}
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              Thoát
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

const contentStyle = {
  maxWidth: "800px",
  width: "100%",
  borderRadius: "15px",
  border: "0px",
  boxShadow:
    "0 40px 80px 0 rgba(0, 0, 0, 0.2), 0 40px 80px 0 rgba(0, 0, 0, 0.19)"
};
