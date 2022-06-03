import React from "react";

export const RowAvarage = ({ arrOfObj }) => {
  return (
    <th key={Math.random() + 100}>
      {arrOfObj
        ? arrOfObj.reduce((acc, curr) => {
            return acc + curr.value;
          }, 0)
        : null}
    </th>
  );
};

export const ButtonDelete = ({
  matrixState,
  setmatrxState,
  arrOfObj,
  index,
}) => {
  const deleteRow = (row, index) => {
    const res = matrixState.filter((item, i) => i !== index);
    setmatrxState(res);
  };
  return (
    <th>
      <button
        key={Math.random() * Math.random()}
        onClick={() => deleteRow(arrOfObj, index)}
      >
        x
      </button>
    </th>
  );
};

export const Cell = ({ cellObj, setmatrxState, matrixState }) => {
  const addAmountCell = (objectCell) => {
    const res = matrixState.map((item) =>
      item.map((el) =>
        el.id === objectCell.id ? { id: el.id, value: el.value + 1 } : el
      )
    );
    setmatrxState(res);
  };
  return <td onClick={() => addAmountCell(cellObj)}>{cellObj.value}</td>;
};

const Columns = ({ matrixState, setmatrxState }) => {
  return (
    <>
      {matrixState.map((arrOfObj, index) => {
        return (
          <tr key={Date.now() * Math.random() + 100}>
            <th scope="row">{index + 1}</th>
            {arrOfObj.map((cellObj) => {
              return (
                <Cell
                  key={cellObj.id * Math.random()}
                  cellObj={cellObj}
                  matrixState={matrixState}
                  setmatrxState={setmatrxState}
                />
              );
            })}
            <RowAvarage
              arrOfObj={arrOfObj}
              matrixState={matrixState}
              setmatrxState={setmatrxState}
            />
            <ButtonDelete
              matrixState={matrixState}
              setmatrxState={setmatrxState}
              arrOfObj={arrOfObj}
              index={index}
            />
          </tr>
        );
      })}
    </>
  );
};

export default Columns;
