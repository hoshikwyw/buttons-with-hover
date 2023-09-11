import React from "react";
import NormalBtn from "./001/NormalBtn";
import "./App.css";
import NormalLeft from "./002/NormalLeft";
import NormalRight from "./003/NormalRight";
import NormalTop from "./004/NormalTop";
import NormalBottom from "./005/NormalBottom";
import NormalMiddle from "./006/NormalMiddle";

const App = () => {
  return (
    <div className="  bg-[#e0dfdfa9] h-screen">
      <h2 className=" brandy uppercase font-serif font-bold text-2xl text-center py-4 tracking-widest">
        Button with hover effects
      </h2>
      <div className=" mx-5 my-3">
        <h2 className=" font-semibold tracking-widest text-xl underline text-[#61614c]">Normal Hover Effects</h2>
        <div className=" flex gap-5 mt-3 mx-3">
          <NormalBtn />
          <NormalLeft />
          <NormalRight />
          <NormalTop />
          <NormalBottom />
          <NormalMiddle />
        </div>
      </div>
    </div>
  );
};

export default App;
