import axios from "axios";
import { useState } from "react";

const Person = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    salary: props.salary,
    location: props.location,
    department: props.department,
    skills: props.skills.join(", "),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedEmployee = {
      salary: parseFloat(formData.salary),
      location: formData.location,
      department: formData.department,
      skills: formData.skills.split(", ").map((s) => s.trim()),
      phone: formData.phone,
      email: formData.email,
    };

    axios
      .patch(`http://localhost:3001/employees/${props.id}`, updatedEmployee)
      .then((res) => {
        props.onUpdate(res.data);
        setIsEditing(false);
      })
      .catch((err) => {
        console.error("Failed to update employee", err);
      });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      salary: props.salary,
      location: props.location,
      department: props.department,
      skills: props.skills.join(", "),
      phone: props.phone,
      email: props.email,
    });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to remove this employee?")) {
      props.onDelete(props.id);
    }
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
      dog: "🐶",
      cat: "🐱",
      bear: "🐻",
      deer: "🦌",
      elephant: "🐘",
      frog: "🐸",
      koala: "🐨",
      monkey: "🐵",
      panda: "🐼",
      mouse: "🐭",
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

      {isEditing ? (
        <>
          <div className="editPerson">
            <strong>Salary: </strong>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>
          <div className="editPerson">
            <strong>Location: </strong>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="editPerson">
            <strong>Department: </strong>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className="editPerson">
            <strong>Skills: </strong>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
          <div className="editPerson">
            <strong>Phone: </strong>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="editPerson">
            <strong>Email: </strong>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </>
      ) : (
        <>
          <p>
            <strong>Salary:</strong> {props.salary}
          </p>
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

          <p>
            <strong>Phone: </strong>
            {props.phone}
          </p>
          <p>
            <strong>Email: </strong>
            {props.email}
          </p>
        </>
      )}
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

      <div className="person-footer">
        {!isEditing ? (
          <button className="editBtn" onClick={() => setIsEditing(!isEditing)}>
            Edit ✏️{" "}
          </button>
        ) : (
          <>
            <button className="save" onClick={handleSave}>
              Save
            </button>
            <button className="cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="remove" onClick={handleDelete}>
              Remove
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Person;
