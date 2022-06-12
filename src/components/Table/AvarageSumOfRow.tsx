import React from "react";
import { useSelectorHook } from "../../hooks/useSelectorHook";
import { MatrixCell, MatrixCells } from "../../types/table";

const AvarageSumOfRow = () => {
  const { matrix } = useSelectorHook((state) => state.table);

  const rowSums: number[] = matrix.map((cells: MatrixCells) => {
    return cells.value.reduce(
      (resultNumber: number, cell: MatrixCell) => resultNumber + cell.value,
      0
    );
  });

  const sumColumnsSum: number = rowSums.reduce(
    (resultNumber: number, number: number) => resultNumber + number,
    0
  );

  const averageOverColumnSums: number =
    !sumColumnsSum || !matrix.length
      ? 0
      : Math.floor(sumColumnsSum / matrix.length);

  return <td className="avarage-sum">{averageOverColumnSums}</td>;
};

export default AvarageSumOfRow;
