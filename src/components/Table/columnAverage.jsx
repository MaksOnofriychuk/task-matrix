import React from "react";
import { useSelector } from "react-redux";

const ColumnAverage = () => {
  const { matrixState } = useSelector((state) => state.table);
  const sumByColumnsArray = matrixState.reduce((resultArr, arr) => {
    arr.forEach((cell, index) => {
      resultArr[index] = (resultArr[index] || 0) + cell.value;
    });
    return resultArr;
  }, []);

  const columnAvarageArray = sumByColumnsArray.map((num) =>
    Math.floor(num / Number(matrixState.length))
  );

  return (
    <>
      {columnAvarageArray.map((number, index) => (
        <td key={number + index}>{number}</td>
      ))}
    </>
  );
};

export default ColumnAverage;
