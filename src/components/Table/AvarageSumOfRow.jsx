import React from "react";
import { useSelector } from "react-redux";

const AvarageSumOfRow = () => {
  const { matrixState } = useSelector((state) => state.table);
  const rowSums = matrixState.map((columns) => {
    return columns.reduce((resultNumber, cell) => resultNumber + cell.value, 0);
  });

  const sumColumnsSum = rowSums.reduce(
    (resultNumber, number) => resultNumber + number,
    0
  );

  const averageOverColumnSums =
    !sumColumnsSum || !matrixState.length
      ? 0
      : Math.floor(sumColumnsSum / matrixState.length);

  return <td>{averageOverColumnSums}</td>;
};

export default AvarageSumOfRow;
