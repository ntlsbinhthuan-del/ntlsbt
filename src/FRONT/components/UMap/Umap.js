import React from "react";
import "./UMap.css";
import Map from "./components/Map";

export const UMap = ({ lietSiDangHienThi, OnSearchClick }) => {
  let a = lietSiDangHienThi.lo;

  return (
    <div className="tc MapContainer">
      <style
        dangerouslySetInnerHTML={{
          __html: `.L${a} {fill:red!important; animation: blinker 2s ease infinite; } @keyframes blinker {
  50% {
    opacity: 0.2;
  }
} path {cursor:pointer} text {cursor:pointer}`,
        }}
      />
      <Map OnSearchClick={OnSearchClick} />
    </div>
  );
};
