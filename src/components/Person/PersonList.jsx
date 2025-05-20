import PersonCard from "./PersonCard";

const PersonList = ({ employees, onUpdate }) => {
  return (
    <>
      <h2>Persons</h2>
      <main>
        {employees.length > 0 ? (
          employees.map((employee) => (
            <PersonCard key={employee.id} {...employee} onUpdate={onUpdate} />
          ))
        ) : (
          <p>No employees found.</p>
        )}
      </main>
    </>
  );
};

export default PersonList;
