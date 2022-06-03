import React, { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import "./App.scss";

function App() {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  // const [cells, setCells] = useState(0);
  const [tableState, setTableState] = useState("");

  const getFormState = (obj) => {
    setTableState(obj);
    setColumns(Number(obj.columns));
    setRows(Number(obj.rows));
    // setCells(Number(obj.cells));
  };

  const columnsArray = Array(columns)
    .fill(0)
    .map((c, i) => i + 1);

  const rowsArray = Array(rows)
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
          {tableState !== "" ? (
            <Table matrixArray={matrixArray} columnsArray={columnsArray} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
