import { useState } from "react";

const Person = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState({
    salary: props.salary,
    location: props.location,
    department: props.department,
    skills: props.skills.join(", "),
  });

  const handleSave = () => {
    console.log("Saving...");
  };

  const handleCancel = () => {
    console.log("Cancelling...");

    setIsEditing(false);
  };

  const getYears = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }
    if (years < 0) {
      years = 0;
    }

    return { years, months };
  };
  const { years, months } = getYears(props.startDate);

  const celebrate = years > 0 && years % 5 === 0 && months === 0;
  const probation = years === 0 && months <= 6;

  const animalEmoji = (animal) => {
    const animalMap = {
      lion: "🦁",
      tiger: "🐯",
      rabbit: "🐰",
      fox: "🦊",
      wolf: "🐺",
      butterfly: "🦋",
      horse: "🐴",
      penguin: "🐧",
      raccoon: "🦝",
      camel: "🐪",
      cat: "🐱",
      dog: "🐶",
      bear: "🐻",
      elephant: "🐘",
      monkey: "🐒",
      cow: "🐮",
      pig: "🐷",
      chicken: "🐔",
      frog: "🐸",
      deer: "🦌",
    };

    return animalMap[animal?.trim().toLowerCase()] || animal;
  };

  const emoji = animalEmoji(props.animal);

  return (
    <div className="person">
      <p>
        <strong>Id:</strong> {props.id}
      </p>
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Title:</strong> {props.title}
      </p>
      <p>
        <strong>Salary:</strong> {props.salary}
      </p>
      <p>
        <strong>Phone:</strong> {props.phone}
      </p>
      <p>
        <strong>Email:</strong> {props.email}
      </p>
      <p>
        <strong>Animal: </strong>
        {emoji}
      </p>
      <p>
        <strong>Start Date: </strong>
        {props.startDate}
      </p>
      <p>
        <strong>Years Worked: </strong>
        {`${years} years and ${months} months`}
      </p>
      {celebrate && <p>🎉 Schedule recognition meeting.</p>}
      {probation && <p>🔔 Schedule probation review.</p>}
      <p>
        <strong>Location: </strong>
        {props.location}
      </p>
      <p>
        <strong>Department: </strong>
        {props.department}
      </p>
      <p>
        <strong>Skills: </strong>
        {props.skills.join(", ")}
      </p>

      <div className="person-footer">
        {!isEditing ? (
          <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        ) : (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
};
export default Person;
