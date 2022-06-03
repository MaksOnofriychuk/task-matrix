import React from "react";
import AvarageSumOfRow from "./AvarageSumOfRow";
import ColumnAverage from "./columnAverage";
import Columns from "./Columns";

const Body = ({ matrixState, setmatrxState }) => {
  const avarageColum = matrixState.reduce((accArr, arr) => {
    arr.forEach((obj, index) => {
      accArr[index] = (accArr[index] || 0) + obj.value;
    });
    return accArr;
  }, []);

  const newAvarageColumn = avarageColum.map((num) =>
    Math.floor(num / Number(matrixState.length))
  );

  let rowSums = matrixState.map((arrOfObj) => {
    let sumRow = arrOfObj.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);
    return sumRow;
  });

  const sumColumnsSum = rowSums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const averageOverColumnSums =
    sumColumnsSum === 0 || matrixState.length === 0
      ? 0
      : Math.floor(sumColumnsSum / matrixState.length);

  return (
    <>
      <Columns matrixState={matrixState} setmatrxState={setmatrxState} />
      <tr>
        <th scope="row">AVG</th>
        <ColumnAverage newAvarageColumn={newAvarageColumn} />
        <AvarageSumOfRow averageOverColumnSums={averageOverColumnSums} />
      </tr>
    </>
  );
};

export default Body;
