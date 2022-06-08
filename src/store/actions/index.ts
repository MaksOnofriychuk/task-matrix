import { TableActionsTypes } from "../../types/table";

export const getTableData = (obj: object) => ({
  type: TableActionsTypes.GET_TABLE_DATA,
  payload: obj,
});

export const addCountCell = (id: string) => ({
  type: TableActionsTypes.ADD_CELL_COUNT,
  payload: id,
});

export const deleteRow = (obj: any) => ({
  type: TableActionsTypes.DELETE_ROW,
  payload: obj,
});

export const addedRow = () => ({
  type: TableActionsTypes.ADD_ROW,
});

export const hoverCell = (num: number) => ({
  type: TableActionsTypes.HOVERING_CELL,
  payload: num,
});
