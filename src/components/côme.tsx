"use client";

import React from "react";
import { useState } from "react";

export function Come() {
  //state
  const [x, setX] = useState(5);
  //comportement
  const handleClick = () => {
    alert("clicked");
    setX(x + 3);
    console.log(x);
  };
  //render
  return (
    <div
      className="bg-red-50 flex"
      onClick={handleClick}
    >
        <div className="ml-auto">{x}</div>
      
    </div>
  );
}
