import { ADD_CELL_COUNT, ADD_ROW, DELETE_ROW, GET_TABLE_DATA } from "../Table";

export const getTableData = (obj) => ({
  type: GET_TABLE_DATA,
  payload: obj,
});

export const addCountCell = (id) => ({
  type: ADD_CELL_COUNT,
  payload: id,
});

export const deleteRow = (rows) => ({
  type: DELETE_ROW,
  payload: rows,
});

export const addedRow = () => ({
  type: ADD_ROW,
});
