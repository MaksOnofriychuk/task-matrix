import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="matrix">
      <div className="wrapper">
        <div className="matrix__content">
          <Header />

          <Routes>
            <Route path="/" element={<Form />} />

            <Route path="/table" element={<Table />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
