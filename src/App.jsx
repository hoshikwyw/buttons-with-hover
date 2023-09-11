import React from "react";
import NormalBtn from "./001/NormalBtn";
import "./App.css";

const App = () => {
  return (
    <div className="  bg-[#e0dfdfa9] h-screen">
      <h2 className=" brandy uppercase font-serif font-bold text-2xl text-center py-4 tracking-widest">
        Button with hover effects
      </h2>
      <div className=" mx-5 my-3">
        <NormalBtn />
      </div>
    </div>
  );
};

export default App;
