import React, { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelectorHook } from "../../hooks/useSelectorHook";
import {
  ButtonDeleteProps,
  CellProps,
  MatrixCell,
  MatrixCells,
  RowAvarageProps,
} from "../../types/table";
import "./columns.scss";

export const Cell: FC<CellProps> = ({ id, value, testArr }) => {
  const { addCountCell, hoverCell } = useActions();
  const [isHovering, setIsHovering] = React.useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    hoverCell(0);
  };

  const addingCell = () => {
    addCountCell(id);
  };

  useEffect(() => {
    if (isHovering) {
      hoverCell(value);
    }
  }, [isHovering]);

  const k = testArr.some((elem) => elem === value);

  return (
    <td
      className={k ? "ok" : ""}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={addingCell}
    >
      {value}
    </td>
  );
};

export const RowAvarage: FC<RowAvarageProps> = ({ rowsValue }) => {
  return (
    <th>
      {rowsValue.reduce(
        (resultNumber: number, cell: MatrixCell) => resultNumber + cell.value,
        0
      )}
    </th>
  );
};

export const ButtonDelete: FC<ButtonDeleteProps> = ({ cells }) => {
  const { deleteRow } = useActions();

  const deletingRow = () => {
    deleteRow(cells);
  };

  return (
    <th>
      <button onClick={deletingRow}>x</button>
    </th>
  );
};

const Columns = () => {
  const { matrix, cellHover } = useSelectorHook((state) => state.table);
  console.log(matrix);

  console.log(cellHover);

  const testArr: any[] = [];

  const b = [1, 2, 3, 4];

  const test = matrix.map((rows) => rows.value.map((cell) => cell.value));
  console.log(test);

  if (cellHover) {
    b.forEach((_) => {
      matrix.forEach((rows, i) => {
        const a = rows.value.reduce((prev: any, current) => {
          return Math.abs(current.value - cellHover) <
            Math.abs(prev.value - cellHover)
            ? current
            : prev;
        });
        if (!testArr[i]) {
          testArr.push(a.value);
        }

        return a.value;
      });
    });
  }

  return (
    <>
      {matrix.map((cells: MatrixCells, index) => {
        return (
          <tr key={`${index}${matrix.length}`}>
            <th>{index + 1}</th>
            {cells.value.map((cell: MatrixCell) => {
              return <Cell testArr={testArr} key={cell.id} {...cell} />;
            })}
            <RowAvarage rowsValue={cells.value} />
            <ButtonDelete cells={cells} />
          </tr>
        );
      })}
    </>
  );
};

export default Columns;
