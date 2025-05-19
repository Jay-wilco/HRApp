import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import PersonList from "./components/Person/PersonList";
import AddEmployee from "./pages/AddEmployee";
import About from "./pages/About";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  const [employeesState, setEmployeesState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => setEmployeesState(res.data))
      .catch((err) => console.error("Failed to get employees", err));
  }, []);

  return (
    <>
      <Header name="HR App" />
      <Routes>
        <Route path="/" element={<PersonList employees={employeesState} />} />
        <Route
          path="/add"
          element={
            <AddEmployee
              onAddEmployee={setEmployeesState}
              employees={employeesState}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
