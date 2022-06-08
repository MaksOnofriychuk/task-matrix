import { MatrixState, TableAction, TableActionsTypes } from "../../types/table";
import { createArray } from "../../utils/helpers";

const initialState: MatrixState = {
  columns: [],
  rows: [],
  matrix: [],
  formData: "",
  cellHover: 0,
};

export default function tableReducer(
  state = initialState,
  action: TableAction
): MatrixState {
  switch (action.type) {
    case TableActionsTypes.GET_TABLE_DATA: {
      const columns = createArray(action.payload.columns);
      const rows = createArray(action.payload.rows);

      const newMatrix = rows.map((_, i) => {
        return {
          id: `${_}${i}`,
          value: [
            ...columns.map((_, j) => {
              return {
                id: `${i}${j}`,
                value: Math.floor(Math.random() * 1000),
              };
            }),
          ],
        };
      });

      return {
        ...state,
        columns: columns,
        rows: rows,
        formData: action.payload,
        matrix: newMatrix,
      };
    }

    case TableActionsTypes.ADD_CELL_COUNT: {
      const newMatrix = state.matrix.map((rows) => {
        const newRows = rows.value.map((cell: any) => {
          return cell.id === action.payload
            ? { id: cell.id, value: cell.value + 1 }
            : cell;
        });
        return { id: rows.id, value: newRows };
      });

      return {
        ...state,
        matrix: newMatrix,
      };
    }

    case TableActionsTypes.DELETE_ROW: {
      const newMatrix = state.matrix.filter(
        (rows) => rows.id !== action.payload.id
      );

      return {
        ...state,
        matrix: newMatrix,
      };
    }

    case TableActionsTypes.ADD_ROW:
      const newValue = state.columns.map((col, index) => ({
        id: `${col}${index}`,
        value: Math.floor(Math.random() * 1000),
      }));

      const newMatrix = [
        ...state.matrix,
        { id: `${Math.random()}`, value: newValue },
      ];

      return {
        ...state,
        matrix: newMatrix,
      };

    case TableActionsTypes.HOVERING_CELL:
      console.log(action.payload);

      return {
        ...state,
        cellHover: action.payload,
      };

    default:
      return state;
  }
}
