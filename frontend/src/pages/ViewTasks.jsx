import { useEffect, useState } from "react";
import API from "../services/api";

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

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-success text-white">
          <h3>All Tasks</h3>
        </div>

        <div className="card-body">
            <h1>{tasks.length}</h1>

          <table className="table table-bordered">

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

                  <td>{task.priority}</td>

                  <td>{task.status}</td>

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
  );
}

export default ViewTasks;