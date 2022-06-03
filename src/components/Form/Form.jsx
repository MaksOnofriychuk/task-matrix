import React, { useState } from "react";
import "./form.scss";

const Form = ({ getFormState }) => {
  const [formState, setFormState] = useState({
    columns: "",
    rows: "",
    cells: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formState.columns >= 0 &&
      formState.columns !== "" &&
      formState.rows >= 0 &&
      formState.rows !== "" &&
      formState.cells !== ""
    ) {
      getFormState(formState);
    } else {
      return;
    }

    setFormState({
      columns: "",
      rows: "",
      cells: "",
    });
  };

  const handleChange = ({ target }) => {
    setFormState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <div className="matrix__content-form">
      <div className="form__title">
        <h1>Matrix builder</h1>
      </div>
      <div className="form__wrap">
        <form onSubmit={handleSubmit} className="form__form">
          <div className="input__wrap">
            <p className="input__text">Enter the number of columns</p>
            <input
              value={formState.columns}
              onChange={handleChange}
              name="columns"
              type="number"
              className="form__input"
              min="0"
            />
          </div>
          <div className="input__wrap">
            <p className="input__text">Enter the number of rows</p>
            <input
              value={formState.rows}
              onChange={handleChange}
              name="rows"
              className="form__input"
            />
          </div>
          <div className="input__wrap">
            <p className="input__text">Enter the number of cells</p>
            <input
              value={formState.cells}
              onChange={handleChange}
              name="cells"
              className="form__input"
            />
          </div>
          <div className="btn__wrap">
            <button type="submit" className="form__btn">
              Create matrix
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
