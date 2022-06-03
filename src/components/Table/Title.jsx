import React from "react";

const Title = ({ columnsArray, matrixState }) => {
  return (
    <>
      <tr>
        <th scope="col">N</th>
        {matrixState.length !== 0 ? (
          columnsArray.map((item, i) => {
            return (
              <th key={Math.random() * 500} scope="col">
                {i + 1}
              </th>
            );
          })
        ) : (
          <th>0</th>
        )}
        <th scope="col">SUM</th>
      </tr>
    </>
  );
};

export default Title;
