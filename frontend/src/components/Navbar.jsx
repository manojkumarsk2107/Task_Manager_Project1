import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/manager"
        >
          AI Task Manager
        </Link>

        <div className="navbar-nav ms-auto">

          <Link
            className="nav-link"
            to="/manager"
          >
            Dashboard
          </Link>

          <Link
            className="nav-link"
            to="/create-task"
          >
            Create Task
          </Link>

          <Link
            className="nav-link"
            to="/view-tasks"
          >
            Tasks
          </Link>

          <Link
            className="nav-link"
            to="/reports"
          >
            Reports
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;