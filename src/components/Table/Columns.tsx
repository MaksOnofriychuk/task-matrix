import React, { FC, useEffect, useMemo } from "react";
import { useAppDispatch, useSelectorHook } from "../../hooks/useSelectorHook";
import {
  addCountCell,
  deleteRow,
  setHoverCell,
  setHoverSum,
} from "../../store/reducers/tableSlice";
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
  const { sumHover } = useSelectorHook((state) => state.tableReducer);

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
  const dispatch = useAppDispatch();
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const { hoverACells } = useSelectorHook((state) => state.tableReducer);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    dispatch(setHoverCell(0));
  };

  const addingCell = () => {
    dispatch(addCountCell(cell.id));
  };

  useEffect(() => {
    if (isHovering) {
      dispatch(setHoverCell(cell));
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
          <span className="hover__span">{cell.value}</span>
          <div
            className="dop__background"
            style={{ height: `${cell.value}` }}
          ></div>
        </td>
      )}
    </>
  );
};

export const RowAvarage: FC<RowAvarageProps> = ({ cells }) => {
  const dispatch = useAppDispatch();
  const [isHoverSum, setIsHoverSum] = React.useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHoverSum(true);
  };

  const handleMouseOut = () => {
    setIsHoverSum(false);
    dispatch(setHoverSum(0));
  };

  useEffect(() => {
    if (isHoverSum) {
      dispatch(setHoverSum(memoizadeValue));
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
  const dispatch = useAppDispatch();

  const deletingRow = () => {
    dispatch(deleteRow(cells));
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
  const { matrix } = useSelectorHook((state) => state.tableReducer);

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
