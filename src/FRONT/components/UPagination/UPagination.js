import React from "react";
import "./UPagination.css";
import { calculateAmountOfPages } from "../../../SHARED/functions";

export const UPagination = ({ DanhSachLietSi, CurrentPage, OnPageChoose }) => {
  const AmountofPage = calculateAmountOfPages(DanhSachLietSi.length);
  let createNavigate = function() {
    let first;
    let last;
    let leftArrow;
    let rightArrow;
    leftArrow = CurrentPage - 1;
    rightArrow = CurrentPage + 1;
    if (leftArrow < 0) leftArrow = 0;
    if (rightArrow > AmountofPage - 1) rightArrow = AmountofPage - 1;
    if (CurrentPage < 2) {
      first = 0;
      last = 4;
    } else if (CurrentPage >= AmountofPage - 2) {
      first = AmountofPage - 5;
      last = AmountofPage - 1;
    } else {
      first = CurrentPage - 2;
      last = CurrentPage + 2;
    }
    let a = [];
    a.push(
      <div
        key={99999}
        value={leftArrow}
        onClick={OnPageChoose}
        className={
          "dib paginationFont pa2 paginationItem hover-green hover-bg-white pointer ma0"
        }
      >
        &#60;
      </div>
    );
    for (var i = 0; i < AmountofPage; i++) {
      let cls = "paginationItem";
      if (i === CurrentPage) cls += " selected";
      if (i >= first && i <= last)
        a.push(
          <div
            key={i}
            value={i}
            onClick={OnPageChoose}
            className={`${cls} dib paginationFont pa2 hover-green hover-bg-white pointer`}
          >
            {i + 1}
          </div>
        );
    }
    a.push(
      <div
        key={99998}
        value={rightArrow}
        onClick={OnPageChoose}
        className={
          "dib paginationFont pa2 paginationItem hover-green hover-bg-white pointer ma0"
        }
      >
        &#62;
      </div>
    );
    return a;
  };
  return (
    <div className="full">
      {<div className="PaginationWrapper tc">{createNavigate()}</div>}
    </div>
  );
};