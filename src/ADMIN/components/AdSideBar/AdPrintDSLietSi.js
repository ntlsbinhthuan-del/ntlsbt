import React from "react";
import Icon from "react-icons-kit";
import { ic_print } from "react-icons-kit/md/ic_print";
import * as _ from "lodash";

export const AdPrintDSLietSi = ({ DanhSachLietSi, SoLuongLietSi }) => {
  function titleCase(str) {
    if (str === null) str = "";
    return _.split(str, " ")
      .map(function(val) {
        return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
      })
      .join(" ");
  }

  function printDiv(eleId) {
    let PW = window.open("", "", "width=1000,height=800");

    //IF YOU HAVE DIV STYLE IN CSS, REMOVE BELOW COMMENT AND ADD CSS ADDRESS
    PW.document.write(`
    	<style> 
    	.lietsi{
			border-top:0.5px solid gray;
			
		}
		.borderAround{
			border:1px solid gray;
			text-align: center;
		}
		.title{
			font-weight:bolder;
		}
		</style>
		`);
    PW.document.write(document.getElementById("printMe").innerHTML);
    PW.document.close();
    PW.focus();
    PW.print();
    PW.close();
  }

  return (
    <div className="w-100">
      <div
        onClick={printDiv}
        className="tc  pa2 mt1 hover-green grow-large light-green pointer"
      >
        <Icon size={45} icon={ic_print} />
      </div>

      <div id="printMe" className="dn">
        <div>Danh sách hiện có: {SoLuongLietSi} liệt sĩ</div>
        <div className="borderAround">
          <div style={{ font: "9px arial", padding: "10px" }} className="title">
            <strong style={{ display: "inline-block", width: "5%" }}>MÃ</strong>
            <strong style={{ display: "inline-block", width: "15%" }}>
              HỌ
            </strong>
            <strong style={{ display: "inline-block", width: "3%" }}>
              TÊN
            </strong>
            <strong style={{ display: "inline-block", width: "20%" }}>
              QUÊ QUÁN
            </strong>
            <strong style={{ display: "inline-block", width: "7%" }}>
              NĂM SINH
            </strong>
            <strong style={{ display: "inline-block", width: "8%" }}>
              NĂM MẤT
            </strong>
            <strong style={{ display: "inline-block", width: "15%" }}>
              ĐƠN VỊ
            </strong>
            <strong style={{ display: "inline-block", width: "15%" }}>
              CẤP BẬC
            </strong>
            <strong style={{ display: "inline-block", width: "4%" }}>LÔ</strong>
            <strong style={{ display: "inline-block", width: "4%" }}>
              HÀNG
            </strong>
            <strong style={{ display: "inline-block", width: "4%" }}>MỘ</strong>
          </div>
          {DanhSachLietSi.map(lietsi => {
            return (
              <div
                key={lietsi.mahoso}
                style={{ font: "9px arial", padding: "10px" }}
                className="lietsi"
              >
                <div style={{ display: "inline-block", width: "5%" }}>
                  {lietsi.mahoso}
                </div>
                <div style={{ display: "inline-block", width: "15%" }}>
                  lietsi.ho)}
                </div>
                <div style={{ display: "inline-block", width: "3%" }}>
                  {titleCase(lietsi.ten)}
                </div>
                <div style={{ display: "inline-block", width: "20%" }}>
                  {titleCase(lietsi.quequan)}
                </div>
                <div style={{ display: "inline-block", width: "7%" }}>
                  {lietsi.namsinh}
                </div>
                <div style={{ display: "inline-block", width: "8%" }}>
                  {lietsi.nammat}
                </div>
                <div style={{ display: "inline-block", width: "15%" }}>
                  {titleCase(lietsi.donvi)}
                </div>
                <div style={{ display: "inline-block", width: "15%" }}>
                  {titleCase(lietsi.chucvu)}
                </div>
                <div style={{ display: "inline-block", width: "4%" }}>
                  {lietsi.lo}
                </div>
                <div style={{ display: "inline-block", width: "4%" }}>
                  {lietsi.hang}
                </div>
                <div style={{ display: "inline-block", width: "4%" }}>
                  {lietsi.mo}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
