import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Header = () => {
  const { matrix, columns } = useTypedSelector((state) => state.table);

  return (
    <thead>
      <tr>
        <th scope="col">N</th>
        {matrix.length ? (
          columns.map((column) => {
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
