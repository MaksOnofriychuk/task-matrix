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

export const Cell: FC<CellProps> = ({ cell }) => {
  const { addCountCell, setHoverCell } = useActions();
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const { hoverACells } = useSelectorHook((state) => state.table);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setHoverCell(0);
  };

  const addingCell = () => {
    addCountCell(cell.id);
  };

  useEffect(() => {
    if (isHovering) {
      setHoverCell(cell);
    }
  }, [isHovering]);

  const isHover = hoverACells.some((elem) => elem.id === cell.id);

  return (
    <td
      className={isHover ? "ok" : ""}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={addingCell}
    >
      {cell.value}
    </td>
  );
};

export const RowAvarage: FC<RowAvarageProps> = ({ rowsValue }) => {
  const [isHoverSum, setIsHoverSum] = React.useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHoverSum(true);
  };

  const handleMouseOut = () => {
    setIsHoverSum(false);
  };

  console.log(isHoverSum);
  
  return (
    <th onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
  const { matrix } = useSelectorHook((state) => state.table);

  return (
    <>
      {matrix.map((cells: MatrixCells, index) => {
        return (
          <tr key={`${index}${matrix.length}`}>
            <th>{index + 1}</th>
            {cells.value.map((cell: MatrixCell) => {
              return <Cell key={cell.id} cell={cell} />;
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
