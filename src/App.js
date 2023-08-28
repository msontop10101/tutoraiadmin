import { Routes, Route, Navigate } from "react-router-dom"
import './App.css';
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import Subscribers from './pages/Subscribers'
import Lessons from "./pages/Lessons";
import StudentProfile from "./pages/StudentProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/subscribers" element={<Subscribers />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/student-profile" element={<StudentProfile />} />
      </Routes>
    </>
  );
}

export default App;
