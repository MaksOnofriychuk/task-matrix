import React from "react";

const ColumnAverage = ({ newAvarageColumn }) => {
  return (
    <>
      {newAvarageColumn.map((col) => {
        return <td key={Math.random() * 10000}>{col}</td>;
      })}
    </>
  );
};

export default ColumnAverage;
