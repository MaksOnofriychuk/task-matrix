import React from "react";
import { useSelector } from "react-redux";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
  const { formData } = useSelector((state) => state.table);

  return (
    <div className="matrix">
      <div className="wrapper">
        <Header />
        <div className="matrix__content">
          <Form />
          {formData && <Table />}
        </div>
      </div>
    </div>
  );
}

export default App;
