import React from "react";
import "./AdSideBar.css";
import { AdEditorCreate } from "../AdEditCreateDeletePopup/AdEditorCreate.js";
import { AdPrintDSLietSi } from "./AdPrintDSLietSi.js";
import Icon from "react-icons-kit";
import { ic_power_settings_new } from "react-icons-kit/md/ic_power_settings_new";
import { AddAdmin } from "../AdAdmin/AddAdmin";

export const AdSideBar = ({
  DanhSachLietSi,
  CreateLietSi,
  LoginorLogout,
  SoLuongLietSi,
}) => {
  return (
    <div className="vh-100 fl SideBarWidth bg-dark-gray shadow-4 left-0 dib flex flex-wrap content-center f7 tl">
      <AdEditorCreate action="create" CreateLietSi={CreateLietSi} />
      <AdPrintDSLietSi
        DanhSachLietSi={DanhSachLietSi}
        SoLuongLietSi={SoLuongLietSi}
      />
      <AddAdmin />
      <div
        className=" w-100  pa2 mt1  hover-yellow grow-large light-yellow pointer tc"
        onClick={() => {
          LoginorLogout("logout");
        }}
      >
        <Icon size={45} icon={ic_power_settings_new} />
      </div>
    </div>
  );
};
