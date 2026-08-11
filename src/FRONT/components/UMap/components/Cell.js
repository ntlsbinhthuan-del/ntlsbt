import React from "react";

function Cell({
  id,
  cellFindingHandler,
  pathDef,
  pathClassName,
  textTransform,
  textContent,
}) {
  return (
    <>
      <text
        fontFamily="'MyriadPro-Semibold'"
        fontSize="800px"
        transform={`${textTransform} scale(1,-1)`}
        id={id}
        className="hover-bg-gray"
        onClick={cellFindingHandler}
      >
        {textContent}
      </text>
      <path
        id={id}
        onClick={cellFindingHandler}
        className={`hover-bg-gray ${pathClassName}`}
        fill="#E0E0E0"
        stroke="#000000"
        strokeWidth="2"
        d={pathDef}
      />

    </>
  );
}

export default Cell;
