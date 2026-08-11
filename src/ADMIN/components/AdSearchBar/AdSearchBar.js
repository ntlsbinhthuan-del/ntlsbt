import React from "react";
import "./AdSearchBar.css";

export const AdSearchBar = ({ onSearchClick }) => {
  function SearchClick() {
    //tong hop thong tin can tim vao 1 object
    let thongTinCanTim;
    thongTinCanTim = {
      hovaten: "",
      quequan: "",
      namsinh: "",
      nammat: "",
      lo: "",
      hang: "",
      mo: "",
    };
    thongTinCanTim.hovaten = document.getElementById("hovaten").value;
    thongTinCanTim.quequan = document.getElementById("quequan").value;
    thongTinCanTim.namsinh = document.getElementById("namsinh").value;
    thongTinCanTim.nammat = document.getElementById("nammat").value;
    thongTinCanTim.lo = document.getElementById("lo").value;
    thongTinCanTim.hang = document.getElementById("hang").value;
    thongTinCanTim.mo = document.getElementById("mo").value;
    onSearchClick(thongTinCanTim);
  }
  function removeInput() {
    let thongTinCanTim;
    thongTinCanTim = {
      hovaten: "",
      quequan: "",
      namsinh: "",
      nammat: "",
      lo: "",
      hang: "",
      mo: "",
    };
    document.getElementById("hovaten").value = "";
    document.getElementById("quequan").value = "";
    document.getElementById("namsinh").value = "";
    document.getElementById("nammat").value = "";
    document.getElementById("lo").value = "";
    document.getElementById("hang").value = "";
    document.getElementById("mo").value = "";
    onSearchClick(thongTinCanTim);
  }
  function inputEnter(event) {
    if (event.key === "Enter") {
      SearchClick();
    }
  }
  return (
    <header className=" auto dib shadow-4  br2 pa1 SearchBarmargin bg-white">
      <nav>
        <div className="pa1 ">
          <input
            id="hovaten"
            onKeyPress={inputEnter}
            className="Searchbarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray  dib w4 ma1 "
            type="text"
            placeholder="Họ Và Tên"
          />
          <input
            id="quequan"
            onKeyPress={inputEnter}
            className="Searchbarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray ma1 dib w4"
            type="text"
            placeholder="Quê Quán"
          />
          <input
            id="namsinh"
            onKeyPress={inputEnter}
            className="Searchbarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray ma1  dib w3"
            type="text"
            placeholder="Năm Sinh"
          />
          <input
            id="nammat"
            onKeyPress={inputEnter}
            className="Searchbarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray ma1 dib w3"
            type="text"
            placeholder="Năm Mất"
          />
          <input
            id="lo"
            onKeyPress={inputEnter}
            className="Searchbarfontsize outline-0 tc input-reset br2 b--black-05 ma1 hover-bg-light-gray dib w3"
            type="text"
            placeholder="Lô"
          />
          <input
            id="hang"
            onKeyPress={inputEnter}
            className="Searchbarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray ma1 dib w3"
            type="text"
            placeholder="Hàng"
          />
          <input
            id="mo"
            onKeyPress={inputEnter}
            className="Searchbarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray ma1 dib w3"
            type="text"
            placeholder="Mộ"
          />
          <button
            onClick={() => {
              removeInput();
            }}
            className="Searchbarfontsize outline-0 tc gray br3 b--black-05 pointer grow-large ma1 dib w3"
          >
            X
          </button>
          <button
            onClick={() => {
              SearchClick();
            }}
            className="Searchbarfontsize outline-0 tc white br3 b--black-05 bg-gray pointer grow-large ma1 dib w3"
          >
            Tìm
          </button>
        </div>
      </nav>
    </header>
  );
};
