import React from "react";

const Child = ({ onData }) => {
  const sendDataToParent = () => {
    const data = "I am data from Child";
    onData(data);  // Pass data to parent through the callback
  };

  return (
    <div>
      <h3>I am the Child</h3>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default Child;
