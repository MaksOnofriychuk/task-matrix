import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { MatrixCell, MatrixCells } from "../../types/table";

const ColumnAverage = () => {
  const { matrix } = useTypedSelector((state) => state.table);

  const sumByColumnsArray = matrix.reduce(
    (resultArr: number[], cells: MatrixCells) => {
      cells.value.forEach((cell: MatrixCell, index: number) => {
        resultArr[index] = (resultArr[index] || 0) + cell.value;
      });
      return resultArr;
    },
    []
  );

  const columnAvarageArray = sumByColumnsArray.map((num: number) =>
    Math.floor(num / Number(matrix.length))
  );

  return (
    <>
      {columnAvarageArray.map((number: number, index: number) => (
        <td key={`${number}${index}`}>{number}</td>
      ))}
    </>
  );
};

export default ColumnAverage;
