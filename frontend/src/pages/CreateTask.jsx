import { useState } from "react";
import API from "../services/api";

function CreateTask() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("P3");
  const [skills, setSkills] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/api/tasks/create/",
        {
          title: title,
          description: description,
          priority: priority,
          deadline: deadline,
          required_skills: skills,
          required_position: "Junior"
        }
      );

      alert(response.data.message);

      setTitle("");
      setDescription("");
      setPriority("P3");
      setSkills("");
      setDeadline("");

    } catch (error) {

  console.log("ERROR:", error);

  if (error.response) {
    console.log("STATUS:", error.response.status);
    console.log("DATA:", error.response.data);
  }

  alert("Task creation failed");
}
  };

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3>Create Task</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label className="form-label">
                Task Title
              </label>

              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Description
              </label>

              <textarea
                className="form-control"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

            </div>

            <div className="mb-3">

              <label className="form-label">
                Priority
              </label>

              <select
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >

                <option>P1</option>
                <option>P2</option>
                <option>P3</option>
                <option>P4</option>

              </select>

            </div>

            <div className="mb-3">

              <label className="form-label">
                Required Skills
              </label>

              <input
                type="text"
                className="form-control"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Deadline
              </label>

              <input
                type="date"
                className="form-control"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />

            </div>

            <button
              type="submit"
              className="btn btn-success w-100"
            >
              Create Task
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default CreateTask;