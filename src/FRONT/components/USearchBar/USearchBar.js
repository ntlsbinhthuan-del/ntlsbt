import React from "react";
import "./USearchBar.css";
import { ic_search } from "react-icons-kit/md/ic_search";
import Icon from "react-icons-kit";

export const USearchBar = ({ onSearchClick }) => {
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
      mo: ""
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
  function inputEnter(event) {
    if (event.key === "Enter") {
      SearchClick();
    }
  }
  return (
    <header className=" auto dib USearchBar">
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
        className="Searchbarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray ma1 dib w5"
        type="text"
        placeholder="Quê Quán"
      />
      <input
        id="namsinh"
        onKeyPress={inputEnter}
        className="Searchbarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray ma1  dib w4"
        type="text"
        placeholder="Năm Sinh"
      />
      <input
        id="nammat"
        onKeyPress={inputEnter}
        className="Searchbarfontsize outline-0 tc input-reset br2 b--black-05 hover-bg-light-gray ma1 dib w4"
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
          SearchClick();
        }}
        className="Searchbarfontsize SearchButton outline-0 tc white br3 b--black-05 pointer dim grow-large ma1 dib w3"
      >
        <Icon size={22} icon={ic_search} />
      </button>
    </header>
  );
};
