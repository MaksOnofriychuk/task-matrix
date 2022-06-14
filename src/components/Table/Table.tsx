import React, { useEffect } from "react";
import Body from "./Body";
import Header from "./Header";
import "./table.scss";
import { useAppDispatch, useSelectorHook } from "../../hooks/useSelectorHook";
import { Link, useNavigate } from "react-router-dom";
import { addedRow } from "../../store/reducers/tableSlice";

const Table = () => {
  const navigate = useNavigate();
  const disptach = useAppDispatch();
  const { matrix } = useSelectorHook((state) => state.tableReducer);

  useEffect(() => {
    if (!matrix.length) {
      navigate("/");
    }
  }, [matrix]);

  const addedingRow = () => {
    disptach(addedRow());
  };

  return (
    <div className="matrix__content-table">
      <div className="wrap__button">
        <button className="table__button" onClick={addedingRow}>
          add row
        </button>
        <Link to="/">
          <button className="table__button-navigate">TABLE</button>
        </Link>
      </div>

      <table className="table">
        <Header />
        <Body />
      </table>
    </div>
  );
};

export default Table;
