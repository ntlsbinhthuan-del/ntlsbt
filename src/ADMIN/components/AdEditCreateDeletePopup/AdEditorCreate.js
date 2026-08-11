import React from "react";
import { useState } from "react";
import "./AdEditorCreate.css";
import Popup from "reactjs-popup";
import Icon from "react-icons-kit";
import { ic_create_new_folder } from "react-icons-kit/md/ic_create_new_folder";
import { ic_mode_edit } from "react-icons-kit/md/ic_mode_edit";
import { fireBaseStore } from "../../../STORES/firebase.store";
import { AdTextEditor } from "../AdTextEditor/AdTextEditor";

export const AdEditorCreate = ({ action, LietSi = {} }) => {
  const [err, setErr] = useState("");
  const [mahoso, setMaHoSo] = useState(LietSi.mahoso || "");
  const [quequan, setQueQuan] = useState(LietSi.quequan || "");
  const [namsinh, setNamSinh] = useState(LietSi.namsinh || "");
  const [nammat, setNamMat] = useState(LietSi.nammat || "");
  const [lo, setLo] = useState(LietSi.lo || "");
  const [hang, setHang] = useState(LietSi.hang || "");
  const [mo, setMo] = useState(LietSi.mo || "");
  const [chucvu, setChucVu] = useState(LietSi.chucvu || "");
  const [donvi, setDonVi] = useState(LietSi.donvi || "");
  const [tieusu, setTieusu] = useState(LietSi.tieusu || "");
  const [hovaten, setHoVaTen] = useState(LietSi.hovaten || "");

  const SaveClick = () => {
    console.log(tieusu);
    if (action === "create") {
      fireBaseStore.doCreateLietsi({
        mahoso,
        hovaten,
        quequan,
        namsinh,
        nammat,
        lo,
        hang,
        mo,
        chucvu,
        donvi,
        tieusu,
      });
    } else if (action === "edit") {
      fireBaseStore.doEditLietsi(LietSi, {
        mahoso,
        hovaten,
        quequan,
        namsinh,
        nammat,
        lo,
        hang,
        mo,
        chucvu,
        donvi,
        tieusu,
      });
    }
  };

  function resetState() {
    setErr("");
    setMaHoSo(LietSi.mahoso || "");
    setQueQuan(LietSi.quequan || "");
    setNamSinh(LietSi.namsinh || "");
    setNamMat(LietSi.nammat || "");
    setLo(LietSi.lo || "");
    setHang(LietSi.hang || "");
    setMo(LietSi.mo || "");
    setChucVu(LietSi.chucvu || "");
    setDonVi(LietSi.donvi || "");
    setTieusu(LietSi.tieusu || "");
  }

  return (
    <Popup
      trigger={
        <div
          className={
            action === "edit"
              ? "dib width3per bg-gray br3 light-yellow  pointer grow-large"
              : "w-100  pa2 mt1  hover-red grow-large light-red pointer tc"
          }
        >
          <Icon
            size={action === "create" ? 45 : 15}
            icon={action === "edit" ? ic_mode_edit : ic_create_new_folder}
          />
        </div>
      }
      modal
      contentStyle={contentStyle}
    >
      {(close) => (
        <div className="modal">
          <div className="header gold">
            {" "}
            {action === "edit" ? "Sửa Thông Tin Liệt Sĩ" : "Thêm Liệt Sĩ"}
          </div>
          <div className="tl pa3">
            <div className="pb2">
              <div className="dib SearchBarfontsize b w3">Mã:</div>
              <input
                className="SearchBarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray  dib w4 ma1 "
                type="text"
                value={mahoso}
                onChange={(val) => {
                  setMaHoSo(val.target.value);
                }}
              />
              <div className="dib SearchBarfontsize b w3">Họ và tên:</div>
              <input
                className="SearchBarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray  dib w5 ma1"
                type="text"
                value={hovaten}
                onChange={(val) => setHoVaTen(val.target.value)}
              />
            </div>
            <text className={"red"}>{err}</text>
            <div className="pb2">
              <div className="dib SearchBarfontsize b w3">Quê quán:</div>
              <input
                className="SearchBarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray ma1 dib w5"
                type="text"
                value={quequan}
                onChange={(val) => setQueQuan(val.target.value)}
              />
            </div>
            <div className="pb2">
              <div className="dib SearchBarfontsize b w3">Năm sinh:</div>
              <input
                className="SearchBarfontsize outline-0 tc input-reset br2 b--black-05 ma1 hover-bg-light-gray dib w3"
                type="text"
                value={namsinh}
                onChange={(val) => setNamSinh(val.target.value)}
              />
              <div className="dib SearchBarfontsize b ml3">Năm mất:</div>
              <input
                className="SearchBarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray ma1 dib w3"
                type="text"
                value={nammat}
                onChange={(val) => setNamMat(val.target.value)}
              />
            </div>
            <div className="pb2">
              <div className="dib SearchBarfontsize b w3">Lô:</div>
              <input
                className="SearchBarfontsize outline-0 tc input-reset br2 hover-bg-light-gray b--black-05 ma1  dib w3"
                type="text"
                value={lo}
                onChange={(val) => setLo(val.target.value)}
              />
              <div className="dib SearchBarfontsize b ml3">Hàng:</div>
              <input
                className="SearchBarfontsize outline-0 tc input-reset br2 hover-bg-light-gray b--black-05  ma1 dib w3"
                type="text"
                value={hang}
                onChange={(val) => setHang(val.target.value)}
              />
              <div className="dib SearchBarfontsize b ml3">Mộ:</div>
              <input
                className="SearchBarfontsize outline-0 tc input-reset br2 hover-bg-light-gray b--black-05  ma1 dib w3"
                type="text"
                value={mo}
                onChange={(val) => setMo(val.target.value)}
              />
            </div>
            <div className="pb2">
              <div className="dib SearchBarfontsize b w3">Chức vụ:</div>
              <input
                className="SearchBarfontsize outline-0 tc input-reset hover-bg-light-gray br2 b--black-05  ma1 dib w5"
                type="text"
                value={chucvu}
                onChange={(val) => setChucVu(val.target.value)}
              />
            </div>
            <div className="pb2">
              <div className="dib SearchBarfontsize b w3">Đơn vị:</div>
              <input
                className="SearchBarfontsize outline-0 tc input-reset hover-bg-light-gray br2 b--black-05  ma1 dib w5"
                type="text"
                value={donvi}
                onChange={(val) => setDonVi(val.target.value)}
              />
            </div>
          </div>
          <div className="actions">
            <AdTextEditor
              setTieusu={setTieusu}
              tieusu={tieusu}
              key={LietSi.mahoso}
            />
            <button
              className="button"
              onClick={() => {
                close();
                resetState();
              }}
            >
              HỦY
            </button>
            <button
              className="button"
              onClick={() => {
                if (mahoso === "") setErr("Mã hồ sơ không được để trống");
                else {
                  SaveClick();
                  close();
                  if (action === "create") resetState();
                }
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
  maxWidth: "650px",
  width: "100%",
  borderRadius: "15px",
  border: "0px",
  boxShadow:
    "0 40px 80px 0 rgba(0, 0, 0, 0.2), 0 40px 80px 0 rgba(0, 0, 0, 0.19)",
};
