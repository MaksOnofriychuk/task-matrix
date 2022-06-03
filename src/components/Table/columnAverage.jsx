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
      {columnAvarageArray.map((col) => {
        return <td key={Math.random() * 10000}>{col}</td>;
      })}
    </>
  );
};

export default ColumnAverage;
