import React, { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
  const [columnsState, setColumnsState] = useState(0);

  const [rowsState, setRowsState] = useState(0);

  const [tableState, setTableState] = useState("");

  const getFormState = (formState) => {
    setTableState(formState);
    setColumnsState(Number(formState.columns));
    setRowsState(Number(formState.rows));
  };

  const columnsArray = Array(columnsState)
    .fill(0)
    .map((_, i) => i + 1);

  const rowsArray = Array(rowsState)
    .fill(0)
    .map((_, i) => i + 1);

  const matrixArray = rowsArray.map((_, i) => {
    return columnsArray.map((_, j) => ({
      id: `${i} + ${j}`,
      value: Math.floor(Math.random() * 1000),
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
