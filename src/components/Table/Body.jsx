import React from "react";
import AvarageSumOfRow from "./AvarageSumOfRow";
import ColumnAverage from "./columnAverage";
import Columns from "./Columns";

const Body = ({ matrixState, setMatrixState }) => {
  return (
    <tbody>
      <Columns matrixState={matrixState} setMatrixState={setMatrixState} />
      <tr>
        <th scope="row">AVG</th>
        <ColumnAverage matrixState={matrixState} />
        <AvarageSumOfRow matrixState={matrixState} />
      </tr>
    </tbody>
  );
};

export default Body;
