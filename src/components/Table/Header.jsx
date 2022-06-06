import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { matrixState, columnsArray } = useSelector((state) => state.table);
  return (
    <thead>
      <tr>
        <th scope="col">N</th>
        {matrixState.length ? (
          columnsArray.map((column) => {
            return (
              <th key={column} scope="col">
                {column}
              </th>
            );
          })
        ) : (
          <th>0</th>
        )}
        <th scope="col">SUM</th>
      </tr>
    </thead>
  );
};

export default Header;
