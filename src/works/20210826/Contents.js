import React, { useEffect } from "react";

const Contents = (props) => {
  const { msg } = props;
  useEffect(() => {
    console.log("Contents rendered!!!");
  });
  return <div>{`msg : ${msg} selected!!!`}</div>;
};

export default Contents;
