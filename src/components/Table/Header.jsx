import React from "react";

const Header = ({ columnsArray, matrixState }) => {
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
