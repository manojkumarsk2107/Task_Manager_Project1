import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function ViewTasks() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    try {

      const response = await API.get(
        "/api/tasks/"
      );

      setTasks(response.data);

    } catch (error) {

      console.log("ERROR:", error);

    }
  };

  const getPriorityBadge = (priority) => {

    switch (priority) {

      case "P1":
        return "bg-danger";

      case "P2":
        return "bg-warning text-dark";

      case "P3":
        return "bg-primary";

      case "P4":
        return "bg-secondary";

      default:
        return "bg-dark";
    }
  };

  const getStatusBadge = (status) => {

    switch (status) {

      case "Completed":
        return "bg-success";

      case "Pending":
        return "bg-warning text-dark";

      case "In Progress":
        return "bg-primary";

      default:
        return "bg-secondary";
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card shadow">

          <div className="card-header bg-success text-white">
            <h3>All Tasks</h3>
          </div>

          <div className="card-body">

            <table className="table table-hover table-striped">

              <thead>

                <tr>
                  <th>Title</th>
                  <th>Employee</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>AI Score</th>
                </tr>

              </thead>

              <tbody>

                {tasks.map((task) => (

                  <tr key={task.task_id}>

                    <td>{task.title}</td>

                    <td>
                      {task.assigned_employee}
                    </td>

                    <td>
                      <span
                        className={`badge ${getPriorityBadge(task.priority)}`}
                      >
                        {task.priority}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`badge ${getStatusBadge(task.status)}`}
                      >
                        {task.status}
                      </span>
                    </td>

                    <td>
                      {task.assignment_score}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </>
  );
}

export default ViewTasks;