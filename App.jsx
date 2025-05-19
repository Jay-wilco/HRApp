import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { employees } from "./PersonData/personsData";
import PersonList from "./components/Person/PersonList";
import AddEmployee from "./pages/AddEmployee";
import About from "./pages/About";
import Header from "./components/Header/Header";
import "App.css";

const App = () => {
  const [employeesState, setEmployeesState] = useState(employees);

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
