import {
  FormState,
  MatrixCell,
  MatrixCells,
  TableActionsTypes,
} from "../../types/table";

export const getTableData = (payload: FormState) => ({
  type: TableActionsTypes.GET_TABLE_DATA,
  payload,
});

export const addCountCell = (payload: string) => ({
  type: TableActionsTypes.ADD_CELL_COUNT,
  payload,
});

export const deleteRow = (payload: MatrixCells) => ({
  type: TableActionsTypes.DELETE_ROW,
  payload,
});

export const addedRow = () => ({
  type: TableActionsTypes.ADD_ROW,
});

export const setHoverCell = (payload: MatrixCell | number) => ({
  type: TableActionsTypes.SET_HOVERING_CELL,
  payload,
});
