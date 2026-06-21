import { Link } from "react-router-dom";

function ManagerDashboard() {
  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-dark text-white">
          <h2>Manager Dashboard</h2>
        </div>

        <div className="card-body">

          <div className="d-grid gap-3">

            <Link
              to="/create-task"
              className="btn btn-primary"
            >
              Create Task
            </Link>

            <Link
              to="/view-tasks"
              className="btn btn-success"
            >
              View Tasks
            </Link>

            <Link
              to="/reports"
              className="btn btn-warning"
            >
              Reports
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManagerDashboard;