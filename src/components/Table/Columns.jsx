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
  setmatrixState,
  arrOfObj,
  index,
}) => {
  const deleteRow = (row, index) => {
    const res = matrixState.filter((item, i) => i !== index);
    setmatrixState(res);
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

export const Cell = ({ cellObj, setmatrixState, matrixState }) => {
  const addAmountCell = (objectCell) => {
    const res = matrixState.map((item) =>
      item.map((el) =>
        el.id === objectCell.id ? { id: el.id, value: el.value + 1 } : el
      )
    );
    setmatrixState(res);
  };

  return <td onClick={() => addAmountCell(cellObj)}>{cellObj.value}</td>;
};

const Columns = ({ matrixState, setmatrixState }) => {
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
                  setmatrixState={setmatrixState}
                />
              );
            })}
            <RowAvarage
              arrOfObj={arrOfObj}
              matrixState={matrixState}
              setmatrixState={setmatrixState}
            />
            <ButtonDelete
              matrixState={matrixState}
              setmatrixState={setmatrixState}
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
