import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEmployee.css";
import LoaderSpinner from "../components/LoaderSpinner/LoaderSpinner";

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

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const newEmployee = {
      ...formData,
      id: Date.now().toString(),
      salary: parseFloat(formData.salary),
      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };

    axios
      .post("http://localhost:3001/employees", newEmployee)
      .then((res) => {
        onAddEmployee([...employees, res.data]);

        setFormData({
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
        setTimeout(() => {
          // hide spinner right before navigation
          navigate("/employees");
        }, 1000); // Adjust the time as you like (e.g., 800ms)
      })
      .catch((err) => {
        console.error("failed to add employee", err);
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <LoaderSpinner />}

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

        <button type="submit" disabled={loading}>
          {loading ? <div className="spinner"></div> : "Add Employee"}
        </button>
      </form>
    </>
  );
};

export default AddEmployee;
