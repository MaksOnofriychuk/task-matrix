import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCountCell, deleteRow } from "../../redux/Table";

export const Cell = ({ cell }) => {
  const dispatch = useDispatch();

  const addingCell = (cell) => {
    dispatch(addCountCell(cell.id));
  };

  return <td onClick={() => addingCell(cell)}>{cell.value}</td>;
};

export const RowAvarage = ({ rows }) => {
  return (
    <>
      {rows && (
        <th>
          {rows.reduce((resultNumber, cell) => resultNumber + cell.value, 0)}
        </th>
      )}
    </>
  );
};

export const ButtonDelete = ({ rows }) => {
  const dispatch = useDispatch();

  const deletingRow = (rows) => {
    dispatch(deleteRow(rows));
  };

  return (
    <th>
      <button onClick={() => deletingRow(rows)}>x</button>
    </th>
  );
};

const Columns = () => {
  const { matrixState } = useSelector((state) => state.table);

  return (
    <>
      {matrixState.map((rows, index) => {
        return (
          <tr key={`${rows[0].value}${index}`}>
            <th scope="row">{index + 1}</th>
            {rows.map((cell) => {
              return <Cell key={cell.id} cell={cell} />;
            })}
            <RowAvarage rows={rows} />
            <ButtonDelete rows={rows} />
          </tr>
        );
      })}
    </>
  );
};

export default Columns;
