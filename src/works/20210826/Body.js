import React, { useState, useEffect } from "react";
import Contents from "./Contents";
import ButtonGroup from "./ButtonGroup";

const Body = () => {
  const [msg, setMsg] = useState(1);
  const clickMsg = (val) => {
    setMsg(val);
  };
  useEffect(() => {
    console.log("Body rendered!!!");
  });
  return (
    <>
      <ButtonGroup clickMsg={clickMsg} />
      <Contents msg={msg} />
    </>
  );
};

export default Body;
