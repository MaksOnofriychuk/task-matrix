const GET_FORM_DATA = "GET_FORM_DATA";

const initialState = {
  formData: "",
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };

    default:
      return state;
  }
}

export const getFormData = (obj) => ({
  type: GET_FORM_DATA,
  payload: obj,
});
