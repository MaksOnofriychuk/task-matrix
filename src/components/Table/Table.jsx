import React, { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import { nanoid } from "nanoid";
import "./table.scss";

const Table = ({ matrixArray, columnsArray, cellIdSize }) => {
  const [matrixState, setMatrixState] = useState(matrixArray);

  const addedingRow = () => {
    setMatrixState((prevState) => [
      ...prevState,
      columnsArray.map((column) => ({
        id: nanoid(cellIdSize),
        value: Math.floor(Math.random() * 1000),
      })),
    ]);
  };

  return (
    <div className="matrix__content-table">
      <button onClick={addedingRow}>add row</button>
      <table className="table">
        <Header columnsArray={columnsArray} matrixState={matrixState} />
        <Body
          matrixState={matrixState}
          setMatrixState={setMatrixState}
          columnsArray={columnsArray}
        />
      </table>
    </div>
  );
};

export default Table;
