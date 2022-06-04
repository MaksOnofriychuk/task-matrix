import React from "react";

const ColumnAverage = ({ matrixState }) => {
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
