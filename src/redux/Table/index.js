const GET_TABLE_DATA = "GET_TABLE_DATA";
const ADD_CELLS_COUNT = "ADD_CELLS_COUNT";

const initialState = {
  matrixState: [],
  columnsArray: [],
};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TABLE_DATA: {
      const columnsArray = Array(Number(action.payload.columns))
        .fill(0)
        .map((c, i) => i + 1);

      const rowsArray = Array(Number(action.payload.rows))
        .fill(0)
        .map((c, i) => i + 1);

      const matrixArray = rowsArray.map((el) => {
        return columnsArray.map((item) => ({
          id: Date.now() * Math.random(),
          value: Math.floor(Math.random() * 10),
        }));
      });

      return {
        ...state,
        matrixState: matrixArray,
        columnsArray: columnsArray,
      };
    }

    case ADD_CELLS_COUNT: {
      const addingCells = state.matrixState.map((item) =>
        item.map((el) =>
          el.id === action.payload ? { id: el.id, value: el.value + 1 } : el
        )
      );

      return {
        ...state,
        matrixState: addingCells,
      };
    }

    default:
      return state;
  }
}

export const getTableDate = (obj) => ({
  type: GET_TABLE_DATA,
  payload: obj,
});

export const addCountCells = (id) => ({
  type: ADD_CELLS_COUNT,
  payload: id,
});
