import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ManagerDashboard from "./pages/ManagerDashboard";
import CreateTask from "./pages/CreateTask";
import ViewTasks from "./pages/ViewTasks";
import Reports from "./pages/Reports";
import EmployeeDashboard from "./pages/EmployeeDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/view-tasks" element={<ViewTasks />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/employee" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;