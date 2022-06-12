import React from "react";
import { useSelectorHook } from "../../hooks/useSelectorHook";
import { MatrixCell, MatrixCells } from "../../types/table";

const ColumnAverage = () => {
  const { matrix } = useSelectorHook((state) => state.table);

  const sumByColumnsArray: number[] = matrix.reduce(
    (resultArr: number[], cells: MatrixCells) => {
      cells.value.forEach((cell: MatrixCell, index: number) => {
        resultArr[index] = (resultArr[index] || 0) + cell.value;
      });
      return resultArr;
    },
    []
  );

  const columnAvarageArray: number[] = sumByColumnsArray.map((num: number) =>
    Math.floor(num / Number(matrix.length))
  );

  return (
    <>
      {columnAvarageArray.map((number: number, index: number) => (
        <td className="column-average" key={`${number}${index}`}>
          {number}
        </td>
      ))}
    </>
  );
};

export default ColumnAverage;
