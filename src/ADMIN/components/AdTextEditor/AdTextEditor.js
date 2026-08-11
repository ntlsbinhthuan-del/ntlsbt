import React, { useEffect } from "react";
import { useState } from "react";
import "./AdTextEditor.css";
import Popup from "reactjs-popup";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const AdTextEditor = ({ setTieusu, tieusu }) => {
  const [editorState, seteditorState] = useState(null);
  useEffect(() => {
    if (tieusu !== "") {
      const rawContentFromStore = convertFromRaw(JSON.parse(tieusu));

      seteditorState(EditorState.createWithContent(rawContentFromStore));
    }
  }, []);

  function setEditorState(value) {
    seteditorState(value);
  }

  function uploadImage(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID 25a3ff59a93800d");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }

  uploadImage("../../../FRONT/components/UPosition/vietnam.jpg");

  return (
    <Popup
      trigger={<button className={"tieuSuButton"}>Tiểu sử</button>}
      modal
      contentStyle={contentStyle}
    >
      {close => (
        <div className="modal">
          <div className="header gold">{"Tiểu Sử"}</div>
          <div className={"w-100 h-100 pa3"}>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              wrapperStyle={{ height: "100%", width: "100%" }}
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: {
                  uploadCallback: uploadImage,
                  alt: { present: true, mandatory: true }
                }
              }}
              editorStyle={{
                height: "400px",
                width: "100%",
                overflowY: "scroll",
                padding: "15px"
              }}
            />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                if (tieusu !== "") {
                  const rawContentFromStore = convertFromRaw(
                    JSON.parse(tieusu)
                  );

                  seteditorState(
                    EditorState.createWithContent(rawContentFromStore)
                  );
                }
                close();
              }}
            >
              HỦY
            </button>
            <button
              className="button"
              onClick={() => {
                close();
                setTieusu(
                  JSON.stringify(convertToRaw(editorState.getCurrentContent()))
                );
              }}
            >
              LƯU
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
