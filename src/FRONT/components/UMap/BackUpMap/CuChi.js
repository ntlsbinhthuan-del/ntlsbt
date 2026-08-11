import React from "react";
import "./UMap.css";

export const UMap = ({ lietSiDangHienThi, OnSearchClick }) => {
  let a = lietSiDangHienThi.lo;
  const TimTheoLo = event => {
    const ThongTinCanTim = { lo: event.target.getAttribute("id") };
    OnSearchClick(ThongTinCanTim);
  };

  return (
    <div className="tc MapContainer">
      <style
        dangerouslySetInnerHTML={{
          __html: `.${a} {fill:yellow!important; animation: blinker 2s ease infinite; } @keyframes blinker {
  50% {
    opacity: 0.2;
  }
} path {cursor:pointer} text {cursor:pointer}`
        }}
      />
      {/* SVG nghĩa trang Củ Chi */}
      <svg
        id="Layer_1"
        version="1.1"
        viewBox="0 0 1311 1490.1"
        x="0px"
        y="0px"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M55.3,33.4"
            fill="#00E710"
            stroke="#BBFFB9"
            strokeWidth="10"
          />
          <line
            fill="none"
            stroke="#BBFFB9"
            strokeWidth="10"
            x1="1262.7"
            x2="1262.7"
            y1="33.3"
            y2="33.3"
          />
          <rect
            height="1454.5"
            width="1273.7"
            fill="#F7F7F7"
            stroke="#757070"
            strokeWidth="4"
            x="20.6"
            y="23.5"
          />
          <path
            onClick={TimTheoLo}
            id="C3"
            className="C3 hover-bg-gray"
            d="M1228.9,696.2h-171.3c-2.4,0-4.3-1.9-4.3-4.3&#xA;            V520.6c0-2.4,1.9-4.3,4.3-4.3h171.3c2.4,0,4.3,1.9,4.3,4.3v171.3C1233.2,694.3,1231.3,696.2,1228.9,696.2z"
            fill="#E0E0E0"
            stroke="#000000"
            strokeWidth="10"
          />
          <path
            onClick={TimTheoLo}
            id="C2"
            className="C2 hover-bg-gray"
            d="M1228.9,479.3h-171.3c-2.4,0-4.3-1.9-4.3-4.3&#xA;            V303.6c0-2.4,1.9-4.3,4.3-4.3h171.3c2.4,0,4.3,1.9,4.3,4.3v171.3C1233.2,477.3,1231.3,479.3,1228.9,479.3z"
            fill="#E0E0E0"
            stroke="#000000"
            strokeWidth="10"
          />
          <path
            onClick={TimTheoLo}
            id="A4"
            className="A4 hover-bg-gray"
            d="M600.5,528.1&#xA;            v78.1h72.4c9.7,0,17.6,7.9,17.6,17.6v72.4h78c6.6,0,12-5.4,12-12v-156c0-6.6-5.4-12-12-12H612.4&#xA;            C605.8,516.2,600.5,521.6,600.5,528.1z"
            fill="#E0E0E0"
            stroke="#000000"
            strokeLinecap="round"
          />
          <path
            onClick={TimTheoLo}
            id="A4"
            className="A4 hover-bg-gray"
            d="M995.6,696.2H824.2c-2.4,0-4.3-1.9-4.3-4.3V520.6&#xA;            c0-2.4,1.9-4.3,4.3-4.3h171.3c2.4,0,4.3,1.9,4.3,4.3v171.3C999.9,694.3,998,696.2,995.6,696.2z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B4"
            className="B4 hover-bg-gray"
            d="M83.1,696.2h171.3c2.4,0,4.3-1.9,4.3-4.3V520.6&#xA;            c0-2.4-1.9-4.3-4.3-4.3H83.1c-2.4,0-4.3,1.9-4.3,4.3v171.3C78.8,694.3,80.7,696.2,83.1,696.2z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B4"
            className="B4 hover-bg-gray"
            d="M478.2,529.6&#xA;            v76.6h-72.4c-9.7,0-17.6,7.9-17.6,17.6v72.4h-76.6c-7.4,0-13.4-6-13.4-13.4V529.6c0-7.4,6-13.4,13.4-13.4h153.2&#xA;            C472.2,516.2,478.2,522.2,478.2,529.6z"
            fill="#E0E0E0"
            stroke="#000000"
            strokeLinecap="round"
          />
          <path
            onClick={TimTheoLo}
            id="A1"
            className="A1 hover-bg-gray"
            d="M602.1,1347h171.3c2.4,0,4.3-1.9,4.3-4.3v-171.3&#xA;            c0-2.4-1.9-4.3-4.3-4.3H602.1c-2.4,0-4.3,1.9-4.3,4.3v171.3C597.8,1345.1,599.7,1347,602.1,1347z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="A1"
            className="A1 hover-bg-gray"
            d="M992.9,1347H821.6c-2.4,0-4.3-1.9-4.3-4.3v-171.3&#xA;            c0-2.4,1.9-4.3,4.3-4.3h171.3c2.4,0,4.3,1.9,4.3,4.3v171.3C997.2,1345.1,995.3,1347,992.9,1347z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="A2"
            className="A2 hover-bg-gray"
            d="M602.1,1130.1h171.3c2.4,0,4.3-1.9,4.3-4.3V954.4&#xA;            c0-2.4-1.9-4.3-4.3-4.3H602.1c-2.4,0-4.3,1.9-4.3,4.3v171.3C597.8,1128.2,599.7,1130.1,602.1,1130.1z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="A2"
            className="A2 hover-bg-gray"
            d="M992.9,1130.1H821.6c-2.4,0-4.3-1.9-4.3-4.3V954.4&#xA;            c0-2.4,1.9-4.3,4.3-4.3h171.3c2.4,0,4.3,1.9,4.3,4.3v171.3C997.2,1128.2,995.3,1130.1,992.9,1130.1z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B1"
            className="B1 hover-bg-gray"
            d="M86.2,1347h171.3c2.4,0,4.3-1.9,4.3-4.3v-171.3&#xA;            c0-2.4-1.9-4.3-4.3-4.3H86.2c-2.4,0-4.3,1.9-4.3,4.3v171.3C81.9,1345.1,83.8,1347,86.2,1347z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B1"
            className="B1 hover-bg-gray"
            d="M477,1347H305.7c-2.4,0-4.3-1.9-4.3-4.3v-171.3&#xA;            c0-2.4,1.9-4.3,4.3-4.3H477c2.4,0,4.3,1.9,4.3,4.3v171.3C481.3,1345.1,479.4,1347,477,1347z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B2"
            className="B2 hover-bg-gray"
            d="M86.2,1130.1h171.3c2.4,0,4.3-1.9,4.3-4.3V954.4&#xA;            c0-2.4-1.9-4.3-4.3-4.3H86.2c-2.4,0-4.3,1.9-4.3,4.3v171.3C81.9,1128.2,83.8,1130.1,86.2,1130.1z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B2"
            className="B2 hover-bg-gray"
            d="M477,1130.1H305.7c-2.4,0-4.3-1.9-4.3-4.3V954.4&#xA;            c0-2.4,1.9-4.3,4.3-4.3H477c2.4,0,4.3,1.9,4.3,4.3v171.3C481.3,1128.2,479.4,1130.1,477,1130.1z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B5"
            className="B5 hover-bg-gray"
            d="M86.2,479.3h171.3c2.4,0,4.3-1.9,4.3-4.3V303.6&#xA;            c0-2.4-1.9-4.3-4.3-4.3H86.2c-2.4,0-4.3,1.9-4.3,4.3v171.3C81.9,477.3,83.8,479.3,86.2,479.3z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B5"
            className="B5 hover-bg-gray"
            d="M477,479.3H305.7c-2.4,0-4.3-1.9-4.3-4.3V303.6&#xA;            c0-2.4,1.9-4.3,4.3-4.3H477c2.4,0,4.3,1.9,4.3,4.3v171.3C481.3,477.3,479.4,479.3,477,479.3z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B6"
            className="B6 hover-bg-gray"
            d="M86.2,262.3h171.3c2.4,0,4.3-1.9,4.3-4.3V86.7&#xA;            c0-2.4-1.9-4.3-4.3-4.3H86.2c-2.4,0-4.3,1.9-4.3,4.3V258C81.9,260.4,83.8,262.3,86.2,262.3z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B6"
            className="B6 hover-bg-gray"
            d="M477,262.3H305.7c-2.4,0-4.3-1.9-4.3-4.3V86.7&#xA;            c0-2.4,1.9-4.3,4.3-4.3H477c2.4,0,4.3,1.9,4.3,4.3V258C481.3,260.4,479.4,262.3,477,262.3z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B3"
            className="B3 hover-bg-gray"
            d="M84.9,913.1h171.3c2.4,0,4.3-1.9,4.3-4.3V737.5&#xA;            c0-2.4-1.9-4.3-4.3-4.3H84.9c-2.4,0-4.3,1.9-4.3,4.3v171.3C80.6,911.2,82.5,913.1,84.9,913.1z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="B3"
            className="B3 hover-bg-gray"
            d="M391.7,733.2v180h-74c-9.7,0-17.6-7.8-17.6-17.6V750.8&#xA;            c0-9.7,7.9-17.6,17.6-17.6H391.7z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="A3"
            className="A3 hover-bg-gray"
            d="M995.8,913.2H824.5c-2.4,0-4.3-1.9-4.3-4.3V737.5&#xA;            c0-2.4,1.9-4.3,4.3-4.3h171.3c2.4,0,4.3,1.9,4.3,4.3v171.3C1000.2,911.2,998.2,913.2,995.8,913.2z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="A3"
            className="A3 hover-bg-gray"
            d="M689.1,733.2v180h74c9.7,0,17.6-7.8,17.6-17.6V750.8&#xA;            c0-9.7-7.9-17.6-17.6-17.6H689.1z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="A5"
            className="A5 hover-bg-gray"
            d="M602.1,479.3h171.3c2.4,0,4.3-1.9,4.3-4.3V303.6&#xA;            c0-2.4-1.9-4.3-4.3-4.3H602.1c-2.4,0-4.3,1.9-4.3,4.3v171.3C597.8,477.3,599.7,479.3,602.1,479.3z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="A5"
            className="A5 hover-bg-gray"
            d="M992.9,479.3H821.6c-2.4,0-4.3-1.9-4.3-4.3V303.6&#xA;            c0-2.4,1.9-4.3,4.3-4.3h171.3c2.4,0,4.3,1.9,4.3,4.3v171.3C997.2,477.3,995.3,479.3,992.9,479.3z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="A6"
            className="A6 hover-bg-gray"
            d="M602.1,262.3h171.3c2.4,0,4.3-1.9,4.3-4.3V86.7&#xA;            c0-2.4-1.9-4.3-4.3-4.3H602.1c-2.4,0-4.3,1.9-4.3,4.3V258C597.8,260.4,599.7,262.3,602.1,262.3z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="A6"
            className="A6 hover-bg-gray"
            d="M992.9,262.3H821.6c-2.4,0-4.3-1.9-4.3-4.3V86.7&#xA;            c0-2.4,1.9-4.3,4.3-4.3h171.3c2.4,0,4.3,1.9,4.3,4.3V258C997.2,260.4,995.3,262.3,992.9,262.3z"
            fill="#E0E0E0"
            stroke="#000000"
          />
          <path
            onClick={TimTheoLo}
            id="C1"
            className="C1 hover-bg-gray"
            d="M1228.9,262.3h-171.3c-2.4,0-4.3-1.9-4.3-4.3&#xA;            V86.7c0-2.4,1.9-4.3,4.3-4.3h171.3c2.4,0,4.3,1.9,4.3,4.3V258C1233.2,260.4,1231.3,262.3,1228.9,262.3z"
            fill="#E0E0E0"
            stroke="#000000"
            strokeWidth="10"
          />
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 1109.0684 191.6292)"
            id="C1"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            C1
          </text>
          <g>
            <path
              d="M646.6,630.6c11.4,0,20.7,7.5,20.7,16.7v48.8"
              fill="#F7F7F7"
              stroke="#757070"
            />
            <path
              d="M413.5,696.2v-50.1c0-9.3,9.3-16.7,20.7-16.7"
              fill="#F7F7F7"
              stroke="#757070"
            />
            <path
              d="M413.5,733.2v170.5c0,12.5,9.3,22.6,20.7,22.6"
              fill="#F7F7F7"
              stroke="#757070"
            />
            <line
              fill="none"
              stroke="#636566"
              strokeLinecap="round"
              x1="499.1"
              x2="499.1"
              y1="927.6"
              y2="1333.1"
            />
            <line
              fill="none"
              stroke="#636566"
              strokeLinecap="round"
              x1="495.6"
              x2="495.6"
              y1="628"
              y2="92.4"
            />
            <line
              fill="none"
              stroke="#636566"
              strokeLinecap="round"
              x1="495.6"
              x2="430.6"
              y1="629.4"
              y2="629.4"
            />
            <path
              d="M666.2,736.1v170.5c0,12.5-9.3,22.6-20.7,22.6"
              fill="#F7F7F7"
              stroke="#666666"
            />
            <line
              fill="none"
              stroke="#636566"
              strokeLinecap="round"
              x1="581.6"
              x2="581.6"
              y1="929.1"
              y2="1333.1"
            />
            <line
              fill="none"
              stroke="#636566"
              strokeLinecap="round"
              x1="585.1"
              x2="585.1"
              y1="629.5"
              y2="93.9"
            />
            <line
              fill="none"
              stroke="#636566"
              strokeLinecap="round"
              x1="585.1"
              x2="650.1"
              y1="630.9"
              y2="630.9"
            />
            <line
              fill="none"
              stroke="#636566"
              strokeLinecap="round"
              x1="434.1"
              x2="499.1"
              y1="926.5"
              y2="926.5"
            />
            <line
              fill="none"
              stroke="#636566"
              strokeLinecap="round"
              x1="581.6"
              x2="646.6"
              y1="929.1"
              y2="929.1"
            />
            <g>
              <line
                fill="none"
                stroke="#999999"
                strokeLinecap="round"
                strokeWidth="3"
                x1="448.5"
                x2="448.5"
                y1="708.4"
                y2="679.3"
              />
              <line
                fill="none"
                stroke="#999999"
                strokeLinecap="round"
                strokeWidth="3"
                x1="448.5"
                x2="493.2"
                y1="679.3"
                y2="679.3"
              />
            </g>
            <g>
              <line
                fill="none"
                stroke="#999999"
                strokeLinecap="round"
                strokeWidth="3"
                x1="631.7"
                x2="631.7"
                y1="708.4"
                y2="679.3"
              />
              <line
                fill="none"
                stroke="#999999"
                strokeLinecap="round"
                strokeWidth="3"
                x1="631.7"
                x2="587.1"
                y1="679.3"
                y2="679.3"
              />
            </g>
            <g>
              <line
                fill="none"
                stroke="#999999"
                strokeLinecap="round"
                strokeWidth="3"
                x1="631.1"
                x2="631.1"
                y1="747.2"
                y2="776.4"
              />
              <line
                fill="none"
                stroke="#999999"
                strokeLinecap="round"
                strokeWidth="3"
                x1="631.1"
                x2="586.5"
                y1="776.4"
                y2="776.4"
              />
            </g>
            <g>
              <line
                fill="none"
                stroke="#999999"
                strokeLinecap="round"
                strokeWidth="3"
                x1="447.9"
                x2="447.9"
                y1="747.2"
                y2="776.4"
              />
              <line
                fill="none"
                stroke="#999999"
                strokeLinecap="round"
                strokeWidth="3"
                x1="447.9"
                x2="492.6"
                y1="776.4"
                y2="776.4"
              />
            </g>
            <rect
              height="43.6"
              width="89.5"
              fill="#A6ACB2"
              stroke="#A6ACB2"
              strokeLinecap="round"
              strokeWidth="3"
              x="494.8"
              y="710"
            />
            <rect
              height="20.6"
              width="53.7"
              fill="#72767A"
              stroke="#999999"
              strokeLinecap="round"
              strokeWidth="3"
              x="512.7"
              y="722.3"
            />
          </g>
          <path
            d="M450.9,1429.1H57.5c-1.3,0-2.3-1-2.3-2.3v-28.5&#xA;            c0-1.3,1-2.3,2.3-2.3h393.4c1.3,0,2.3,1,2.3,2.3v28.5C453.2,1428.1,452.2,1429.1,450.9,1429.1z"
            fill="#8EDA35"
            stroke="#BBFFB9"
            strokeWidth="4"
          />
          <path
            d="M1251,1429.4H633.4c-1.3,0-2.3-1-2.3-2.3v-28.7&#xA;            c0-1.3,1-2.3,2.3-2.3H1251c1.3,0,2.3,1,2.3,2.3v28.7C1253.3,1428.4,1252.3,1429.4,1251,1429.4z"
            fill="#8EDA35"
            stroke="#BBFFB9"
            strokeWidth="4"
          />
          <path
            d="M1270.1,52.6H47.8c-1.2,0-2.1-0.9-2.1-2.1V35.4&#xA;            c0-1.2,0.9-2.1,2.1-2.1h1222.3c1.2,0,2.1,0.9,2.1,2.1v15.1C1272.2,51.7,1271.2,52.6,1270.1,52.6z"
            fill="#8EDA35"
            stroke="#BBFFB9"
            strokeWidth="10"
          />
          <path
            d="M64.7,48.3v1289.5c0,5.2-4.2,9.4-9.4,9.4h-0.1&#xA;            c-5.2,0-9.4-4.2-9.4-9.4V43"
            fill="#8EDA35"
            stroke="#BBFFB9"
            strokeWidth="10"
          />
          <path
            d="M1272.2,42.7v1299c0,5.1-4.2,9.4-9.4,9.4l0,0&#xA;            c-5.2,0-9.4-4.2-9.4-9.4V48.7"
            fill="#8EDA35"
            stroke="#BBFFB9"
            strokeWidth="10"
          />
          <rect
            height="53.8"
            width="71.1"
            fill="#8EDA35"
            stroke="#8EDA35"
            strokeWidth="6"
            x="1057.6"
            y="1294.9"
          />
          <path
            d="M1219.1,1263.7h-154.5c-3.8,0-7-3.1-7-7V836c0-3.8,3.1-7,7-7h154.5c3.8,0,7,3.1,7,7v420.7&#xA;            C1226.1,1260.5,1222.9,1263.7,1219.1,1263.7z"
            fill="#8EDA35"
          />
          <path
            d="M1098.8,930.6h86.1c4.7,0,8.5,3.8,8.5,8.5v214.5&#xA;            c0,4.7-3.8,8.5-8.5,8.5h-86.1c-4.7,0-8.5-3.8-8.5-8.5V939.1C1090.3,934.4,1094.1,930.6,1098.8,930.6z"
            fill="#8EDA35"
            stroke="#B3F490"
            strokeWidth="4"
          />
          <circle
            cx="1141.8"
            cy="1046.3"
            fill="#8EDA35"
            r="17.2"
            stroke="#BBFFB9"
            strokeWidth="6"
          />
          <rect
            height="31.8"
            width="52.9"
            fill="#8EDA35"
            stroke="#8EDA35"
            strokeWidth="6"
            x="1057.6"
            y="751"
          />
          <rect
            height="31.8"
            width="52.9"
            fill="#8EDA35"
            stroke="#8EDA35"
            strokeWidth="6"
            x="1173.2"
            y="751"
          />
          <rect
            height="53.8"
            width="71.1"
            fill="#8EDA35"
            stroke="#8EDA35"
            strokeWidth="6"
            x="1155"
            y="1294.9"
          />
          <path
            d="M595.9,523.9v89.2h72.4&#xA;            c7.2,0,13,5.8,13,13v75.4h308.2c7.2,0,13-5.8,13-13V523.9c0-7.2-5.8-13-13-13H608.9C601.8,510.9,595.9,516.7,595.9,523.9z"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <path
            d="M482.6,523.9v89.2h-72.4&#xA;            c-7.2,0-13,5.8-13,13v75.4H89c-7.2,0-13-5.8-13-13V523.9c0-7.2,5.8-13,13-13h380.6C476.7,510.9,482.6,516.7,482.6,523.9z"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <path
            d="M993,1352.4H603.6&#xA;            c-4.8,0-8.6-3.9-8.6-8.6v-173.5c0-4.8,3.9-8.6,8.6-8.6H993c4.8,0,8.6,3.9,8.6,8.6v173.5C1001.6,1348.5,997.8,1352.4,993,1352.4z"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 655.9795 1279.6157)"
            id="A1"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A1
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 873.0879 1277.4165)"
            id="A1"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A1
          </text>
          <path
            d="M993,1135.4H603.6&#xA;            c-4.8,0-8.6-3.9-8.6-8.6V953.4c0-4.8,3.9-8.6,8.6-8.6H993c4.8,0,8.6,3.9,8.6,8.6v173.5C1001.6,1131.6,997.8,1135.4,993,1135.4z"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 655.9893 1064.2734)"
            id="A2"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A2
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 873.0879 1064.2734)"
            id="A2"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A2
          </text>
          <path
            d="M477.1,1352.4H87.7&#xA;            c-4.8,0-8.6-3.9-8.6-8.6v-173.5c0-4.8,3.9-8.6,8.6-8.6h389.4c4.8,0,8.6,3.9,8.6,8.6v173.5C485.7,1348.5,481.9,1352.4,477.1,1352.4z&#xA;            "
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 139.0342 1279.6187)"
            id="B1"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B1
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 356.1445 1277.4165)"
            id="B1"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B1
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 139.0342 624.3572)"
            id="B4"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B4
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 872.4521 624.2029)"
            id="A4"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A4
          </text>
          <path
            d="M477.1,1135.4H87.7&#xA;            c-4.8,0-8.6-3.9-8.6-8.6V953.4c0-4.8,3.9-8.6,8.6-8.6h389.4c4.8,0,8.6,3.9,8.6,8.6v173.5C485.7,1131.6,481.9,1135.4,477.1,1135.4z"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 139.042 1064.2734)"
            id="B2"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B2
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 356.1445 1064.2734)"
            id="B2"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B2
          </text>
          <path
            d="M477.1,484.6H87.7&#xA;            c-4.8,0-8.6-3.9-8.6-8.6V302.6c0-4.8,3.9-8.6,8.6-8.6h389.4c4.8,0,8.6,3.9,8.6,8.6V476C485.7,480.8,481.9,484.6,477.1,484.6z"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 139.0342 406.9597)"
            id="B5"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B5
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 356.1445 404.7595)"
            id="B5"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B5
          </text>
          <path
            d="M477.1,267.7H87.7&#xA;            c-4.8,0-8.6-3.9-8.6-8.6V85.6c0-4.8,3.9-8.6,8.6-8.6h389.4c4.8,0,8.6,3.9,8.6,8.6v173.5C485.7,263.8,481.9,267.7,477.1,267.7z"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 139.042 191.6292)"
            id="B6"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B6
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 356.1445 191.6292)"
            id="B6"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B6
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 316.0273 627.9521)"
            id="B4"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B4
          </text>
          <path
            d="M397.2,728.2v190.7H90.6&#xA;            c-7.2,0-13-5.8-13-13V741.2c0-7.2,5.8-13,13-13H397.2z"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 139.0342 839.6943)"
            id="B3"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B3
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 316.0273 839.8914)"
            id="B3"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            B3
          </text>
          <path
            d="M682.9,728.2v190.7h306.6&#xA;            c7.2,0,13-5.8,13-13V741.2c0-7.2-5.8-13-13-13H682.9z"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 872.4521 839.5457)"
            id="A3"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A3
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 703.8574 839.8914)"
            id="A3"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A3
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 705.1865 627.9521)"
            id="A4"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A4
          </text>
          <path
            d="M993,484.6H603.6&#xA;            c-4.8,0-8.6-3.9-8.6-8.6V302.6c0-4.8,3.9-8.6,8.6-8.6H993c4.8,0,8.6,3.9,8.6,8.6V476C1001.6,480.8,997.8,484.6,993,484.6z"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 873.0879 404.7595)"
            id="A5"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A5
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 654.3154 406.9597)"
            id="A5"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A5
          </text>
          <path
            d="M993,267.7H603.6&#xA;            c-4.8,0-8.6-3.9-8.6-8.6V85.6c0-4.8,3.9-8.6,8.6-8.6H993c4.8,0,8.6,3.9,8.6,8.6v173.5C1001.6,263.8,997.8,267.7,993,267.7z"
            fill="none"
            stroke="#000000"
            strokeWidth="10"
          />
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 655.9912 191.6292)"
            id="A6"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A6
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 873.0879 191.6292)"
            id="A6"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            A6
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 1108.4326 624.2029)"
            id="C3"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            C3
          </text>
          <text
            fontFamily="'MyriadPro-Semibold'"
            fontSize="61.2376px"
            transform="matrix(1 0 0 1 1109.0684 404.7595)"
            id="C2"
            className="hover-bg-gray"
            onClick={TimTheoLo}
          >
            C2
          </text>
          <g>
            <path
              d="M539.1,1353.7c0,24.4-19.8,44.2-44.2,44.2&#xA;                  v-44.2H539.1z"
              fill="#F7F7F7"
              stroke="#000000"
              strokeWidth="10"
            />
            <path
              d="M539.1,1353.7c0,24.4,19.8,44.2,44.2,44.2&#xA;                  v-44.2H539.1z"
              fill="#F7F7F7"
              stroke="#000000"
              strokeWidth="10"
            />
          </g>
          <g>
            <polygon
              fill="#E0E0E0"
              points="539.1,1388.1 501.9,1433.6 576.4,1433.6          "
              stroke="#E0E0E0"
            />
            <rect
              height="34.4"
              width="26.5"
              fill="#E0E0E0"
              stroke="#E0E0E0"
              x="525.9"
              y="1426.6"
            />
            <rect
              height="34.4"
              width="26.5"
              fill="#E0E0E0"
              stroke="#E0E0E0"
              x="525.9"
              y="1429"
            />
            <rect
              height="34.4"
              width="26.5"
              fill="#E0E0E0"
              stroke="#E0E0E0"
              x="525.9"
              y="1431.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
