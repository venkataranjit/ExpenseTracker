import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [childData, setChildData] = useState("");

  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>I am the Parent</h1>
      <h2>Data from Child: {childData}</h2>
      <Child onData={handleDataFromChild} />
    </div>
  );
};

export default Parent;
