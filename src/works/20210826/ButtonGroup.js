import React, { useEffect } from "react";

const ButtonGroup = (props) => {
  const { clickMsg } = props;

  useEffect(() => {
    console.log("ButtonGroup rendered!!!");
  });
  return (
    <div>
      <button onClick={() => clickMsg(1)}>First</button>
      <button onClick={() => clickMsg(2)}>Second</button>
      <button onClick={() => clickMsg(3)}>Third</button>
    </div>
  );
};

export default ButtonGroup;
