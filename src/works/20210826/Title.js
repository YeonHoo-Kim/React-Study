import React, { useEffect } from "react";

const Title = () => {
  useEffect(() => {
    console.log("Title rendered!!!");
  });
  return <div>This is Title!!!</div>;
};

export default Title;
