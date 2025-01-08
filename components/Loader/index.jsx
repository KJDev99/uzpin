import React from "react";
import { FallingLines, TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="fixed z-[1000] left-0 top-0 h-screen w-screen bg-[#000000d8] login_bg flex flex-col items-center justify-center">
      {/* <FallingLines
        color="#ffba00"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      /> */}
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#ffba00"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
