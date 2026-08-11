import React from "react";
import "./UAdditonalInfo.css";
import { capitalizeLetter } from "../../../SHARED/functions";
import { UTieuSu } from "../UTieuSu/UTieuSu";

export const UAdditonalInfo = ({ lietSiDangHienThi }) => {
  return (
    <div className={"AdditonalInfo"}>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className={"additionalInfoHeader"}>AN TÁNG TẠI</div>
        <div>Nghĩa trang Liệt sĩ Tỉnh Bình Thuận</div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderWidth: "1px 0 0 0",
          borderStyle: "solid",
          borderColor: "#c7c7be",
          // margin: "0 15px 0 15px",
        }}
      >
        <div className={"additionalInfoHeader"}>QUÊ QUÁN</div>
        <div>{capitalizeLetter(lietSiDangHienThi.quequan)}</div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderWidth: "1px 0 0 0",
          borderStyle: "solid",
          borderColor: "#c7c7be",
          // margin: "0 15px 0 15px"
        }}
      >
        <div className={"additionalInfoHeader"}>ĐƠN VỊ</div>
        <div>{capitalizeLetter(lietSiDangHienThi.donvi)}</div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderWidth: "1px 0 0 0",
          borderStyle: "solid",
          borderColor: "#c7c7be",
          // margin: "0 15px 0 15px",
        }}
      >
        <div className={"additionalInfoHeader"}>LIÊN HỆ</div>
        <div className={""}>
        Nghĩa trang Liệt sĩ Tỉnh Bình Thuận  
        </div>
        <div className={""}>☎ 0252.3624088 </div>
      </div>
      <div
        className={" white"}
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      >
        <UTieuSu
          lietSiDangHienThi={lietSiDangHienThi}
          key={lietSiDangHienThi.mahoso}
        />
      </div>
    </div>
  );
};
