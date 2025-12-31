"use client";
import Header from "./Header";
import useSticky from "../_lib/useSticky";
export default function StickyHeader() {
  const {isSticky} = useSticky()
  return (<><Header/>
      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl rounded-b-2xl shadow-md transition-transform backdrop-blur-lg duration-300 px-0 sm:px-3 z-10 bg-gradient-to-br from-slate-100/50 to-slate-200/60 ${
          isSticky ? "translate-y-0" : "-translate-y-full"
        }`}
      >
       <Header/>
       </div></>
  );
}
