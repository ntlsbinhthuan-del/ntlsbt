import React, { useMemo } from "react";
import "./AdDsLietSi.css";
import { AdEditorCreate } from "../AdEditCreateDeletePopup/AdEditorCreate.js";
import AdDelete from "../AdEditCreateDeletePopup/AdDelete.js";
import { AdPagination } from "../AdPagination/AdPagination.js";
import * as _ from "lodash";

const AdDsLietSi = ({
  lietSiOnCurrentPage,
  CurrentPage,
  AmountofPage,
  OnPageChoose,
  SoLuongLietSi,
  SortBy
}) => {
  function titleCase(str) {
    if (str === null) str = "";
    return _.split(str, " ")
      .map(function(val) {
        return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
      })
      .join(" ");
  }

  const renderDanhSach = useMemo(() => {
    return lietSiOnCurrentPage.map(lietsi => {
      return (
        <div className="bt b--moon-gray dark-gray pa2 f8" key={lietsi.mahoso}>
          <div className="dib width3per">{lietsi.mahoso}</div>
          <div className="dib w-20">{titleCase(lietsi.hovaten)}</div>
          <div className="dib w-20">{titleCase(lietsi.quequan)}</div>
          <div className="dib w-10">{lietsi.namsinh}</div>
          <div className="dib w-10">{lietsi.nammat}</div>
          <div className="dib w-10">{titleCase(lietsi.donvi)}</div>
          <div className="dib w-10">{titleCase(lietsi.chucvu)}</div>
          <div className="dib width5per">{lietsi.lo}</div>
          <div className="dib width5per">{lietsi.hang}</div>
          <div className="dib width5per">{lietsi.mo}</div>
          <AdEditorCreate action="edit" LietSi={lietsi} key={lietsi.mahoso} />
          <AdDelete LietSi={lietsi} />
        </div>
      );
    });
  }, [lietSiOnCurrentPage]);

  return (
    <div>
      <div className="w-90 Tablemargin br2 shadow-4 dib pa3 bg-white">
        <div className="pa2 gray f7">
          <strong
            className="dib width3per pointer grow hover-black"
            onClick={() => SortBy("mahoso")}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;MÃ
          </strong>
          <strong
            className="dib w-20 pointer grow hover-black"
            onClick={() => SortBy("hovaten")}
          >
            &nbsp;&nbsp;&nbsp;HỌ VÀ TÊN
          </strong>
          <strong
            className="dib w-20 pointer grow hover-black"
            onClick={() => SortBy("quequan")}
          >
            &nbsp;&nbsp;QUÊ QUÁN
          </strong>
          <strong
            className="dib w-10 pointer grow hover-black"
            onClick={() => SortBy("namsinh")}
          >
            &nbsp;&nbsp;NĂM SINH
          </strong>
          <strong
            className="dib w-10 pointer grow hover-black"
            onClick={() => SortBy("nammat")}
          >
            &nbsp;&nbsp;NĂM MẤT
          </strong>
          <strong
            className="dib w-10 pointer grow hover-black"
            onClick={() => SortBy("donvi")}
          >
            &nbsp;ĐƠN VỊ
          </strong>
          <strong
            className="dib w-10 pointer grow hover-black"
            onClick={() => SortBy("chucvu")}
          >
            CẤP BẬC
          </strong>
          <strong
            className="dib width5per pointer grow hover-black"
            onClick={() => SortBy("lo")}
          >
            LÔ
          </strong>
          <strong
            className="dib width5per pointer grow hover-black"
            onClick={() => SortBy("hang")}
          >
            HÀNG
          </strong>
          <strong
            className="dib width5per pointer grow hover-black"
            onClick={() => SortBy("mo")}
          >
            MỘ
          </strong>
          <strong className="dib width3per"></strong>
          <strong className="dib width3per ml1"></strong>
        </div>
        <div className="DsLietSiHeight overflow-y-scroll f7" id="scrollbar">
          {renderDanhSach}
        </div>
        <AdPagination
          AmountofPage={AmountofPage}
          CurrentPage={CurrentPage}
          OnPageChoose={OnPageChoose}
          SoLuongLietSi={SoLuongLietSi}
        />
      </div>
      <div className="SearchBarfontsize mt1 i">
        <div className="dib ">
          Số lượng liệt sĩ: <strong>{SoLuongLietSi}</strong>
        </div>
        <div className="dib">
          {" "}
          &nbsp;&nbsp; Số trang hiện có: <strong>{AmountofPage}</strong>
        </div>
        <div className="dib">
          {" "}
          &nbsp;&nbsp; Trang hiện tại: <strong>{CurrentPage + 1}</strong>
        </div>
      </div>
    </div>
  );
};

export default AdDsLietSi;
