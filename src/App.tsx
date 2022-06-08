import React from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import { useSelectorHook } from "./hooks/useSelectorHook";

function App() {
  const { formData } = useSelectorHook((state) => state.table);

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
