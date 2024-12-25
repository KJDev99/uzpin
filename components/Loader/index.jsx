import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="fixed z-[1000] left-0 top-0 h-screen w-screen bg-[#494949ce] flex flex-col items-center justify-center">
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />
      <p className="text-white text-2xl mt-4">Iltimos Kuting...</p>
    </div>
  );
}
