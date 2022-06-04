import React from "react";

const AvarageSumOfRow = ({ matrixState }) => {
  let rowSums = matrixState.map((arrOfObj) => {
    return arrOfObj.reduce((acc, curr) => acc + curr.value, 0);
  });

  const sumColumnsSum = rowSums.reduce((acc, curr) => acc + curr, 0);

  const averageOverColumnSums =
    !sumColumnsSum || !matrixState.length
      ? 0
      : Math.floor(sumColumnsSum / matrixState.length);

  return <td>{averageOverColumnSums}</td>;
};

export default AvarageSumOfRow;
