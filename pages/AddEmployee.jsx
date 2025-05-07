import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEmployee.css";

const AddEmployee = ({ onAddEmployee, employees }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  });

  const navigate = useNavigate();

  // Handles all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // On form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      ...formData,
      id: Date.now(),
      salary: parseFloat(formData.salary),
      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };

    // Add new employee to state
    onAddEmployee((prevEmployees) => [...prevEmployees, newEmployee]);

    // Navigate back to list
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="addForm">
      <h2>Add New Employee</h2>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        placeholder="Salary"
        required
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="animal"
        value={formData.animal}
        onChange={handleChange}
        placeholder="Spirit Animal"
      />
      <input
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
      />
      <input
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        placeholder="Skills"
      />

      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
