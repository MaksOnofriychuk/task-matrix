import { TableActionsTypes } from "../../types/table";

export const getTableData = (obj: object) => ({
  type: TableActionsTypes.GET_TABLE_DATA,
  payload: obj,
});

export const addCountCell = (id: boolean) => ({
  type: TableActionsTypes.ADD_CELL_COUNT,
  payload: id,
});

export const deleteRow = (id: number) => ({
  type: TableActionsTypes.DELETE_ROW,
  payload: id,
});

export const addedRow = () => ({
  type: TableActionsTypes.ADD_ROW,
});
