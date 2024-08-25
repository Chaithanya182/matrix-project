import React from "react";
import "./index.css";

const Box = ({ color, handleClick, index }) => {
  return (
    <div className={`box ${color}`} onClick={() => handleClick(index)}>
      <div className="box-content"></div>
    </div>
  );
};

export default Box;
