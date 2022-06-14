import React from "react";
import { useSelectorHook } from "../../hooks/useSelectorHook";

const Header = () => {
  const { matrix, columns } = useSelectorHook((state) => state.tableReducer);

  return (
    <thead className="table__head">
      <tr className="table__head-rows">
        <th className="rows__cell-n" scope="col">
          N
        </th>
        {matrix.length ? (
          columns.map((column) => {
            return (
              <th className="rows__cell-dynamic" key={column} scope="col">
                {column}
              </th>
            );
          })
        ) : (
          <th>0</th>
        )}
        <th className="rows__cell-sum" scope="col">
          SUM
        </th>
      </tr>
    </thead>
  );
};

export default Header;
