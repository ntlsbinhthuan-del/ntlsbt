import React from "react";
import "./Pagination.css";

export const AdPagination = ({
  AmountofPage,
  CurrentPage,
  OnPageChoose,
  SoLuongLietSi
}) => {
  let createNavigate = function() {
    let first;
    let last;
    let leftArrow;
    let rightArrow;
    leftArrow = CurrentPage - 1;
    rightArrow = CurrentPage + 1;
    if (leftArrow < 0) leftArrow = 0;
    if (rightArrow > AmountofPage - 1) rightArrow = AmountofPage - 1;
    if (CurrentPage < 5) {
      first = 0;
      last = 10;
    } else if (CurrentPage >= AmountofPage - 5) {
      first = AmountofPage - 11;
      last = AmountofPage - 1;
    } else {
      first = CurrentPage - 5;
      last = CurrentPage + 5;
    }
    let a = [];
    a.push(
      <div
        key={99999}
        value={leftArrow}
        onClick={OnPageChoose}
        className={
          " b dib  paginationFont pa2 white hover-gray  hover-bg-white pointer ma0"
        }
      >
        &#60;
      </div>
    );
    for (var i = 0; i < AmountofPage; i++) {
      let cls = "";
      if (i === CurrentPage) cls = "bg-white dark-blue";
      if (i >= first && i <= last)
        a.push(
          <div
            key={i}
            value={i}
            onClick={OnPageChoose}
            className={` dib  paginationFont  pa2 white hover-gray hover-bg-white pointer ${cls}`}
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
          "b dib  paginationFont pa2 white hover-gray  hover-bg-white pointer ma0"
        }
      >
        &#62;
      </div>
    );
    return a;
  };
  return (
    <div className="Paginationmargin bg-gray br2 w-auto">
      {createNavigate()}
    </div>
  );
};
