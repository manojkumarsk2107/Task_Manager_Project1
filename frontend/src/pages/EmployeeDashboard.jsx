import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function EmployeeDashboard() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    try {

      const response = await API.get(
        "/api/employee/tasks/?employee_id=2"
      );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

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

          <div className="card-header bg-primary text-white">
            <h3>My Tasks</h3>
          </div>

          <div className="card-body">

            <table className="table table-hover table-striped">

              <thead>
                <tr>
                  <th>Title</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Deadline</th>
                </tr>
              </thead>

              <tbody>

                {tasks.length > 0 ? (

                  tasks.map((task) => (

                    <tr key={task.task_id}>

                      <td>{task.title}</td>

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

                      <td>{task.deadline}</td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td colSpan="4" className="text-center">
                      No Tasks Assigned
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </>
  );
}

export default EmployeeDashboard;