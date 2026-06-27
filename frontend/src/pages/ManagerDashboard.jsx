import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function ManagerDashboard() {

  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {

    try {

      const response = await API.get(
        "/api/reports/"
      );

      setStats(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2 className="mb-4">
          Manager Dashboard
        </h2>

        <div className="row">

          <div className="col-md-3 mb-3">
            <div className="card shadow text-center border-primary">
              <div className="card-body">
                <h6>Total Tasks</h6>
                <h2>{stats.total_tasks}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow text-center border-success">
              <div className="card-body">
                <h6>Completed</h6>
                <h2>{stats.completed_tasks}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow text-center border-warning">
              <div className="card-body">
                <h6>Pending</h6>
                <h2>{stats.pending_tasks}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow text-center border-info">
              <div className="card-body">
                <h6>In Progress</h6>
                <h2>{stats.in_progress_tasks}</h2>
              </div>
            </div>
          </div>

        </div>

        <div className="row mt-3">

          <div className="col-md-6 mb-3">

            <div className="card shadow">

              <div className="card-body">

                <h5>🏆 Top Employee</h5>

                <h3>
                  {stats.top_employee}
                </h3>

              </div>

            </div>

          </div>

          <div className="col-md-6 mb-3">

            <div className="card shadow">

              <div className="card-body">

                <h5>🤖 Average AI Score</h5>

                <h3>
                  {stats.average_score}
                </h3>

              </div>

            </div>

          </div>

        </div>

        <hr />

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
    </>
  );
}

export default ManagerDashboard;