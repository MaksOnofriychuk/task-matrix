import React from "react";

const ColumnAverage = ({ matrixState }) => {
  const sumByColumnsArray = matrixState.reduce((accArr, arr) => {
    arr.forEach((obj, index) => {
      accArr[index] = (accArr[index] || 0) + obj.value;
    });
    return accArr;
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
