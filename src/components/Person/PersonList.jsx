import BackToTop from "../BackToTop/BackToTop";
import PersonCard from "./PersonCard";

const PersonList = ({ employees, onUpdate, onDelete }) => {
  return (
    <>
      <h2>Employees</h2>
      <main>
        {employees.length > 0 ? (
          employees.map((employee) => (
            <PersonCard
              key={employee.id}
              {...employee}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p>No employees found.</p>
        )}
      </main>
      <BackToTop />
    </>
  );
};

export default PersonList;
