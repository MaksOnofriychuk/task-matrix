import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addCountCell, deleteRow } from "../../store/actions";
import {
  ButtonDeleteProps,
  CellProps,
  MatrixCell,
  MatrixCells,
  RowAvarageProps,
} from "../../types/table";

export const Cell: FC<CellProps> = ({ id, value }) => {
  const dispatch = useDispatch();

  const addingCell = (id: any) => {
    dispatch(addCountCell(id));
  };

  return <td onClick={() => addingCell(id)}>{value}</td>;
};

export const RowAvarage: FC<RowAvarageProps> = ({ rowsValue }) => {
  return (
    <>
      {rowsValue && (
        <th>
          {rowsValue.reduce(
            (resultNumber: number, cell: MatrixCell) =>
              resultNumber + cell.value,
            0
          )}
        </th>
      )}
    </>
  );
};

export const ButtonDelete: FC<ButtonDeleteProps> = ({ rowsId }) => {
  const dispatch = useDispatch();

  const deletingRow = (rowsId: number) => {
    dispatch(deleteRow(rowsId));
  };

  return (
    <th>
      <button onClick={() => deletingRow(rowsId)}>x</button>
    </th>
  );
};

const Columns = () => {
  const { matrix } = useTypedSelector((state) => state.table);
  console.log(matrix);

  return (
    <>
      {matrix.map((rows: MatrixCells) => {
        return (
          <tr key={rows.id}>
            <th>{rows.id}</th>
            {rows.value.map((cell: MatrixCell) => {
              return <Cell key={cell.id} {...cell} />;
            })}
            <RowAvarage rowsValue={rows.value} />
            <ButtonDelete rowsId={rows.id} />
          </tr>
        );
      })}
    </>
  );
};

export default Columns;
