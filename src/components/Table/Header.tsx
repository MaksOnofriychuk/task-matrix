import React from "react";
import { useSelectorHook } from "../../hooks/useSelectorHook";

const Header = () => {
  const { matrix, columns } = useSelectorHook((state) => state.table);

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
