import React, { useState } from "react";
import Body from "./Body";
import Title from "./Title";
import "./table.scss";

const Table = ({ matrixArray, columnsArray }) => {
  const [matrixState, setmatrixState] = useState(matrixArray);

  const addRow = () => {
    setmatrixState((prev) => [
      ...prev,
      columnsArray.map((item) => ({
        id: Date.now() * Math.random(),
        value: Math.floor(Math.random() * 10),
      })),
    ]);
  };

  return (
    <div className="matrix__content-table">
      <button onClick={() => addRow()}>add row</button>
      <table className="table">
        <thead>
          <Title columnsArray={columnsArray} matrixState={matrixState} />
        </thead>
        <tbody>
          <Body
            matrixState={matrixState}
            setmatrixState={setmatrixState}
            columnsArray={columnsArray}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
