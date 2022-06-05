const GET_TABLE_DATA = "GET_TABLE_DATA";
const ADD_CELL_COUNT = "ADD_CELL_COUNT";
const DELETE_ROW = "DELETE_ROW";
const ADD_ROW = "ADD_ROW";

const initialState = {
  matrixState: [],
  columnsArray: [],
  formData: "",
};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TABLE_DATA: {
      const createColumnsArray = (columnCount) => {
        return Array(Number(columnCount))
          .fill(0)
          .map((_, i) => i + 1);
      };
      const columnsArray = createColumnsArray(action.payload.columns);

      const createRowsArray = (rowCount) => {
        return Array(Number(rowCount))
          .fill(0)
          .map((_, i) => i + 1);
      };

      const rowsArray = createRowsArray(action.payload.rows);

      const matrixArray = rowsArray.map((_, i) => {
        return columnsArray.map((_, j) => ({
          id: `${i}${j}`,
          value: Math.floor(Math.random() * 1000),
        }));
      });

      return {
        ...state,
        matrixState: matrixArray,
        columnsArray: columnsArray,
        formData: action.payload,
      };
    }

    case ADD_CELL_COUNT: {
      const newMatrixState = state.matrixState.map((items) =>
        items.map((item) =>
          item.id === action.payload
            ? { id: item.id, value: item.value + 1 }
            : item
        )
      );

      return {
        ...state,
        matrixState: newMatrixState,
      };
    }

    case DELETE_ROW: {
      const newMatrixState = state.matrixState.filter(
        (columns) => JSON.stringify(columns) !== JSON.stringify(action.payload)
      );

      return {
        ...state,
        matrixState: newMatrixState,
      };
    }

    case ADD_ROW:
      return {
        ...state,
        matrixState: [
          ...state.matrixState,
          state.columnsArray.map((column, index) => ({
            id: `${column}${index}`,
            value: Math.floor(Math.random() * 1000),
          })),
        ],
      };

    default:
      return state;
  }
}

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
