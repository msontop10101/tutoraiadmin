import { Routes, Route, Navigate } from "react-router-dom"
import './App.css';
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import Subscribers from './pages/Subscribers'
import Lessons from "./pages/Lessons";
import StudentProfile from "./pages/StudentProfile";
import Payments from "./pages/Payments";
import Invoice from './pages/Invoice'
import Statistics from './pages/Statistics'
import Marketing from './pages/Marketing'
import PreTestContent from './pages/PreTestContent'
import Settings from './pages/Settings'
import MarketingMessage from "./components/MarketingMessage";

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
        <Route path="/payments" element={<Payments />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/pre-test-content" element={<PreTestContent />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/marketing-messages" element={<MarketingMessage />} />
      </Routes>
    </>
  );
}

export default App;
