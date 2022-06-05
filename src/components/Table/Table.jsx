import React from "react";
import Body from "./Body";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addedRow } from "../../redux/Table";
import "./table.scss";

const Table = () => {
  const dispatch = useDispatch();

  const addedingRow = () => {
    dispatch(addedRow());
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
