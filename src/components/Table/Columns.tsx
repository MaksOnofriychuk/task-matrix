import React, { FC, useEffect, useMemo } from "react";
import { useActions } from "../../hooks/useActions";
import { useSelectorHook } from "../../hooks/useSelectorHook";
import {
  ButtonDeleteProps,
  CellProps,
  CellsProps,
  MatrixCell,
  MatrixCells,
  RowAvarageProps,
} from "../../types/table";
import "./columns.scss";

export const Cells: FC<CellsProps> = ({ cells }) => {
  const { sumHover } = useSelectorHook((state) => state.table);

  const cellPercent =
    cells.value.reduce(
      (resultNumber: number, cell: MatrixCell) => resultNumber + cell.value,
      0
    ) === sumHover
      ? cells.value.map((cell: MatrixCell) => {
          return {
            id: cell.id,
            value: `${((cell.value / sumHover) * 100).toFixed(0)}%`,
          };
        })
      : cells.value;

  return (
    <>
      {cellPercent.map((cell: any) => {
        return <Cell key={cell.id} cell={cell} />;
      })}
    </>
  );
};

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

  const examinationValue = typeof cell.value === "string";

  return (
    <>
      {!examinationValue ? (
        <td
          className={isHover ? "hovering" : "cell"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={addingCell}
        >
          {cell.value}
        </td>
      ) : (
        <td
          className={"hovers"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={addingCell}
        >
          <div
            className="dop__background"
            style={{ height: `${cell.value}` }}
          ></div>
          <span>{cell.value}</span>
        </td>
      )}
    </>
  );
};

export const RowAvarage: FC<RowAvarageProps> = ({ cells }) => {
  const { setHoverSum } = useActions();
  const [isHoverSum, setIsHoverSum] = React.useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHoverSum(true);
  };

  const handleMouseOut = () => {
    setIsHoverSum(false);
    setHoverSum(0);
  };

  useEffect(() => {
    if (isHoverSum) {
      setHoverSum(memoizadeValue);
    }
  }, [isHoverSum]);

  const memoizadeValue = useMemo(() => {
    return cells.reduce(
      (resultNumber: number, cell: MatrixCell) => resultNumber + cell.value,
      0
    );
  }, [cells]);

  return (
    <th
      className="row-avarage"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {memoizadeValue}
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
      <button className="delete__btn-row" onClick={deletingRow}>
        x
      </button>
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
            <Cells cells={cells} />
            <RowAvarage cells={cells.value} />
            <ButtonDelete cells={cells} />
          </tr>
        );
      })}
    </>
  );
};

export default React.memo(Columns);
