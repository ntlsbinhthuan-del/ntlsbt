import React from "react";
import "./USideBar.css";
import _ from "lodash";
import { capitalizeLetter, checkEmpty } from "../../../SHARED/functions";

export const USideBar = ({
  CurrentPage,
  DanhSachLietSi,
  setLietSiDangHienThi,
  lietSiDangHienThi
}) => {
  const lietSiOnCurrentPage = _.slice(
    DanhSachLietSi,
    CurrentPage * 10,
    CurrentPage * 10 + 10
  );

  function createList() {
    let a = [];
    if (lietSiOnCurrentPage.length === 0) {
      a.push(
        <div key="none" className={`LietSi`}>
          Không tìm thấy kết quả nào phù hợp!
        </div>
      );
    }

    lietSiOnCurrentPage &&
      lietSiOnCurrentPage.map((lietsi, index) => {
        let currentLietSiStyle = "";
        if (lietsi && lietsi.mahoso === lietSiDangHienThi.mahoso) {
          currentLietSiStyle = "choosen";
        }
        let oddStyle = "#005498";
        if (index % 2 === 0) oddStyle = "#004c89";
        a.push(
          <div
            key={lietsi.mahoso}
            className={`LietSi choose ${currentLietSiStyle}`}
            style={{ backgroundColor: `${oddStyle}` }}
            onClick={() => {
              setLietSiDangHienThi(lietsi);
            }}
          >
            <div
              className={"HoVaTen"}
              onClick={() => {
                setLietSiDangHienThi(lietsi);
              }}
            >
              {lietsi.hovaten} ({checkEmpty(lietsi.namsinh)}-
              {checkEmpty(lietsi.nammat)})
            </div>
            <div
              className={"QueQuan"}
              onClick={() => {
                setLietSiDangHienThi(lietsi);
              }}
            >
              Quê quán: {capitalizeLetter(lietsi.quequan)}
            </div>
          </div>
        );
      });

    return a;
  }
  return (
    <div id="sideBar" className={"w-100  ListContainer white"}>
      {createList()}
    </div>
  );
};
