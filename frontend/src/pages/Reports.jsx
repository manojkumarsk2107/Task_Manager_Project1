import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Reports() {

  const [report, setReport] = useState({});

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {

    try {

      const response = await API.get(
        "/api/reports/"
      );

      setReport(response.data);

    } catch (error) {

      console.error(error);

    }
  };

  const doughnutData = {
    labels: [
      "Completed",
      "Pending",
      "In Progress"
    ],
    datasets: [
  {
    label: "Tasks",
    data: [
      report.completed_tasks || 0,
      report.pending_tasks || 0,
      report.in_progress_tasks || 0
    ],
    backgroundColor: [
      "#198754",
      "#ffc107",
      "#0d6efd"
    ]
  }
]
  };

  const barData = {
    labels: [
      "Completed",
      "Pending",
      "In Progress"
    ],
    datasets: [
  {
    label: "Tasks",
    data: [
      report.completed_tasks || 0,
      report.pending_tasks || 0,
      report.in_progress_tasks || 0
    ],
    backgroundColor: [
      "#198754", // green
      "#ffc107", // yellow
      "#0d6efd"  // blue
    ]
  }
]
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="mb-4">
          Reports Dashboard
        </h2>

        <div className="row">

          <div className="col-md-3 mb-3">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5>Total Tasks</h5>
                <h2>{report.total_tasks}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5>Completed</h5>
                <h2>{report.completed_tasks}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5>Pending</h5>
                <h2>{report.pending_tasks}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card text-center shadow">
              <div className="card-body">
                <h5>In Progress</h5>
                <h2>{report.in_progress_tasks}</h2>
              </div>
            </div>
          </div>

        </div>

        <div className="row mt-3">

          <div className="col-md-6">

            <div className="card shadow">

              <div className="card-body">

                <h4>🏆 Top Employee</h4>

                <h2>
                  {report.top_employee}
                </h2>

              </div>

            </div>

          </div>

          <div className="col-md-6">

            <div className="card shadow">

              <div className="card-body">

                <h4>🤖 Average AI Score</h4>

                <h2>
                  {report.average_score}
                </h2>

              </div>

            </div>

          </div>

        </div>

        <div className="row mt-4">

          <div className="col-md-6">

            <div className="card shadow">

              <div className="card-body">

                <h4 className="text-center mb-3">
                  Task Distribution
                </h4>

                <Doughnut data={doughnutData} />

              </div>

            </div>

          </div>

          <div className="col-md-6">

            <div className="card shadow">

              <div className="card-body">

                <h4 className="text-center mb-3">
                  Task Overview
                </h4>

                <Bar
                data={barData}
                options={{
                    plugins: {
                    legend: {
                        display: false
                    }
    }
  }}
/>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Reports;