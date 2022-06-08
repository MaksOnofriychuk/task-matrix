import React from "react";
import Body from "./Body";
import Header from "./Header";
import "./table.scss";
import { useActions } from "../../hooks/useActions";

const Table = () => {
  const { addedRow } = useActions();

  const addedingRow = () => {
    addedRow();
  };

  return (
    <div className="matrix__content-table">
      <button onClick={addedingRow}>add row</button>
      <table className="table">
        <Header />
        <Body />
      </table>
    </div>
  );
};

export default Table;
