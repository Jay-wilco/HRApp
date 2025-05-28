import useAxios from "./hooks/useAxios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import PersonList from "./components/Person/PersonList";
import AddEmployee from "./pages/AddEmployee";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const [employeesState, setEmployeesState] = useState([]);

  const { get, del } = useAxios();

  useEffect(() => {
    get("http://localhost:3001/employees")
      .then((data) => setEmployeesState(data))
      .catch((err) => console.error("Failed to get employees", err));
  }, [get]);

  const handleUpdateEmployee = (updatedEmp) => {
    setEmployeesState((prev) =>
      prev.map((emp) => (emp.id === updatedEmp.id ? updatedEmp : emp))
    );
  };

  const handleDeleteEmployee = (deletedEmp) => {
    del(`http://localhost:3001/employees/${deletedEmp}`)
      .then(() => {
        setEmployeesState((prev) =>
          prev.filter((emp) => emp.id !== deletedEmp)
        );
      })
      .catch((err) => console.error("Failed to delete employee", err));
  };

  return (
    <div className="app-container">
      <Header name="HR App" />
      <main>
        <Routes>
          <Route path="/" element={<FrontPage employees={employeesState} />} />
          <Route
            path="/employees"
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
      </main>
      <Footer fullName="Jay Wilco" />
    </div>
  );
};

export default App;
