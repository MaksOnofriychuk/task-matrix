import React from "react";

export const Cell = ({ cell, setMatrixState, matrixState }) => {
  const addingCell = (cell) => {
    const newMatrixState = matrixState.map((items) =>
      items.map((item) =>
        item.id === cell.id ? { id: item.id, value: item.value + 1 } : item
      )
    );
    setMatrixState(newMatrixState);
  };

  return <td onClick={() => addingCell(cell)}>{cell.value}</td>;
};

export const RowAvarage = ({ rows }) => {
  return (
    <th>{rows ? rows.reduce((acc, curr) => acc + curr.value, 0) : null}</th>
  );
};

export const ButtonDelete = ({ matrixState, setMatrixState, index }) => {
  const deletingRow = (index) => {
    const newMatrixState = matrixState.filter((rows, i) => i !== index);
    setMatrixState(newMatrixState);
  };

  return (
    <th>
      <button onClick={() => deletingRow(index)}>x</button>
    </th>
  );
};

const Columns = ({ matrixState, setMatrixState }) => {
  return (
    <>
      {matrixState.map((rows, index) => {
        return (
          <tr key={rows[0].value}>
            <th scope="row">{index + 1}</th>
            {rows.map((cell) => {
              return (
                <Cell
                  key={cell.id}
                  cell={cell}
                  matrixState={matrixState}
                  setMatrixState={setMatrixState}
                />
              );
            })}
            <RowAvarage
              rows={rows}
              matrixState={matrixState}
              setMatrixState={setMatrixState}
            />
            <ButtonDelete
              matrixState={matrixState}
              setMatrixState={setMatrixState}
              index={index}
            />
          </tr>
        );
      })}
    </>
  );
};

export default Columns;
