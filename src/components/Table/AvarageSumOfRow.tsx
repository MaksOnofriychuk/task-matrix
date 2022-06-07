import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { MatrixCell, MatrixCells } from "../../types/table";

const AvarageSumOfRow = () => {
  const { matrix } = useTypedSelector((state) => state.table);

  const rowSums = matrix.map((columns: MatrixCells) => {
    return columns.value.reduce(
      (resultNumber: number, cell: MatrixCell) => resultNumber + cell.value,
      0
    );
  });

  const sumColumnsSum = rowSums.reduce(
    (resultNumber: number, number: number) => resultNumber + number,
    0
  );

  const averageOverColumnSums =
    !sumColumnsSum || !matrix.length
      ? 0
      : Math.floor(sumColumnsSum / matrix.length);

  return <td>{averageOverColumnSums}</td>;
};

export default AvarageSumOfRow;
