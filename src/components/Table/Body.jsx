import React from "react";
import AvarageSumOfRow from "./AvarageSumOfRow";
import ColumnAverage from "./columnAverage";
import Columns from "./Columns";

const Body = ({ matrixState, setmatrixState }) => {
  return (
    <>
      <Columns matrixState={matrixState} setmatrixState={setmatrixState} />
      <tr>
        <th scope="row">AVG</th>
        <ColumnAverage matrixState={matrixState} />
        <AvarageSumOfRow matrixState={matrixState} />
      </tr>
    </>
  );
};

export default Body;
