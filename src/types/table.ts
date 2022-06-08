export type MatrixCell = {
  id: string;
  value: number;
};

export type MatrixCells = {
  id: string;
  value: MatrixCell[];
};

export type FormState = {
  columns: string;
  rows: string;
  cells: string;
};

export interface MatrixState {
  rows: number[];
  columns: number[];
  formData: string | object;
  matrix: MatrixCells[];
  cellHover: number;
}

export enum TableActionsTypes {
  GET_TABLE_DATA = "GET_TABLE_DATA",
  ADD_CELL_COUNT = "ADD_CELL_COUNT",
  DELETE_ROW = "DELETE_ROW",
  ADD_ROW = "ADD_ROW",
  HOVERING_CELL = "HOVERING_CELL",
}

export interface GetTableDataAction {
  type: TableActionsTypes.GET_TABLE_DATA; //set
  payload: FormState;
}

export interface AddCountCellAction {
  type: TableActionsTypes.ADD_CELL_COUNT;
  payload: string;
}

export interface DeleteRowAction {
  type: TableActionsTypes.DELETE_ROW;
  payload: any;
}

export interface AddedRowAction {
  type: TableActionsTypes.ADD_ROW;
}

export interface HoveringCell {
  type: TableActionsTypes.HOVERING_CELL;
  payload: number;
}

export type TableAction =
  | GetTableDataAction
  | AddCountCellAction
  | DeleteRowAction
  | AddedRowAction
  | HoveringCell;

export interface ButtonDeleteProps {
  cells: { id: string; value: any[] };
}

export interface RowAvarageProps {
  rowsValue: any[];
}

export interface CellProps {
  id: string;
  value: number;
  testArr: number[];
}
