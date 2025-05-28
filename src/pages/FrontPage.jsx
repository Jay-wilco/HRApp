import { useNavigate } from "react-router-dom";
import "./FrontPage.css";

const FrontPage = ({ employees }) => {
  const navigate = useNavigate();

  return (
    <div className="frontpage">
      <h1>Welcome to the HR Dashboard</h1>
      <p className="subtitle">
        Manage your employees, departments, and more — all in one place.
      </p>

      <div className="nav-buttons">
        <button onClick={() => navigate("/employees")}>
          👥 View Employees
        </button>
        <button onClick={() => navigate("/add")}>➕ Add New Employee</button>
      </div>

      <div className="stats">
        <h3>📊 Current Stats</h3>
        <p>
          Total Employees: <strong>{employees?.length || 0}</strong>
        </p>
      </div>
    </div>
  );
};

export default FrontPage;
