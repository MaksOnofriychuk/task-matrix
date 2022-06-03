import React, { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
  const [columnsState, setColumnsState] = useState(0);
  const [rowsState, setRowsState] = useState(0);
  const [tableState, setTableState] = useState("");

  const getFormState = (obj) => {
    setTableState(obj);
    setColumnsState(Number(obj.columns));
    setRowsState(Number(obj.rows));
  };

  const columnsArray = Array(columnsState)
    .fill(0)
    .map((c, i) => i + 1);

  const rowsArray = Array(rowsState)
    .fill(0)
    .map((c, i) => i + 1);

  const matrixArray = rowsArray.map((el) => {
    return columnsArray.map((item) => ({
      id: Date.now() * Math.random(),
      value: Math.floor(Math.random() * 10),
    }));
  });

  return (
    <div className="matrix">
      <div className="wrapper">
        <Header />
        <div className="matrix__content">
          <Form getFormState={(obj) => getFormState(obj)} />

          {tableState && (
            <Table matrixArray={matrixArray} columnsArray={columnsArray} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
