import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FormState,
  MatrixCell,
  MatrixCells,
  MatrixState,
} from "../../types/table";
import { createArray } from "../../utils/helpers";

const initialState: MatrixState = {
  formData: "",
  columns: [],
  rows: [],
  cells: 0,
  matrix: [],
  cellHover: 0,
  hoverACells: [],
  sumHover: 0,
};

// export default function tableReducer(
//   state = initialState,
//   action: TableAction
// ): MatrixState {
//   switch (action.type) {
//     case TableActionsTypes.GET_TABLE_DATA: {
//       const columns: number[] = createArray(action.payload.columns);
//       const rows: number[] = createArray(action.payload.rows);
//       const cells: number = Number(action.payload.cells);

//       const newMatrix = rows.map((item, i) => {
//         return {
//           id: `${item}${i}`,
//           value: [
//             ...columns.map((_, j) => {
//               return {
//                 id: `${i}${j}`,
//                 value: Math.floor(Math.random() * 1000),
//               };
//             }),
//           ],
//         };
//       });

//       return {
//         ...state,
//         columns: columns,
//         rows: rows,
//         formData: action.payload,
//         matrix: newMatrix,
//         cells: cells,
//       };
//     }

//     case TableActionsTypes.ADD_CELL_COUNT: {
//       const newMatrix = state.matrix.map((rows) => {
//         const newRows = rows.value.map((cell: MatrixCell) => {
//           return cell.id === action.payload
//             ? { id: cell.id, value: cell.value + 1 }
//             : cell;
//         });
//         return { id: rows.id, value: newRows };
//       });

//       return {
//         ...state,
//         matrix: newMatrix,
//       };
//     }

//     case TableActionsTypes.DELETE_ROW: {
//       const newMatrix = state.matrix.filter(
//         (rows: MatrixCells) => rows.id !== action.payload.id
//       );

//       return {
//         ...state,
//         matrix: newMatrix,
//       };
//     }

//     case TableActionsTypes.ADD_ROW:
//       const newValue = state.columns.map((col: number, index) => ({
//         id: `${col}${index}`,
//         value: Math.floor(Math.random() * 1000),
//       }));

//       const newMatrix: MatrixCells[] = [
//         ...state.matrix,
//         { id: `${Math.random()}`, value: newValue },
//       ];

//       return {
//         ...state,
//         matrix: newMatrix,
//       };

//     case TableActionsTypes.SET_HOVERING_CELL:
//       const rowsValue: MatrixCell[][] = action.payload.value
//         ? state.matrix.map((row: MatrixCells) => row.value)
//         : [];
//       const cells: MatrixCell[] = rowsValue.flat(1);

//       const diferenceValue: MatrixCell[] = cells.map((cell: MatrixCell) => {
//         const currentFromIncoming = Math.abs(cell.value - action.payload.value);
//         const IncomingFromCurrent = Math.abs(action.payload.value - cell.value);
//         const comparisonResult =
//           currentFromIncoming > IncomingFromCurrent
//             ? currentFromIncoming
//             : IncomingFromCurrent;
//         return { id: cell.id, value: comparisonResult };
//       });
//       const newDiferenceArray = diferenceValue.sort(
//         (a: MatrixCell, b: MatrixCell) => a.value - b.value
//       );

//       const resultCells: MatrixCell[] = newDiferenceArray.map(
//         (cell: MatrixCell) => {
//           return {
//             id: cell.id,
//             value: Math.abs(action.payload.value - cell.value),
//           };
//         }
//       );

//       const newResultCells: MatrixCell[] = resultCells
//         .filter((cell: MatrixCell) => cell.value !== action.payload.value)
//         .slice(0, state.cells);

//       return {
//         ...state,
//         cellHover: action.payload,
//         hoverACells: newResultCells,
//       };

//     case TableActionsTypes.SET_HOVERING_SUM: {
//       return {
//         ...state,
//         sumHover: action.payload,
//       };
//     }

//     default:
//       return state;
//   }
// }

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    getTableData(state, action: PayloadAction<FormState>) {
      const columns: number[] = createArray(action.payload.columns);
      const rows: number[] = createArray(action.payload.rows);
      const cells: number = Number(action.payload.cells);

      const newMatrix = rows.map((item, i) => {
        return {
          id: `${item}${i}`,
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

      state.columns = columns;
      state.rows = rows;
      state.formData = action.payload;
      state.matrix = newMatrix;
      state.cells = cells;
    },
    addCountCell(state, action: PayloadAction<string>) {
      const newMatrix = state.matrix.map((rows) => {
        const newRows = rows.value.map((cell: MatrixCell) => {
          return cell.id === action.payload
            ? { id: cell.id, value: cell.value + 1 }
            : cell;
        });
        return { id: rows.id, value: newRows };
      });

      state.matrix = newMatrix;
    },
    setHoverCell(state, action: PayloadAction<any>) {
      const rowsValue: MatrixCell[][] = action.payload.value
        ? state.matrix.map((row: MatrixCells) => row.value)
        : [];
      const cells: MatrixCell[] = rowsValue.flat(1);

      const diferenceValue: MatrixCell[] = cells.map((cell: MatrixCell) => {
        const currentFromIncoming = Math.abs(cell.value - action.payload.value);
        const IncomingFromCurrent = Math.abs(action.payload.value - cell.value);
        const comparisonResult =
          currentFromIncoming > IncomingFromCurrent
            ? currentFromIncoming
            : IncomingFromCurrent;
        return { id: cell.id, value: comparisonResult };
      });
      const newDiferenceArray = diferenceValue.sort(
        (a: MatrixCell, b: MatrixCell) => a.value - b.value
      );

      const resultCells: MatrixCell[] = newDiferenceArray.map(
        (cell: MatrixCell) => {
          return {
            id: cell.id,
            value: Math.abs(action.payload.value - cell.value),
          };
        }
      );

      const newResultCells: MatrixCell[] = resultCells
        .filter((cell: MatrixCell) => cell.value !== action.payload.value)
        .slice(0, state.cells);

      state.cellHover = action.payload;
      state.hoverACells = newResultCells;
    },
    setHoverSum(state, action: PayloadAction<number>) {
      state.sumHover = action.payload;
    },
    deleteRow(state, action: PayloadAction<MatrixCells>) {
      const newMatrix = state.matrix.filter(
        (rows: MatrixCells) => rows.id !== action.payload.id
      );
      state.matrix = newMatrix;
    },
    addedRow(state) {
      const newValue = state.columns.map((col: number, index) => ({
        id: `${col}${index}`,
        value: Math.floor(Math.random() * 1000),
      }));

      const newMatrix: MatrixCells[] = [
        ...state.matrix,
        { id: `${Math.random()}`, value: newValue },
      ];

      state.matrix = newMatrix;
    },
  },
});

export const {
  getTableData,
  addCountCell,
  setHoverCell,
  setHoverSum,
  deleteRow,
  addedRow,
} = tableSlice.actions;

export default tableSlice.reducer;
