import React from "react";
import AvarageSumOfRow from "./AvarageSumOfRow";
import ColumnAverage from "./columnAverage";
import Columns from "./Columns";

const Body = () => {
  return (
    <tbody>
      <Columns />
      <tr>
        <th scope="row">AVG</th>
        <ColumnAverage />
        <AvarageSumOfRow />
      </tr>
    </tbody>
  );
};

export default Body;
