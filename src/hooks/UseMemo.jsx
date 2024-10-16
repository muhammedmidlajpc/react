import React, { useMemo } from "react";
const expensiveCalc = (num) => {
  console.log("calculating...");
  return num * 2;
};
const UseMemo = ({ number, otherState }) => {
  console.log("rendering");
  //   const computedResult = expensiveCalc(78);
  const computedResult = useMemo(() => expensiveCalc(number), [number]);
  console.log(computedResult);
  
  return <div>{computedResult}</div>;

};

export default UseMemo;
