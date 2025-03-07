import React from "react";

function Background() {
  return (
    <>
    <div className="w-full h-screen fixed z-[2]">
      <div className="navbar absolute top-[5%] w-full py-10 flex justify-center font-semibold text-zinc-200 text-xl">
        Documents.
      </div>
      <h1 className="text-[13vw] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-200">
        Docs
      </h1>
      </div>
    </>
  );
}

export default Background;
