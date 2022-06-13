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
  formData: string | FormState;
  matrix: any[];
  cellHover: MatrixCell | number;
  hoverACells: MatrixCell[];
  cells: number;
  sumHover: number;
}

export enum TableActionsTypes {
  GET_TABLE_DATA = "GET_TABLE_DATA",
  ADD_CELL_COUNT = "ADD_CELL_COUNT",
  DELETE_ROW = "DELETE_ROW",
  ADD_ROW = "ADD_ROW",
  SET_HOVERING_CELL = "SET_HOVERING_CELL",
  SET_HOVERING_SUM = "SET_HOVERING_SUM",
}

export interface GetTableDataAction {
  type: TableActionsTypes.GET_TABLE_DATA;
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

export interface SetHoveringCell {
  type: TableActionsTypes.SET_HOVERING_CELL;
  payload: MatrixCell;
}

export interface SetHoveringSum {
  type: TableActionsTypes.SET_HOVERING_SUM;
  payload: number;
}

export type TableAction =
  | GetTableDataAction
  | AddCountCellAction
  | DeleteRowAction
  | AddedRowAction
  | SetHoveringCell
  | SetHoveringSum;

export interface ButtonDeleteProps {
  cells: MatrixCells;
}

export interface RowAvarageProps {
  cells: MatrixCell[];
}

export interface CellProps {
  cell: MatrixCell;
}

export interface CellsProps {
  cells: MatrixCells;
}

