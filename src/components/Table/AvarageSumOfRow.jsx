import React from "react";

const AvarageSumOfRow = ({ matrixState }) => {
  let rowSums = matrixState.map((arrOfObj) => {
    let sumRow = arrOfObj.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);
    return sumRow;
  });

  const sumColumnsSum = rowSums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const averageOverColumnSums =
    !sumColumnsSum || matrixState.length === 0
      ? 0
      : Math.floor(sumColumnsSum / matrixState.length);

  return <td>{averageOverColumnSums}</td>;
};

export default AvarageSumOfRow;
