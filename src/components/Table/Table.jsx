import React, { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import "./table.scss";

const Table = ({ matrixArray, columnsArray }) => {
  const [matrixState, setMatrixState] = useState(matrixArray);

  const addedingRow = () => {
    setMatrixState((prevState) => [
      ...prevState,
      columnsArray.map((_, i) => ({
        id: `${matrixState[0][0].id} + ${i}`,
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
