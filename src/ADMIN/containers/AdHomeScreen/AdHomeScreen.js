import React, { useState, useEffect } from "react";
import { AdSideBar } from "../../components/AdSideBar/AdSideBar.js";
import { AdSearchBar } from "../../components/AdSearchBar/AdSearchBar.js";
import AdDsLietSi from "../../components/AdDsLietSi/AdDsLietSi.js";
import * as myConstClass from "../../../SHARED/constants.js";
import { fireBaseStore } from "../../../STORES/firebase.store.js";
import _ from "lodash";

export const AdHomeScreen = (props) => {
  const [CurrentPage, setCurrentPage] = useState(0);
  const [DanhSachLietSi, setDanhSachLietSi] = useState([]);
  const [isSorted, setIsSorted] = useState(true);
  const [Direction, setDirection] = useState({
    mahoso: "asc",
    hovaten: "asc",
    quequan: "asc",
    namsinh: "asc",
    nammat: "asc",
    donvi: "asc",
    chucvu: "asc",
    lo: "asc",
    hang: "asc",
    mo: "asc",
  });
  useEffect(() => {
    const danhSachLietSiStream =
      fireBaseStore.danhSachLietSiFullSubject.subscribe(() => {
        setDanhSachLietSi(fireBaseStore.doSearhLietSi());
      });
    const authUserStream = fireBaseStore.authUserSubject.subscribe((user) => {
      if (!user) {
        console.log("authUser at HomeScreen", user);
        props.LoginorLogout("logout");
      }
    });

    return () => {
      authUserStream.unsubscribe();
      danhSachLietSiStream.unsubscribe();
    };
  }, []);

  function OnPageChoose(event) {
    setCurrentPage(parseInt(event.target.getAttribute("value"), 10));
  }

  function onSearchClick(thongTinCanTim) {
    console.log(thongTinCanTim);
    fireBaseStore.searchInforMation = thongTinCanTim;
    setDanhSachLietSi(fireBaseStore.doSearhLietSi());
    console.log(fireBaseStore.doSearhLietSi());
    setIsSorted(!isSorted);
    setCurrentPage(0);
  }

  function SortBy(key) {
    setIsSorted(!isSorted);
    if (key === "id") {
      setDanhSachLietSi(
        DanhSachLietSi.sort((a, b) =>
          Direction[key] === "asc"
            ? parseInt(a[key], 10) - parseInt(b[key], 10)
            : parseInt(b[key], 10) - parseInt(a[key], 10)
        )
      );
      setDirection({
        ...Direction,
        [key]: Direction[key] === "asc" ? "desc" : "asc",
      });
    } else if (key === "hang" || key === "mo") {
      setDanhSachLietSi(
        DanhSachLietSi.sort((a, b) => {
          let x = a[key];
          let y = b[key];
          if (x === null) x = "";
          if (y === null) y = "";
          if (Direction[key] === "asc")
            return parseInt(x.substring(1), 10) - parseInt(y.substring(1), 10);
          else
            return parseInt(y.substring(1), 10) - parseInt(x.substring(1), 10);
        })
      );
      setDirection({
        ...Direction,
        [key]: Direction[key] === "asc" ? "desc" : "asc",
      });
    } else if (key === "nammat") {
      setDanhSachLietSi(
        DanhSachLietSi.sort((a, b) => {
          let x = a[key];
          let y = b[key];
          if (x === null) x = "";
          if (y === null) y = "";
          if (x === "") {
            x = "00/00/0000";
          } else if (!x.includes("/")) {
            x = `00/00/${x}`;
          }
          if (y === "") {
            y = "00/00/0000";
          } else if (!y.includes("/")) {
            y = `00/00/${y}`;
          }
          if (Direction[key] === "asc") {
            let aa = x.split("/").reverse().join(),
              bb = y.split("/").reverse().join();
            return aa < bb ? -1 : aa > bb ? 1 : 0;
          } else {
            let aa = x.split("/").reverse().join(),
              bb = y.split("/").reverse().join();
            return aa > bb ? -1 : aa < bb ? 1 : 0;
          }
        })
      );
      setDirection({
        ...Direction,
        [key]: Direction[key] === "asc" ? "desc" : "asc",
      });
    } else {
      setDanhSachLietSi(
        DanhSachLietSi.sort((a, b) =>
          Direction[key] === "asc"
            ? +(a[key] > b[key]) || +(a[key] === b[key]) - 1
            : +(a[key] < b[key]) || +(a[key] === b[key]) - 1
        )
      );
      setDirection({
        ...Direction,
        [key]: Direction[key] === "asc" ? "desc" : "asc",
      });
    }
  }

  /**
   * @return {number}
   */
  function CalculateAmountofPages() {
    const length = DanhSachLietSi.length;
    if (length % myConstClass.amountOfLietSiPerPage !== 0) {
      return Math.floor(length / myConstClass.amountOfLietSiPerPage) + 1;
    } else if (length === 0) {
      return 1;
    } else {
      return Math.floor(length / myConstClass.amountOfLietSiPerPage);
    }
  }

  const lietSiOnCurrentPage = _.slice(
    DanhSachLietSi,
    CurrentPage * myConstClass.amountOfLietSiPerPage,
    CurrentPage * myConstClass.amountOfLietSiPerPage +
      myConstClass.amountOfLietSiPerPage
  );

  return (
    <div className="tc">
      <AdSideBar
        LoginorLogout={props.LoginorLogout}
        DanhSachLietSi={DanhSachLietSi}
        SoLuongLietSi={DanhSachLietSi.length}
      />
      <AdSearchBar onSearchClick={onSearchClick} />
      <AdDsLietSi
        lietSiOnCurrentPage={lietSiOnCurrentPage}
        CurrentPage={CurrentPage}
        AmountofPage={CalculateAmountofPages()}
        OnPageChoose={OnPageChoose}
        SoLuongLietSi={DanhSachLietSi.length}
        SortBy={SortBy}
      />
    </div>
  );
};
