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
      const columnsArray = Array(Number(action.payload.columns))
        .fill(0)
        .map((_, i) => i + 1);

      const rowsArray = Array(Number(action.payload.rows))
        .fill(0)
        .map((_, i) => i + 1);

      const matrixArray = rowsArray.map((_, i) => {
        return columnsArray.map((_, j) => ({
          id: `${i} + ${j}`,
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
        (_, i) => i !== action.payload
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
          state.columnsArray.map((column, i) => ({
            id: `${column}${i}`,
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

export const deleteRow = (index) => ({
  type: DELETE_ROW,
  payload: index,
});

export const addedRow = () => ({
  type: ADD_ROW,
});
