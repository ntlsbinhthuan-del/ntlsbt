import React from "react";
import "./UPosition.css";
import vietnamIcon from "./vietnam.jpg";
import { InThongTin } from "../../../SHARED/print";
import { capitalizeLetter, checkEmpty } from "../../../SHARED/functions";

export const UPosition = ({ lietSiDangHienThi }) => {
  return (
    <div className={"Profile"}>
      <div className={"ProfileBackground"}>
        <div>
          <img
            className={"br-100"}
            style={{ width: "80%" }}
            src={vietnamIcon}
            alt={"icon"}
          />
        </div>
        <div
          className={"f3 items-center flex b"}
          style={{ display: "flex", flex: 1 }}
        >
          {capitalizeLetter(lietSiDangHienThi.hovaten)}
        </div>
        <div className={"f7"} style={{ display: "flex", flex: 1 }}>
          ({capitalizeLetter(lietSiDangHienThi.namsinh)} -{" "}
          {capitalizeLetter(lietSiDangHienThi.nammat)})
        </div>
        <div className={""} style={{ display: "flex", flex: 1 }}>
          Chức vụ: {capitalizeLetter(lietSiDangHienThi.chucvu)}
        </div>
      </div>
      <div className={"positionAndPrintButton"}>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "70%"
          }}
        >
          <div className={"dib w-40 b"}>LÔ</div>
          <div className={"dib w-40"}>{checkEmpty(lietSiDangHienThi.lo)}</div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "solid",
            borderWidth: "1px 0 0 0",
            borderColor: "gray",
            width: "70%",
          }}
        >
          <div className={"dib w-40 b"}>HÀNG</div>
          <div className={"dib w-40"}>{checkEmpty(lietSiDangHienThi.hang)}</div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "solid",
            borderWidth: "1px 0 0 0",
            borderColor: "gray",
            width: "70%"
          }}
        >
          <div className={"dib w-40 b"}>MỘ</div>
          <div className={"dib w-40"}>{checkEmpty(lietSiDangHienThi.mo)}</div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            width: "100%"
          }}
        >
          <div
            className={"PrintButton dim pointer white"}
            onClick={() => {
              InThongTin(lietSiDangHienThi);
            }}
          >
            In vị trí
          </div>
        </div>
      </div>
    </div>
  );
};
