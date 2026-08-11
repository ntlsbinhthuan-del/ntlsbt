import { ScaleLoader } from "react-spinners";
import React from "react";
export const AdLoading = () => {
  return (
    <ScaleLoader
      css={{
        position: "absolute",
        left: "50%",
        top: "50%",
        margin: "-4px 0 0 -30px"
      }}
      sizeUnit={"px"}
      width={8}
      height={60}
      color={"#516a72"}
      loading={true}
    />
  );
};
