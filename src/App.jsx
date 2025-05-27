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

  const handleUpdateEmployee = (updatedEmp) => {
    setEmployeesState((prev) =>
      prev.map((emp) => (emp.id === updatedEmp.id ? updatedEmp : emp))
    );
  };

  const handleDeleteEmployee = (deletedEmp) => {
    axios
      .delete(`http://localhost:3001/employees/${deletedEmp}`)
      .then(() => {
        setEmployeesState((prev) =>
          prev.filter((emp) => emp.id !== deletedEmp)
        );
      })
      .catch((err) => console.error("Failed to delete employee", err));
  };

  return (
    <>
      <Header name="HR App" />
      <Routes>
        <Route
          path="/"
          element={
            <PersonList
              employees={employeesState}
              onUpdate={handleUpdateEmployee}
              onDelete={handleDeleteEmployee}
            />
          }
        />
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
